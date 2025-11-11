# ✅ Setup Checklist

Follow this checklist to get your Yoga Studio app up and running!

## 📋 Pre-Setup

- [ ] Node.js installed (v16 or higher)
- [ ] npm or yarn installed
- [ ] Supabase account created
- [ ] Code editor installed (VS Code recommended)

---

## 🔧 Installation Steps

### 1. Install Dependencies
```bash
npm install
```
- [ ] Dependencies installed successfully
- [ ] No error messages in terminal

### 2. Verify Supabase Configuration
- [ ] Open `src/lib/supabase.js`
- [ ] Verify Supabase URL: `https://stcwoouynrkjrhkrxpaq.supabase.co`
- [ ] Verify API key is present
- [ ] (Optional) Move credentials to `.env` file for better security

---

## 🗄️ Database Setup

### 3. Set Up Supabase Database
- [ ] Log in to Supabase Dashboard
- [ ] Navigate to SQL Editor
- [ ] Open `supabase-setup.sql` file
- [ ] Copy entire SQL script
- [ ] Paste into Supabase SQL Editor
- [ ] Click "Run" button
- [ ] Verify no errors in execution
- [ ] Check that tables were created:
  - [ ] `classes` table exists
  - [ ] `schedule` table exists
  - [ ] `bookings` table exists

### 4. Verify Sample Data
- [ ] Go to Table Editor in Supabase
- [ ] Check `classes` table has 6 rows
- [ ] Check `schedule` table has multiple rows
- [ ] Verify data looks correct

### 5. Check Security Policies
- [ ] In Supabase, go to Authentication → Policies
- [ ] Verify RLS is enabled on all tables
- [ ] Verify policies exist for:
  - [ ] classes (public read)
  - [ ] schedule (public read, authenticated update)
  - [ ] bookings (user-specific access)

---

## 🔐 Authentication Setup

### 6. Configure Email Authentication
- [ ] In Supabase Dashboard → Authentication → Settings
- [ ] Verify email provider is enabled
- [ ] (Optional) Customize email templates

### 7. Configure Google OAuth (Optional)
- [ ] Go to Authentication → Providers
- [ ] Enable Google provider
- [ ] Add Google OAuth credentials
- [ ] Add redirect URLs:
  - [ ] `http://localhost:5173` (for development)
  - [ ] Your production URL (when deployed)

---

## 🚀 Running the App

### 8. Start Development Server
```bash
npm run dev
```
- [ ] Server starts without errors
- [ ] Terminal shows local URL (usually `http://localhost:5173`)
- [ ] No compilation errors

### 9. Open in Browser
- [ ] Navigate to `http://localhost:5173`
- [ ] Home page loads correctly
- [ ] No console errors in browser DevTools

---

## ✨ Feature Testing

### 10. Test Home Page
- [ ] Hero section displays correctly
- [ ] Classes are loaded and displayed
- [ ] All 6 sample classes visible
- [ ] Difficulty badges show correct colors
- [ ] "View Schedule" button works
- [ ] Navigation bar is visible
- [ ] Mobile menu works (resize browser)

### 11. Test Schedule Page
- [ ] Navigate to Schedule page
- [ ] Classes are displayed with dates/times
- [ ] Available spots counter shows
- [ ] "Book Now" button visible
- [ ] Layout is responsive

### 12. Test Authentication
- [ ] Click "Login" in navigation
- [ ] Login page loads
- [ ] Toggle between Login/Signup works
- [ ] Create a test account:
  - [ ] Enter email (e.g., `test@example.com`)
  - [ ] Enter password (min 6 characters)
  - [ ] Click "Sign Up"
  - [ ] Check email for verification link
  - [ ] Click verification link
- [ ] Sign in with test account:
  - [ ] Enter credentials
  - [ ] Click "Sign In"
  - [ ] Redirected to Profile page
- [ ] (Optional) Test Google Sign-In:
  - [ ] Click "Sign in with Google"
  - [ ] Complete Google OAuth flow

### 13. Test Booking System
- [ ] Ensure you're logged in
- [ ] Go to Schedule page
- [ ] Click "Book Now" on a class
- [ ] Verify booking success message
- [ ] Check available spots decreased by 1
- [ ] Try booking same class again
- [ ] Verify duplicate booking prevention

### 14. Test Profile Page
- [ ] Navigate to Profile page
- [ ] User email displays correctly
- [ ] Bookings section shows your booking
- [ ] Booking details are correct (date, time, class)
- [ ] "Cancel Booking" button works:
  - [ ] Click cancel
  - [ ] Confirm cancellation
  - [ ] Booking removed from list
  - [ ] Available spots increased

### 15. Test Sign Out
- [ ] Click "Sign Out" button
- [ ] Redirected to home page
- [ ] Navigation shows "Login" instead of "Profile"
- [ ] Cannot access Profile page when logged out

---

## 📱 Responsive Design Testing

### 16. Test Mobile View
- [ ] Resize browser to mobile width (< 768px)
- [ ] Hamburger menu appears
- [ ] Menu opens/closes correctly
- [ ] All pages are readable on mobile
- [ ] Buttons are tap-friendly
- [ ] Forms work on mobile

### 17. Test Tablet View
- [ ] Resize browser to tablet width (768px - 1024px)
- [ ] Layout adjusts appropriately
- [ ] Navigation is accessible
- [ ] Cards display in 2 columns

### 18. Test Desktop View
- [ ] Full desktop width (> 1024px)
- [ ] Layout uses full width appropriately
- [ ] Cards display in 3 columns
- [ ] All elements properly aligned

---

## 🐛 Troubleshooting

### If Something Doesn't Work:

#### App won't start
- [ ] Check Node.js version: `node --version`
- [ ] Delete `node_modules` and run `npm install` again
- [ ] Check for port conflicts (try different port)

#### Database connection errors
- [ ] Verify Supabase URL in `src/lib/supabase.js`
- [ ] Verify API key is correct
- [ ] Check Supabase project is active
- [ ] Check internet connection

#### Classes not showing
- [ ] Verify SQL script ran successfully
- [ ] Check browser console for errors
- [ ] Verify RLS policies are correct
- [ ] Check Supabase Table Editor for data

#### Booking doesn't work
- [ ] Ensure you're logged in
- [ ] Check browser console for errors
- [ ] Verify bookings table exists
- [ ] Check RLS policies on bookings table

#### Styles look broken
- [ ] Verify Tailwind CSS is configured
- [ ] Check `tailwind.config.js` exists
- [ ] Clear browser cache
- [ ] Restart dev server

---

## 🎉 Success Criteria

You're all set when:
- [ ] App runs without errors
- [ ] All pages load correctly
- [ ] Can create account and login
- [ ] Can book and cancel classes
- [ ] Profile shows user data
- [ ] Responsive on all screen sizes
- [ ] No console errors

---

## 📚 Next Steps

Once everything is working:
- [ ] Read `FEATURES.md` to learn about all features
- [ ] Customize colors in `tailwind.config.js`
- [ ] Add your own yoga classes to database
- [ ] Update studio name in `Navbar.jsx`
- [ ] Add your own branding/logo
- [ ] Read `DEPLOYMENT.md` when ready to deploy

---

## 🆘 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Check terminal for error messages
3. Review `README.md` for detailed documentation
4. Check Supabase Dashboard for database issues
5. Verify all checklist items are completed

---

**Congratulations! Your Yoga Studio app is ready! 🧘‍♀️**
