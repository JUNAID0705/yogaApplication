import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

const Schedule = () => {
  const [schedules, setSchedules] = useState([])
  const [loading, setLoading] = useState(true)
  const [bookingLoading, setBookingLoading] = useState(null)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [viewMode, setViewMode] = useState('week') // 'week' or 'list'
  const { user } = useAuth()
  const navigate = useNavigate()

  // Get current week dates
  const getWeekDates = () => {
    const curr = new Date(selectedDate)
    const week = []
    
    // Get Monday of current week
    const first = curr.getDate() - curr.getDay() + 1
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(curr.setDate(first + i))
      week.push(date)
    }
    return week
  }

  const weekDates = getWeekDates()

  useEffect(() => {
    fetchSchedules()
  }, [])

  const fetchSchedules = async () => {
    try {
      const { data, error } = await supabase
        .from('schedule')
        .select(`
          *,
          classes (
            id,
            title,
            description,
            instructor,
            level,
            duration
          )
        `)
        .order('start_time')

      if (error) throw error
      setSchedules(data || [])
    } catch (error) {
      console.error('Error fetching schedules:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleBooking = async (scheduleId) => {
    if (!user) {
      navigate('/login')
      return
    }

    setBookingLoading(scheduleId)
    try {
      // Check if user already booked this class
      const { data: existingBooking } = await supabase
        .from('bookings')
        .select('id')
        .eq('user_id', user.id)
        .eq('schedule_id', scheduleId)
        .single()

      if (existingBooking) {
        alert('You have already booked this class!')
        setBookingLoading(null)
        return
      }

      // Check if spots are available
      const schedule = schedules.find((s) => s.id === scheduleId)
      if (schedule.available_spots <= 0) {
        alert('Sorry, this class is fully booked!')
        setBookingLoading(null)
        return
      }

      // Create booking
      const { error: bookingError } = await supabase
        .from('bookings')
        .insert([
          {
            user_id: user.id,
            schedule_id: scheduleId,
          },
        ])

      if (bookingError) throw bookingError

      // Update available spots
      const { error: updateError } = await supabase
        .from('schedule')
        .update({ available_spots: schedule.available_spots - 1 })
        .eq('id', scheduleId)

      if (updateError) throw updateError

      alert('Class booked successfully!')
      fetchSchedules() // Refresh the schedule
    } catch (error) {
      console.error('Error booking class:', error.message)
      alert('Failed to book class. Please try again.')
    } finally {
      setBookingLoading(null)
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

  const isToday = (date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date) => {
    return date.toDateString() === selectedDate.toDateString()
  }

  const getSchedulesForDate = (date) => {
    return schedules.filter(schedule => {
      const scheduleDate = new Date(schedule.start_time)
      return scheduleDate.toDateString() === date.toDateString()
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Class Calendar
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-primary-600">Yoga Class</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our weekly schedule and reserve your spot
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white shadow-md p-1">
            <button
              onClick={() => setViewMode('week')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'week'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Week View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'list'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-primary-200 border-t-primary-600"></div>
            <p className="mt-4 text-gray-600 text-lg">Loading classes...</p>
          </div>
        ) : schedules.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-600 text-xl mb-2">No classes scheduled</p>
            <p className="text-gray-500">Check back later for upcoming classes</p>
          </div>
        ) : viewMode === 'week' ? (
          /* Week Calendar View */
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Week Days Header */}
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {weekDates.map((date, index) => (
                <div
                  key={index}
                  className={`bg-white p-4 text-center cursor-pointer transition-all hover:bg-primary-50 ${
                    isSelected(date) ? 'bg-primary-100' : ''
                  } ${isToday(date) ? 'border-t-4 border-primary-600' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  <div className="text-xs text-gray-600 font-medium mb-1">
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </div>
                  <div className={`text-2xl font-bold ${
                    isToday(date) ? 'text-primary-600' : 'text-gray-900'
                  }`}>
                    {date.getDate()}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {date.toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                  {getSchedulesForDate(date).length > 0 && (
                    <div className="mt-2 flex justify-center gap-1">
                      {getSchedulesForDate(date).slice(0, 3).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Selected Day Classes */}
            <div className="p-6 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Classes on {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </h3>
              
              {getSchedulesForDate(selectedDate).length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl">
                  <p className="text-gray-500">No classes scheduled for this day</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {getSchedulesForDate(selectedDate).map((schedule) => {
                    const { time } = formatDateTime(schedule.start_time)
                    const isFullyBooked = schedule.available_spots <= 0

                    return (
                      <div
                        key={schedule.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border-l-4 border-primary-600"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-primary-600 font-bold text-lg">{time}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(schedule.classes?.level)}`}>
                                {schedule.classes?.level}
                              </span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              {schedule.classes?.title}
                            </h4>
                            <p className="text-gray-600 text-sm mb-3">{schedule.classes?.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                              <span>👨‍🏫 {schedule.classes?.instructor}</span>
                              <span>⏱️ {schedule.classes?.duration} min</span>
                              <span className={isFullyBooked ? 'text-red-600 font-semibold' : 'text-primary-600 font-semibold'}>
                                {schedule.available_spots} spots left
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleBooking(schedule.id)}
                            disabled={isFullyBooked || bookingLoading === schedule.id}
                            className={`px-8 py-3 rounded-full font-semibold transition-all ${
                              isFullyBooked
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : bookingLoading === schedule.id
                                ? 'bg-primary-400 text-white cursor-wait'
                                : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                            }`}
                          >
                            {bookingLoading === schedule.id ? 'Booking...' : isFullyBooked ? 'Fully Booked' : 'Book Class'}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* List View */
          <div className="space-y-6">
            {schedules.map((schedule) => {
              const { date, time } = formatDateTime(schedule.start_time)
              const isFullyBooked = schedule.available_spots <= 0

              return (
                <div
                  key={schedule.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-3xl font-bold text-gray-900">
                            {schedule.classes?.title}
                          </h3>
                          <span className={`px-4 py-1 rounded-full text-sm font-semibold ${getLevelColor(schedule.classes?.level)}`}>
                            {schedule.classes?.level}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-lg">{schedule.classes?.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500">Date</p>
                              <p className="font-semibold text-gray-900">{date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500">Time</p>
                              <p className="font-semibold text-gray-900">{time}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500">Instructor</p>
                              <p className="font-semibold text-gray-900">{schedule.classes?.instructor}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500">Duration</p>
                              <p className="font-semibold text-gray-900">{schedule.classes?.duration} min</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-4 lg:ml-8">
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">Available Spots</p>
                          <div className={`text-5xl font-bold ${isFullyBooked ? 'text-red-600' : 'text-primary-600'}`}>
                            {schedule.available_spots}
                          </div>
                        </div>
                        <button
                          onClick={() => handleBooking(schedule.id)}
                          disabled={isFullyBooked || bookingLoading === schedule.id}
                          className={`px-10 py-4 rounded-full font-bold text-lg transition-all ${
                            isFullyBooked
                              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                              : bookingLoading === schedule.id
                              ? 'bg-primary-400 text-white cursor-wait'
                              : 'bg-primary-600 text-white hover:bg-primary-700 shadow-xl hover:shadow-2xl transform hover:scale-105'
                          }`}
                        >
                          {bookingLoading === schedule.id ? 'Booking...' : isFullyBooked ? 'Fully Booked' : 'Book Now'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Schedule
