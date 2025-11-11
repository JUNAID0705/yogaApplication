import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const OnlineClasses = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [selectedClass, setSelectedClass] = useState(null)

  const classTypes = [
    {
      id: 1,
      type: "One-to-One",
      title: "Personal Astthitva Yoga Sessions",
      description: "Get personalized attention with private one-on-one sessions tailored to your specific needs and goals. Learn authentic Astthitva yoga philosophy.",
      features: [
        "Customized Astthitva yoga practice",
        "Flexible scheduling",
        "Personal attention from certified instructor",
        "Progress tracking and guidance",
        "Injury modification support"
      ],
      duration: "60 minutes",
      price: "₹1500 per session",
      instructor: "Aadhya or Priya Sharma",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      type: "Group",
      title: "Group Astthitva Yoga Classes",
      description: "Join our vibrant community in live group sessions. Connect with fellow yogis while practicing traditional Astthitva yoga together.",
      features: [
        "Live interactive sessions",
        "Community support and connection",
        "Multiple time slots daily",
        "All levels welcome",
        "Affordable pricing"
      ],
      duration: "75 minutes",
      price: "₹500 per session",
      instructor: "Arjun Patel or Vikram Singh",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      type: "Meditation",
      title: "Dhyana & Pranayama Classes",
      description: "Find inner peace and mental clarity through guided meditation (Dhyana) and breathing techniques (Pranayama) rooted in ancient wisdom.",
      features: [
        "Guided meditation techniques",
        "Pranayama breathing exercises",
        "Stress reduction methods",
        "Mindfulness training",
        "Mental wellness focus"
      ],
      duration: "45 minutes",
      price: "₹400 per session",
      instructor: "Aadhya or Meera Reddy",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop"
    }
  ]

  const handleBookClass = (classType) => {
    if (!user) {
      navigate('/login')
      return
    }
    setSelectedClass(classType)
    // In a real app, this would open a booking modal or navigate to booking page
    alert(`Booking ${classType.type} class! This would open a booking form in production.`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white py-32 px-4 sm:px-6 lg:px-8 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-white"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-orange-500 text-white rounded-full">
            <p className="text-sm font-medium">अस्तित्व योग • Astthitva Yoga</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Online Yoga <span className="text-orange-600">Classes</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700">
            Practice authentic Astthitva Yoga from the comfort of your home with our expert instructors
          </p>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              Choose Your Path
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Class Types
            </h2>
            <p className="text-gray-600 text-lg">
              Find the perfect class that matches your needs and goals
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {classTypes.map((classType, index) => (
              <div 
                key={classType.id} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={classType.image}
                    alt={classType.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold shadow-lg">
                    {classType.type}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">
                      {classType.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {classType.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {classType.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 pb-4 border-b">
                    <p className="text-sm text-gray-600 mb-1">Instructor</p>
                    <p className="font-semibold text-gray-900">{classType.instructor}</p>
                  </div>

                  <div className="flex items-center justify-between mb-6 pb-6 border-b">
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold text-gray-900">{classType.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Price</p>
                      <p className="font-bold text-2xl text-primary-600">{classType.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookClass(classType)}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Online Classes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Practice at Home</h3>
              <p className="text-gray-600">No commute needed, practice in your comfortable space</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Timing</h3>
              <p className="text-gray-600">Choose class times that fit your schedule</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from certified yoga professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">All Levels Welcome</h3>
              <p className="text-gray-600">Beginners to advanced practitioners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Online Yoga Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students practicing yoga online
          </p>
          {!user && (
            <Link
              to="/login"
              className="inline-block px-10 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              Sign Up Now
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}

export default OnlineClasses
