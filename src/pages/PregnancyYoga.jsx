import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PregnancyYoga = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('prenatal')

  const prenatalBenefits = [
    "Reduces back pain and improves posture",
    "Prepares body for labor and delivery",
    "Reduces stress and anxiety",
    "Improves sleep quality",
    "Strengthens pelvic floor muscles",
    "Enhances circulation and reduces swelling"
  ]

  const postnatalBenefits = [
    "Restores core strength and stability",
    "Relieves tension in shoulders and neck",
    "Boosts energy and mood",
    "Aids in postpartum recovery",
    "Promotes bonding with baby",
    "Reduces postpartum depression symptoms"
  ]

  const prenatalPoses = [
    {
      name: "Cat-Cow Stretch",
      description: "Relieves back tension and improves spinal flexibility",
      trimester: "All trimesters",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
    },
    {
      name: "Modified Warrior II",
      description: "Strengthens legs and opens hips",
      trimester: "1st & 2nd trimester",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
    },
    {
      name: "Butterfly Pose",
      description: "Opens hips and prepares for delivery",
      trimester: "All trimesters",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop"
    }
  ]

  const postnatalPoses = [
    {
      name: "Pelvic Tilts",
      description: "Strengthens core and relieves lower back pain",
      timing: "After 6 weeks",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop"
    },
    {
      name: "Bridge Pose",
      description: "Strengthens glutes and lower back",
      timing: "After 8 weeks",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop"
    },
    {
      name: "Child's Pose",
      description: "Gentle stretch for back and hips",
      timing: "After 6 weeks",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
    }
  ]

  const handleBookClass = (type) => {
    if (!user) {
      navigate('/login')
      return
    }
    alert(`Booking ${type} yoga class! This would open a booking form in production.`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 via-pink-600 to-purple-600 text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden mt-20">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        {/* Sanskrit Om Symbol */}
        <div className="absolute top-20 right-20 opacity-5 text-white text-9xl font-serif">ॐ</div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <p className="text-sm font-medium">गर्भावस्था योग • Pregnancy Yoga</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Nurture Your Journey
            <br />
            <span className="text-yellow-300">To Motherhood</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Safe, gentle yoga practices designed for every stage of your beautiful journey
          </p>
          <p className="text-lg italic opacity-75">
            "A mother's joy begins when new life is stirring inside"
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setActiveTab('prenatal')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'prenatal'
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Prenatal Yoga
            </button>
            <button
              onClick={() => setActiveTab('postnatal')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'postnatal'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Postnatal Yoga
            </button>
          </div>

          {/* Prenatal Content */}
          {activeTab === 'prenatal' && (
            <div className="space-y-16">
              {/* About Prenatal */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Prenatal Yoga
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Our prenatal yoga classes are specifically designed to support you throughout your pregnancy journey. 
                    Practice safe, modified poses that help prepare your body and mind for childbirth.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    All classes are taught by certified prenatal yoga instructors who understand the unique needs of 
                    pregnant women at every stage.
                  </p>
                  <button
                    onClick={() => handleBookClass('Prenatal')}
                    className="px-8 py-4 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg"
                  >
                    Book Prenatal Class
                  </button>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop"
                    alt="Prenatal Yoga"
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Benefits of Prenatal Yoga
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {prenatalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-pink-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Poses */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Safe Prenatal Poses
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {prenatalPoses.map((pose, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                      <img
                        src={pose.image}
                        alt={pose.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-bold text-gray-900">{pose.name}</h4>
                          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">
                            {pose.trimester}
                          </span>
                        </div>
                        <p className="text-gray-600">{pose.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Postnatal Content */}
          {activeTab === 'postnatal' && (
            <div className="space-y-16">
              {/* About Postnatal */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop"
                    alt="Postnatal Yoga"
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Postnatal Yoga
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Gentle yoga practices designed to help new mothers recover strength, flexibility, and energy 
                    after childbirth. Our postnatal classes focus on healing and reconnecting with your body.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Classes can be started 6-8 weeks after delivery (or as advised by your healthcare provider). 
                    Babies are welcome to join!
                  </p>
                  <button
                    onClick={() => handleBookClass('Postnatal')}
                    className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
                  >
                    Book Postnatal Class
                  </button>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Benefits of Postnatal Yoga
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {postnatalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Poses */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Postnatal Recovery Poses
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {postnatalPoses.map((pose, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                      <img
                        src={pose.image}
                        alt={pose.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-bold text-gray-900">{pose.name}</h4>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                            {pose.timing}
                          </span>
                        </div>
                        <p className="text-gray-600">{pose.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-yellow-50 border-t border-b border-yellow-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start">
            <svg className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Important Safety Information</h3>
              <p className="text-gray-700 leading-relaxed">
                Always consult with your healthcare provider before starting any exercise program during or after pregnancy. 
                Our instructors are trained to provide modifications, but your doctor knows your specific health needs best. 
                Listen to your body and never push beyond your comfort level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Pregnancy Yoga Community
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with other mothers and experience the benefits of specialized yoga practice
          </p>
          {!user && (
            <Link
              to="/login"
              className="inline-block px-10 py-4 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              Get Started Today
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}

export default PregnancyYoga
