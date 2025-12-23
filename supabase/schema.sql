-- Profiles
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  email text unique not null,
  full_name text,
  avatar_url text,
  created_at timestamptz default now()
);

-- Onboarding settings
create table if not exists public.settings (
  user_id uuid references public.profiles(id) on delete cascade,
  goal text,
  has_diabetes boolean default false,
  has_cholesterol boolean default false,
  has_blood_pressure boolean default false,
  unit_preference text default 'mg/dL',
  updated_at timestamptz default now(),
  primary key (user_id)
);

-- Biomarker logs
create table if not exists public.metrics (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  type text check (type in ('glucose', 'blood_pressure', 'cholesterol')),
  value jsonb not null,
  recorded_at timestamptz not null default now(),
  created_at timestamptz default now()
);

-- Food snap logs
create table if not exists public.food_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  image_url text,
  ai_payload jsonb,
  confirmed_payload jsonb,
  created_at timestamptz default now()
);

-- Streaks & badges
create table if not exists public.achievements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  earned_at timestamptz default now()
);

-- Ensure row level security is on
alter table public.profiles enable row level security;
alter table public.settings enable row level security;
alter table public.metrics enable row level security;
alter table public.food_logs enable row level security;
alter table public.achievements enable row level security;

-- Basic policies
create policy "Users can view their profile" on public.profiles for select using (auth.uid() = id);
create policy "Users update their profile" on public.profiles for update using (auth.uid() = id);
create policy "Users manage their settings" on public.settings for all using (auth.uid() = user_id);
create policy "Users manage their metrics" on public.metrics for all using (auth.uid() = user_id);
create policy "Users manage their food logs" on public.food_logs for all using (auth.uid() = user_id);
create policy "Users manage their achievements" on public.achievements for all using (auth.uid() = user_id);
