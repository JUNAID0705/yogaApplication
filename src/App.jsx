import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OnlineClasses from './pages/OnlineClasses'
import PregnancyYoga from './pages/PregnancyYoga'
import Schedule from './pages/Schedule'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { isSupabaseConfigured } from './lib/supabase'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          {!isSupabaseConfigured && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
              <p className="font-bold">Configuration Required</p>
              <p>Supabase environment variables are missing. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your deployment settings.</p>
            </div>
          )}
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/online-classes" element={<OnlineClasses />} />
              <Route path="/pregnancy-yoga" element={<PregnancyYoga />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
