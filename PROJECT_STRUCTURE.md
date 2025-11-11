# 📁 Project Structure

```
yogaApplication/
├── public/                      # Static assets
├── src/
│   ├── components/              # Reusable React components
│   │   └── Navbar.jsx          # Navigation bar with responsive menu
│   │
│   ├── context/                 # React Context providers
│   │   └── AuthContext.jsx     # Authentication state management
│   │
│   ├── lib/                     # Library configurations
│   │   └── supabase.js         # Supabase client setup
│   │
│   ├── pages/                   # Page components (routes)
│   │   ├── Home.jsx            # Landing page with hero & classes
│   │   ├── Schedule.jsx        # Class schedule & booking
│   │   ├── Login.jsx           # Login/Signup page
│   │   └── Profile.jsx         # User profile & bookings
│   │
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles with Tailwind
│
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── supabase-setup.sql          # Database setup script
├── README.md                    # Full documentation
├── QUICKSTART.md               # Quick start guide
└── .gitignore                  # Git ignore rules
```

## 🗂️ File Descriptions

### Configuration Files

- **`package.json`**: Project dependencies and npm scripts
- **`vite.config.js`**: Vite bundler configuration
- **`tailwind.config.js`**: Tailwind CSS theme customization
- **`postcss.config.js`**: PostCSS plugins configuration

### Source Files

#### Components
- **`Navbar.jsx`**: Responsive navigation bar with mobile hamburger menu

#### Context
- **`AuthContext.jsx`**: Global authentication state using React Context API

#### Library
- **`supabase.js`**: Supabase client initialization with URL and API key

#### Pages
- **`Home.jsx`**: Landing page with hero section and class listings
- **`Schedule.jsx`**: Class schedule with booking functionality
- **`Login.jsx`**: Authentication page with email/password and Google OAuth
- **`Profile.jsx`**: User profile with booking management

#### Core
- **`App.jsx`**: Main application component with React Router setup
- **`main.jsx`**: React application entry point
- **`index.css`**: Global CSS with Tailwind directives

### Database
- **`supabase-setup.sql`**: Complete SQL script to set up Supabase tables, policies, and sample data

### Documentation
- **`README.md`**: Comprehensive project documentation
- **`QUICKSTART.md`**: Quick start guide for getting up and running
- **`PROJECT_STRUCTURE.md`**: This file - project structure overview

## 🔄 Data Flow

```
User Action
    ↓
React Component
    ↓
Supabase Client (src/lib/supabase.js)
    ↓
Supabase Backend
    ↓
Database Tables (classes, schedule, bookings)
    ↓
Row Level Security Policies
    ↓
Response to Component
    ↓
UI Update
```

## 🎯 Key Features by File

### Authentication Flow
- `AuthContext.jsx` - Manages auth state
- `Login.jsx` - Login/signup UI
- `Profile.jsx` - Protected user area
- `Navbar.jsx` - Shows login/profile based on auth state

### Booking Flow
- `Schedule.jsx` - Displays classes and handles bookings
- `Profile.jsx` - Shows user's bookings
- Supabase `bookings` table - Stores booking data

### Class Management
- `Home.jsx` - Displays all classes
- `Schedule.jsx` - Shows scheduled sessions
- Supabase `classes` & `schedule` tables - Store class data

## 🛠️ Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router DOM v6**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Supabase**: Backend-as-a-Service (Database + Auth)
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📦 Dependencies

### Production
- `react` & `react-dom`: Core React libraries
- `react-router-dom`: Routing
- `@supabase/supabase-js`: Supabase client

### Development
- `vite`: Build tool
- `@vitejs/plugin-react`: React plugin for Vite
- `tailwindcss`: CSS framework
- `postcss` & `autoprefixer`: CSS processing

## 🚀 Build Process

1. **Development**: `npm run dev`
   - Vite starts dev server
   - Hot module replacement enabled
   - Tailwind processes CSS

2. **Production**: `npm run build`
   - Vite bundles the app
   - Tailwind purges unused CSS
   - Optimized output in `dist/`

3. **Preview**: `npm run preview`
   - Preview production build locally
