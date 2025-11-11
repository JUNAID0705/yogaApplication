import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }
    fetchBookings()
  }, [user, navigate])

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          schedule (
            id,
            start_time,
            available_spots,
            classes (
              id,
              title,
              description,
              instructor,
              level,
              duration
            )
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setBookings(data || [])
    } catch (error) {
      console.error('Error fetching bookings:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/')
    } catch (error) {
      console.error('Error signing out:', error.message)
    }
  }

  const handleCancelBooking = async (bookingId, scheduleId) => {
    if (!confirm('Are you sure you want to cancel this booking?')) {
      return
    }

    try {
      // Delete the booking
      const { error: deleteError } = await supabase
        .from('bookings')
        .delete()
        .eq('id', bookingId)

      if (deleteError) throw deleteError

      // Increment available spots
      const { error: updateError } = await supabase.rpc('increment_spots', {
        schedule_id: scheduleId,
      })

      // If RPC doesn't exist, use manual update
      if (updateError) {
        const { data: scheduleData } = await supabase
          .from('schedule')
          .select('available_spots')
          .eq('id', scheduleId)
          .single()

        await supabase
          .from('schedule')
          .update({ available_spots: scheduleData.available_spots + 1 })
          .eq('id', scheduleId)
      }

      alert('Booking cancelled successfully!')
      fetchBookings() // Refresh bookings
    } catch (error) {
      console.error('Error cancelling booking:', error.message)
      alert('Failed to cancel booking. Please try again.')
    }
  }

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString)
    return {
      date: date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      time: date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }
  }

  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full blur-3xl opacity-30"></div>
          
          <div className="relative p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-6">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-4xl font-bold">
                    {user.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
                
                {/* User Info */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    My Profile
                  </h1>
                  <div className="space-y-1">
                    <p className="text-gray-600 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {user.email}
                    </p>
                    <p className="text-sm text-gray-500">
                      Member since {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleSignOut}
                className="mt-6 md:mt-0 px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Bookings Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">My Bookings</h2>
            <div className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              {bookings.length} {bookings.length === 1 ? 'Class' : 'Classes'}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
              <p className="mt-4 text-gray-600">Loading bookings...</p>
            </div>
          ) : bookings.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg mb-6">You haven't booked any classes yet.</p>
              <button
                onClick={() => navigate('/schedule')}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Browse Schedule
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => {
                const { date, time } = formatDateTime(booking.schedule?.start_time)
                const isPastClass = new Date(booking.schedule?.start_time) < new Date()

                return (
                  <div
                    key={booking.id}
                    className={`border rounded-lg p-6 ${
                      isPastClass ? 'bg-gray-50 border-gray-300' : 'border-primary-200'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {booking.schedule?.classes?.title || 'Class'}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(
                              booking.schedule?.classes?.level
                            )}`}
                          >
                            {booking.schedule?.classes?.level}
                          </span>
                          {isPastClass && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">
                              Completed
                            </span>
                          )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                          <div>
                            <span className="font-semibold">📅 Date:</span> {date}
                          </div>
                          <div>
                            <span className="font-semibold">🕐 Time:</span> {time}
                          </div>
                          <div>
                            <span className="font-semibold">👨‍🏫 Instructor:</span>{' '}
                            {booking.schedule?.classes?.instructor}
                          </div>
                          <div>
                            <span className="font-semibold">⏱️ Duration:</span>{' '}
                            {booking.schedule?.classes?.duration} minutes
                          </div>
                        </div>
                      </div>
                      {!isPastClass && (
                        <button
                          onClick={() => handleCancelBooking(booking.id, booking.schedule?.id)}
                          className="mt-4 md:mt-0 md:ml-6 px-6 py-2 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition-colors"
                        >
                          Cancel Booking
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
