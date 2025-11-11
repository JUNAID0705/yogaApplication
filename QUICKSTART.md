# 🚀 Quick Start Guide

## Get Your Yoga Studio App Running in 5 Minutes!

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Supabase Database

1. Go to your Supabase project: https://stcwoouynrkjrhkrxpaq.supabase.co
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `supabase-setup.sql`
4. Click **Run** to create all tables and sample data

### Step 3: Configure Authentication (Optional - for Google Sign-In)

1. In Supabase Dashboard, go to **Authentication** → **Providers**
2. Enable **Google** provider
3. Add your Google OAuth credentials
4. Add redirect URL: `http://localhost:5173`

### Step 4: Run the App
```bash
npm run dev
```

### Step 5: Open in Browser

Visit: **http://localhost:5173**

---

## 🎯 What You Can Do Now

### ✅ Browse Classes
- Visit the home page to see all available yoga classes
- View class details, instructors, and difficulty levels

### ✅ View Schedule
- Click "Schedule" to see upcoming classes
- See available spots in real-time

### ✅ Create an Account
- Click "Login" → "Sign Up"
- Use email/password or Google Sign-In
- Verify your email (check spam folder)

### ✅ Book a Class
- After logging in, go to Schedule
- Click "Book Now" on any class
- See your bookings in your Profile

### ✅ Manage Bookings
- Visit your Profile page
- View all your upcoming classes
- Cancel bookings if needed

---

## 📝 Test Credentials

You can create your own account, or use these test steps:

1. **Sign Up**: Use any email (e.g., `test@example.com`)
2. **Password**: At least 6 characters
3. **Verify**: Check email for verification link

---

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` to modify the primary color scheme:
```js
colors: {
  primary: {
    // Change these values
    500: '#22c55e',
    600: '#16a34a',
    // ...
  }
}
```

### Add More Classes
Run this SQL in Supabase:
```sql
INSERT INTO classes (title, description, instructor, level, duration) 
VALUES ('Your Class', 'Description', 'Instructor Name', 'Beginner', 60);
```

### Modify Studio Name
Edit `src/components/Navbar.jsx` line 25:
```jsx
<span className="text-xl font-bold text-primary-700">Your Studio Name</span>
```

---

## ❓ Troubleshooting

### "Cannot connect to Supabase"
- Check that `src/lib/supabase.js` has the correct URL and API key
- Verify your Supabase project is active

### "No classes showing"
- Make sure you ran the SQL setup script
- Check browser console for errors

### "Booking doesn't work"
- Ensure you're logged in
- Check that RLS policies are created in Supabase

### "Google Sign-In fails"
- Configure Google OAuth in Supabase Dashboard
- Add correct redirect URLs

---

## 📚 Next Steps

1. **Add More Classes**: Customize the classes table with your own yoga classes
2. **Update Schedule**: Add more time slots for your classes
3. **Customize Design**: Modify colors, fonts, and layout in Tailwind
4. **Deploy**: Build and deploy to Netlify, Vercel, or your preferred host

---

## 🆘 Need Help?

Check the full `README.md` for detailed documentation!

---

**Happy Coding! 🧘‍♀️**
