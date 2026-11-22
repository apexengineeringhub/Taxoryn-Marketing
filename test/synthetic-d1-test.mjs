import assert from 'node:assert';
import { execSync } from 'node:child_process';

console.log('--- Starting Synthetic D1 Pipeline Tests ---');

// Helper to query local D1
function queryD1(sql) {
  const cmd = `npx.cmd wrangler d1 execute taxoryn-leads-db --local --command "${sql.replace(/"/g, '\\"')}"`;
  const output = execSync(cmd, { encoding: 'utf8' });
  const jsonStart = output.indexOf('[\n  {\n');
  if (jsonStart !== -1) {
    const parsed = JSON.parse(output.slice(jsonStart));
    return parsed[0]?.results || [];
  }
  return [];
}

// 1. Verify schema existence
console.log('Test 1: Verify early_access_leads table exists...');
const tables = queryD1("SELECT name FROM sqlite_master WHERE type='table' AND name='early_access_leads';");
assert.strictEqual(tables.length, 1, 'Table early_access_leads must exist');
console.log('✓ Table early_access_leads exists in local preview D1');

// 2. Clear any prior test synthetic data
execSync('npx.cmd wrangler d1 execute taxoryn-leads-db --local --command "DELETE FROM early_access_leads WHERE email LIKE \'%@synthetic-test.in\';"');

// 3. Synthetic Insert
console.log('Test 2: Synthetic enquiry insertion...');
const syntheticLeadUuid = 'lead_synth_' + Date.now();
const syntheticEmail = 'ca.sharma@synthetic-test.in';
const idempotencyKey = 'sharma_idemp_' + Date.now();

const insertSql = `
  INSERT INTO early_access_leads (
    lead_uuid, full_name, email, normalized_email, firm_name, phone, city,
    practice_size, primary_interest, utm_source, utm_medium, utm_campaign,
    idempotency_key, status, notification_attempts, created_at, updated_at
  ) VALUES (
    '${syntheticLeadUuid}', 'CA Rajesh Sharma', '${syntheticEmail}', '${syntheticEmail.toLowerCase()}',
    'Sharma & Associates LLP', '+91 98765 43210', 'Mumbai', '5-10 Staff', 'GST & ITR Compliance',
    'google', 'cpc', 'tax_practice_2026', '${idempotencyKey}', 'NEW', 0,
    strftime('%Y-%m-%dT%H:%M:%SZ', 'now'), strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
  );
`;
execSync(`npx.cmd wrangler d1 execute taxoryn-leads-db --local --command "${insertSql.replace(/\s+/g, ' ').replace(/"/g, '\\"')}"`);

// Verify insertion
const rows = queryD1(`SELECT id, lead_uuid, full_name, email, firm_name, status, notification_attempts FROM early_access_leads WHERE lead_uuid = '${syntheticLeadUuid}';`);
assert.strictEqual(rows.length, 1, 'Synthetic lead must be found in D1');
assert.strictEqual(rows[0].email, syntheticEmail);
assert.strictEqual(rows[0].status, 'NEW');
assert.strictEqual(rows[0].notification_attempts, 0);
console.log('✓ Synthetic lead successfully committed to D1 with status NEW:', rows[0]);

// 4. Test Notification Failure and Retry State Update
console.log('Test 3: Notification failure and PENDING_RETRY update...');
const updateFailSql = `
  UPDATE early_access_leads 
  SET status = 'PENDING_RETRY',
      notification_attempts = notification_attempts + 1,
      last_notification_error = 'HTTP 429: Resend rate limit exceeded (Mocked)',
      updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
  WHERE lead_uuid = '${syntheticLeadUuid}';
`;
execSync(`npx.cmd wrangler d1 execute taxoryn-leads-db --local --command "${updateFailSql.replace(/\s+/g, ' ').replace(/"/g, '\\"')}"`);

const updatedRows = queryD1(`SELECT status, notification_attempts, last_notification_error FROM early_access_leads WHERE lead_uuid = '${syntheticLeadUuid}';`);
assert.strictEqual(updatedRows[0].status, 'PENDING_RETRY');
assert.strictEqual(updatedRows[0].notification_attempts, 1);
assert.ok(updatedRows[0].last_notification_error.includes('HTTP 429'));
console.log('✓ Notification failure recorded in D1 with PENDING_RETRY and error details:', updatedRows[0]);

// 5. Test Successful Notification State
console.log('Test 4: Successful notification state transition...');
const updateSuccessSql = `
  UPDATE early_access_leads 
  SET status = 'NOTIFIED',
      notified_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now'),
      resend_message_id = 'msg_mock_resend_98765',
      updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
  WHERE lead_uuid = '${syntheticLeadUuid}';
`;
execSync(`npx.cmd wrangler d1 execute taxoryn-leads-db --local --command "${updateSuccessSql.replace(/\s+/g, ' ').replace(/"/g, '\\"')}"`);

const notifiedRows = queryD1(`SELECT status, notified_at, resend_message_id FROM early_access_leads WHERE lead_uuid = '${syntheticLeadUuid}';`);
assert.strictEqual(notifiedRows[0].status, 'NOTIFIED');
assert.strictEqual(notifiedRows[0].resend_message_id, 'msg_mock_resend_98765');
assert.ok(notifiedRows[0].notified_at);
console.log('✓ Notification success recorded in D1 with NOTIFIED state and message ID:', notifiedRows[0]);

// 6. Test Idempotency and Duplicate Protection
console.log('Test 5: Idempotency duplicate rejection...');
let duplicateThrew = false;
try {
  execSync(`npx.cmd wrangler d1 execute taxoryn-leads-db --local --command "${insertSql.replace(/\s+/g, ' ').replace(/"/g, '\\"')}"`, { stdio: 'pipe' });
} catch (e) {
  duplicateThrew = true;
}
assert.strictEqual(duplicateThrew, true, 'Duplicate insert with identical idempotency_key must fail UNIQUE constraint');
console.log('✓ Idempotency constraint successfully prevented duplicate insertion in D1');

// 7. Cleanup synthetic test record
execSync(`npx.cmd wrangler d1 execute taxoryn-leads-db --local --command "DELETE FROM early_access_leads WHERE lead_uuid = '${syntheticLeadUuid}';"`);
const remaining = queryD1(`SELECT COUNT(*) as count FROM early_access_leads WHERE lead_uuid = '${syntheticLeadUuid}';`);
assert.strictEqual(remaining[0].count, 0, 'Synthetic test lead must be cleaned up');
console.log('✓ Synthetic test lead cleaned up cleanly from preview D1');

console.log('\n--- ALL SYNTHETIC D1 PIPELINE TESTS PASSED ---');
