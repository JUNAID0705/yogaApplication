# Deployment Fix Guide - White Screen Issue

## Problem
Your app was showing a white screen on Netlify and Vercel because the Supabase environment variables were missing.

## What Was Fixed
1. **Modified `src/lib/supabase.js`** - Now handles missing environment variables gracefully instead of throwing an error
2. **Updated `src/App.jsx`** - Added a warning banner when environment variables are missing
3. **Updated `src/context/AuthContext.jsx`** - Auth functions now check if Supabase is configured before attempting operations
4. **Added `netlify.toml`** - Proper build configuration for Netlify
5. **Added `vercel.json`** - Proper build configuration for Vercel

## Next Steps

### Option 1: Add Environment Variables (Recommended)

#### For Netlify:
1. Go to https://app.netlify.com
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Add these two variables:
   - Variable: `VITE_SUPABASE_URL`
   - Value: `https://stcwoouynrkjrhkrxpaq.supabase.co`
   
   - Variable: `VITE_SUPABASE_ANON_KEY`
   - Value: (Copy from your `.env` file)
6. Click **Save**
7. Go to **Deploys** and click **Trigger deploy** → **Deploy site**

#### For Vercel:
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these two variables:
   - Name: `VITE_SUPABASE_URL`
   - Value: `https://stcwoouynrkjrhkrxpaq.supabase.co`
   
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: (Copy from your `.env` file)
5. Click **Save**
6. Go to **Deployments** and click the three dots on the latest deployment → **Redeploy**

### Option 2: Push Updated Code (Quick Fix)

The code changes I made will prevent the white screen. The app will now load with a warning banner at the top telling users that configuration is needed.

To deploy the fixes:

```bash
git add .
git commit -m "Fix white screen issue - handle missing env vars gracefully"
git push origin main
```

Both Netlify and Vercel will automatically redeploy when you push to GitHub.

## Important Notes

- **The app will work** but authentication features won't function until you add the environment variables
- The yellow warning banner will appear at the top of the page when env vars are missing
- Once you add the environment variables and redeploy, the warning will disappear

## Testing Locally

To test locally, make sure your `.env` file has the correct values:

```bash
npm run dev
```

## Build Test

To test if the build works:

```bash
npm run build
npm run preview
```

This will build your app and preview it locally to ensure everything works before deploying.
