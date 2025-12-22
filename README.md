# SnapHealth (React Native + Expo)

A playful health companion that mixes Duolingo energy with Apple Health polish. Built with Expo Router, TypeScript, Zustand state, Supabase backend, and RevenueCat subscriptions.

## Getting started
1. Install dependencies (Expo CLI will prompt for missing globals):
   ```bash
   npm install
   ```
2. Create your environment file:
   ```bash
   cp .env.example .env
   # add SUPABASE_URL, SUPABASE_ANON_KEY, REVENUECAT_PUBLIC_KEY
   ```
3. Run the app:
   ```bash
   npm run start
   ```
   - Press `i` for iOS simulator (macOS), `a` for Android emulator, or open the Expo Go QR code on device.

## Tech decisions
- Navigation: **Expo Router** tabs for Dashboard, Logging, Food Snap, Coach, Onboarding.
- State: **Zustand** for lightweight onboarding + streak/badges demo data.
- Styling: Hand-rolled theme with gradients, rounded cards, and dark mode friendly colors.

## Supabase schema
See [`supabase/schema.sql`](supabase/schema.sql) for tables: profiles, settings, metrics, food_logs, achievements with RLS policies ready for auth.

## RevenueCat
Use `REVENUECAT_PUBLIC_KEY` from your dashboard. Subscription target: **$9.99/month with 7-day free trial** (configure in RevenueCat dashboard and match product identifiers in-app later).

## Roadmap prompt
Initial scaffold includes dummy data and screens. Tell me which feature to build next and we’ll ship it fast.
