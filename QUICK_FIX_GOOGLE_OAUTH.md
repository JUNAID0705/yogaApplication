# ⚡ Quick Fix: Google Sign-In Error

## 🔴 Error Message:
```
{"code":400,"error_code":"validation_failed","msg":"Unsupported provider: provider is not enabled"}
```

---

## ✅ **5-Minute Fix**

### **Step 1: Open Supabase Dashboard**
Go to: **https://stcwoouynrkjrhkrxpaq.supabase.co**

### **Step 2: Enable Google Provider**
1. Click **Authentication** (left sidebar)
2. Click **Providers** tab
3. Find **Google** in the list
4. Click to expand
5. Toggle **"Enable Google provider"** to **ON** ✅
6. Click **Save**

### **Step 3: Restart Your App**
```bash
# Stop the server (Ctrl + C)
npm run dev
```

### **Step 4: Test**
- Click "Sign In with Google"
- Should work now! ✅

---

## 📸 Visual Guide

```
Supabase Dashboard
├── Authentication (sidebar)
│   └── Providers (tab)
│       └── Google
│           ├── [Toggle] Enable Google provider ← Turn this ON
│           └── [Button] Save ← Click this
```

---

## 🎯 **That's It!**

The error happens because Google OAuth is not enabled in your Supabase project. 

Just enable it in the dashboard and it will work immediately.

---

## 💡 **Alternative: Use Email/Password**

If you don't want to set up Google OAuth right now:
- Just use **Email/Password** to sign in
- It's already working and doesn't need any setup
- You can enable Google later

---

## ✅ **What I Already Fixed**

I've updated the Login page to show a better error message:

**Before:**
```
Unsupported provider: provider is not enabled
```

**After:**
```
Google Sign-In is not configured yet. Please use Email/Password 
to sign in, or contact the administrator to enable Google authentication.
```

So even if you don't enable it now, users will see a helpful message!

---

## 🚀 **Quick Summary**

**Problem:** Google OAuth not enabled  
**Solution:** Enable it in Supabase Dashboard → Authentication → Providers → Google  
**Time:** 2 minutes  
**Alternative:** Use Email/Password (already working)  

---

**Enable Google OAuth in Supabase and you're done!** ✨
