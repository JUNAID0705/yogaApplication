# 🔧 Google OAuth Setup Guide

## ❌ Error: "Unsupported provider: provider is not enabled"

This error means Google OAuth is not configured in your Supabase project.

---

## ✅ Solution: Enable Google OAuth in Supabase

### **Step 1: Go to Supabase Dashboard**

1. Visit: https://stcwoouynrkjrhkrxpaq.supabase.co
2. Log in to your Supabase account
3. Select your project

---

### **Step 2: Enable Google Provider**

1. In the left sidebar, click **Authentication**
2. Click **Providers** tab
3. Find **Google** in the list
4. Click to expand Google settings
5. Toggle **Enable Google provider** to ON

---

### **Step 3: Configure Google OAuth (Optional for Development)**

For development/testing, you can use Supabase's default Google OAuth credentials:

1. Keep "Use a custom OAuth provider" **OFF** (unchecked)
2. Click **Save**

This will use Supabase's shared Google OAuth app for testing.

---

### **Step 4: Add Redirect URLs**

1. In the same Google provider settings
2. Add these redirect URLs:
   - `http://localhost:5173` (for development)
   - Your production URL (when deployed)

3. Click **Save**

---

### **Step 5: Test the Integration**

1. Restart your app: `npm run dev`
2. Click "Sign In with Google"
3. You should see Google's login popup
4. After login, you'll be redirected back to your app

---

## 🎯 Quick Fix (If Google OAuth is Complex)

If you want to skip Google OAuth for now, you can temporarily hide the Google Sign-In button:

### **Option 1: Comment Out Google Sign-In Button**

I can update the Login page to hide the Google button until you configure it.

### **Option 2: Show Info Message**

Display a message that Google Sign-In is coming soon.

---

## 📝 Detailed Setup (For Production)

If you want to use your own Google OAuth credentials:

### **1. Create Google OAuth App**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Go to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure consent screen if prompted
6. Application type: **Web application**
7. Add authorized redirect URIs:
   ```
   https://stcwoouynrkjrhkrxpaq.supabase.co/auth/v1/callback
   ```
8. Copy **Client ID** and **Client Secret**

### **2. Add to Supabase**

1. Go back to Supabase → Authentication → Providers → Google
2. Toggle **Use a custom OAuth provider** to ON
3. Paste your **Client ID**
4. Paste your **Client Secret**
5. Click **Save**

---

## 🚀 Recommended Approach

### **For Development/Testing:**
Use Supabase's default Google OAuth (Step 2 above - just enable it)

### **For Production:**
Set up your own Google OAuth app (Detailed Setup above)

---

## ⚡ Quick Enable Steps (Summary)

1. **Supabase Dashboard** → Authentication → Providers
2. **Find Google** → Toggle ON
3. **Save**
4. **Restart app** → Test

That's it! Google Sign-In should work now.

---

## 🐛 Troubleshooting

### **Still getting the error?**

1. **Clear browser cache** and cookies
2. **Restart dev server**: Stop and run `npm run dev` again
3. **Check Supabase status**: Ensure provider is enabled and saved
4. **Wait a minute**: Changes may take a moment to propagate

### **Google popup blocked?**

- Allow popups in your browser for localhost
- Check browser console for errors

### **Redirect not working?**

- Verify redirect URL in Supabase matches your app URL
- Check that you're using the correct Supabase URL in `.env`

---

## 💡 Alternative: Email/Password Only

If Google OAuth is too complex right now, you can:

1. Use **Email/Password authentication** (already working)
2. Add Google OAuth later when needed
3. Users can still sign up and log in with email

---

## 📞 Need Help?

If you're still stuck:
1. Check Supabase logs: Dashboard → Logs
2. Check browser console for errors
3. Verify `.env` file has correct Supabase URL and key

---

**Most Common Fix: Just enable Google provider in Supabase Dashboard!** ✅
