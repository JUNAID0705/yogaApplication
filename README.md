# 🧘 Yoga Studio Web App

A modern, responsive web application for a Yoga Studio built with React, Vite, Tailwind CSS, and Supabase.

## 🚀 Features

- **Home Page**: Hero section with studio information and available yoga classes
- **Schedule Page**: Browse and book yoga classes with real-time availability
- **Authentication**: Email/Password and Google OAuth sign-in via Supabase
- **Profile Page**: View user information and manage bookings
- **Responsive Design**: Mobile-friendly UI with hamburger menu navigation
- **Real-time Updates**: Live class availability and booking management

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Backend**: Supabase (Database + Authentication)
- **State Management**: React Context API

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

## 🔧 Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd yogaApplication
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Supabase Configuration**
   
   The Supabase URL and API key are already configured in `src/lib/supabase.js`:
   - **Supabase URL**: `https://stcwoouynrkjrhkrxpaq.supabase.co`
   - **API Key**: Already included in the code

   If you need to change the API key, edit `src/lib/supabase.js` and replace the `supabaseAnonKey` value.

4. **Set up Supabase Database Tables**

   Run the following SQL commands in your Supabase SQL Editor:

   ```sql
   -- Create classes table
   CREATE TABLE classes (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     description TEXT,
     instructor VARCHAR(255) NOT NULL,
     level VARCHAR(50) NOT NULL,
     duration INTEGER NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
   );

   -- Create schedule table
   CREATE TABLE schedule (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
     start_time TIMESTAMP WITH TIME ZONE NOT NULL,
     available_spots INTEGER NOT NULL DEFAULT 10,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
   );

   -- Create bookings table
   CREATE TABLE bookings (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
     schedule_id UUID REFERENCES schedule(id) ON DELETE CASCADE,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
     UNIQUE(user_id, schedule_id)
   );

   -- Enable Row Level Security
   ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
   ALTER TABLE schedule ENABLE ROW LEVEL SECURITY;
   ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

   -- Create policies for classes (public read)
   CREATE POLICY "Allow public read access to classes"
     ON classes FOR SELECT
     TO public
     USING (true);

   -- Create policies for schedule (public read)
   CREATE POLICY "Allow public read access to schedule"
     ON schedule FOR SELECT
     TO public
     USING (true);

   -- Create policies for bookings (users can read their own)
   CREATE POLICY "Users can view their own bookings"
     ON bookings FOR SELECT
     TO authenticated
     USING (auth.uid() = user_id);

   CREATE POLICY "Users can create their own bookings"
     ON bookings FOR INSERT
     TO authenticated
     WITH CHECK (auth.uid() = user_id);

   CREATE POLICY "Users can delete their own bookings"
     ON bookings FOR DELETE
     TO authenticated
     USING (auth.uid() = user_id);

   -- Insert sample data
   INSERT INTO classes (title, description, instructor, level, duration) VALUES
   ('Hatha Yoga', 'A gentle introduction to the most basic yoga postures. Perfect for beginners.', 'Sarah Johnson', 'Beginner', 60),
   ('Vinyasa Flow', 'Dynamic flowing sequences that link breath with movement.', 'Michael Chen', 'Intermediate', 75),
   ('Power Yoga', 'An intense, fitness-based approach to vinyasa-style yoga.', 'Emma Davis', 'Advanced', 90),
   ('Yin Yoga', 'A slow-paced style with postures held for longer periods.', 'Lisa Anderson', 'Beginner', 60),
   ('Ashtanga Yoga', 'A rigorous style following a specific sequence of postures.', 'David Kumar', 'Advanced', 90),
   ('Restorative Yoga', 'Relaxing practice using props to support the body.', 'Sarah Johnson', 'Beginner', 60);

   -- Insert sample schedule (adjust dates as needed)
   INSERT INTO schedule (class_id, start_time, available_spots)
   SELECT 
     id,
     CURRENT_TIMESTAMP + (INTERVAL '1 day' * generate_series(1, 7)),
     15
   FROM classes;
   ```

5. **Configure Google OAuth (Optional)**
   
   To enable Google Sign-In:
   - Go to your Supabase Dashboard → Authentication → Providers
   - Enable Google provider
   - Add your Google OAuth credentials
   - Configure authorized redirect URLs

## 🚀 Running the Application

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 📱 Application Pages

### Home Page (`/`)
- Hero section with studio introduction
- Display of all available yoga classes
- Quick links to schedule and sign up

### Schedule Page (`/schedule`)
- List of all scheduled classes with date/time
- Real-time available spots counter
- Book button (requires login)
- Automatic redirect to login if not authenticated

### Login/Signup Page (`/login`)
- Toggle between login and signup forms
- Email/password authentication
- Google OAuth sign-in button
- Form validation and error handling

### Profile Page (`/profile`)
- User information display
- List of user's bookings
- Cancel booking functionality
- Sign out button
- Protected route (requires authentication)

## 🎨 Design Features

- **Color Scheme**: Green-based palette representing nature and tranquility
- **Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Animations**: Smooth transitions and hover effects
- **Icons**: Emoji-based icons for a friendly, modern look
- **Typography**: Clean, readable fonts with proper hierarchy

## 🔐 Authentication Flow

1. User signs up with email/password or Google
2. Supabase handles authentication and session management
3. Auth state persists across page refreshes
4. Protected routes redirect to login if not authenticated
5. User can sign out from profile page

## 📊 Database Schema

### Tables

- **classes**: Stores yoga class information
  - id, title, description, instructor, level, duration

- **schedule**: Stores class schedule and availability
  - id, class_id, start_time, available_spots

- **bookings**: Stores user bookings
  - id, user_id, schedule_id, created_at

## 🔒 Security

- Row Level Security (RLS) enabled on all tables
- Users can only view/modify their own bookings
- Public read access for classes and schedules
- Authenticated access required for bookings

## 🐛 Troubleshooting

### Common Issues

1. **"Cannot find module" errors**
   - Run `npm install` to ensure all dependencies are installed

2. **Supabase connection errors**
   - Verify your Supabase URL and API key in `src/lib/supabase.js`
   - Check that your Supabase project is active

3. **Google Sign-In not working**
   - Ensure Google OAuth is configured in Supabase Dashboard
   - Check redirect URLs are properly set

4. **Bookings not showing**
   - Verify database tables are created with correct schema
   - Check RLS policies are properly configured

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🚀 Deployment

To deploy this application:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service (Netlify, Vercel, etc.)
3. Ensure environment variables are set if you move API keys to env files

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your own yoga studio!

---

Built with ❤️ using React, Vite, Tailwind CSS, and Supabase
