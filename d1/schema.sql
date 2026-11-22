-- ==============================================================================
-- Taxoryn Early Access Pipeline — Cloudflare D1 Database Schema
-- Version: 1.0.0
-- Dialect: SQLite / Cloudflare D1
-- Target Database: taxoryn-leads-db
-- ==============================================================================

CREATE TABLE IF NOT EXISTS early_access_leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_uuid TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    normalized_email TEXT NOT NULL,
    firm_name TEXT NOT NULL,
    phone TEXT,
    city TEXT,
    practice_size TEXT NOT NULL DEFAULT 'Not specified',
    primary_interest TEXT NOT NULL DEFAULT 'All Modules',
    
    -- Campaign & Referral Attribution
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_content TEXT,
    utm_term TEXT,
    
    -- Idempotency & Deduplication Control
    idempotency_key TEXT NOT NULL UNIQUE,
    submission_ip_hash TEXT,
    
    -- Notification & Delivery Lifecycle State
    status TEXT NOT NULL CHECK(status IN ('NEW', 'NOTIFIED', 'PENDING_RETRY', 'FAILED_PERMANENT', 'ARCHIVED')) DEFAULT 'NEW',
    notification_attempts INTEGER NOT NULL DEFAULT 0,
    last_notification_error TEXT,
    resend_message_id TEXT,
    
    -- ISO 8601 UTC Timestamps
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
    updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
    notified_at TEXT,
    
    -- Privacy & Retention Governance (DPDP Act Compliance)
    retention_expires_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now', '+180 days')),
    deleted_at TEXT
);

-- Performance & Isolation Indices
CREATE INDEX IF NOT EXISTS idx_leads_normalized_email ON early_access_leads(normalized_email);
CREATE INDEX IF NOT EXISTS idx_leads_status_retry ON early_access_leads(status, notification_attempts);
CREATE INDEX IF NOT EXISTS idx_leads_retention ON early_access_leads(retention_expires_at);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON early_access_leads(created_at);
