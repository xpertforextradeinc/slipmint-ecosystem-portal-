-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create Enums
CREATE TYPE subscription_tier AS ENUM ('free', 'premium', 'institutional');
CREATE TYPE subscription_provider AS ENUM ('flutterwave', 'xpert_token', 'none');

-- Create users table
CREATE TABLE users (
    id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    wallet_address TEXT,
    subscription_tier subscription_tier DEFAULT 'free',
    subscription_provider subscription_provider DEFAULT 'none',
    flutterwave_customer_id TEXT,
    telegram_user_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create Policies
-- Users can view their own profile
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT
    USING (auth.uid() = id);

-- Users can update their own profile (e.g. adding a wallet address)
CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE
    USING (auth.uid() = id);

-- Service Role (Backend) can insert/update/delete any profile
CREATE POLICY "Service Role full access" ON users
    FOR ALL
    USING (current_setting('role') = 'service_role');
