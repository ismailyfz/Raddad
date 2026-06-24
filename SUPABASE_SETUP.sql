-- Run this SQL in your Supabase SQL editor
-- Go to supabase.com → your project → SQL Editor → paste this → Run

create table businesses (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text unique not null,
  whatsapp_number text,
  industry text,
  description text,
  prices text,
  hours text,
  location text,
  common_questions text,
  plan text default 'trial',
  trial_ends_at timestamptz,
  stripe_customer_id text,
  messages_count integer default 0,
  bookings_count integer default 0,
  created_at timestamptz default now()
);

create table messages (
  id uuid default gen_random_uuid() primary key,
  business_id uuid references businesses(id),
  customer_number text,
  role text,
  content text,
  created_at timestamptz default now()
);

alter table businesses enable row level security;
alter table messages enable row level security;

create policy "Public can insert businesses" on businesses for insert with check (true);
create policy "Public can read businesses" on businesses for select using (true);
create policy "Public can update businesses" on businesses for update using (true);
create policy "Public can insert messages" on messages for insert with check (true);
create policy "Public can read messages" on messages for select using (true);
