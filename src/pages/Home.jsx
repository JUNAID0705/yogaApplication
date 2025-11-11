import { Link } from 'react-router-dom'

const Home = () => {
  const testimonials = [
    { id: 1, name: "Priya Sharma", role: "Regular Student", content: "Astthitva Yoga has transformed my life. I feel more balanced and energized every day. The ancient wisdom combined with modern teaching is perfect.", rating: 5 },
    { id: 2, name: "Arjun Patel", role: "Beginner", content: "As a complete beginner, I felt welcomed and supported. Aadhya's teaching style is amazing and very authentic to Indian yoga traditions.", rating: 5 },
    { id: 3, name: "Meera Reddy", role: "Advanced Practitioner", content: "The variety of classes and focus on Astthitva philosophy keeps me engaged. This is the best yoga experience I've had.", rating: 5 }
  ]

  const yogaPoses = [
    { name: "Vrikshasana (Tree Pose)", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=600&fit=crop" },
    { name: "Virabhadrasana (Warrior)", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=600&fit=crop" },
    { name: "Padmasana (Lotus)", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=600&fit=crop" },
    { name: "Balasana (Child's Pose)", image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=600&fit=crop" }
  ]

  const youtubeVideos = [
    { id: "1", title: "Surya Namaskar - Sun Salutation", videoId: "73sjOu0g58E" },
    { id: "2", title: "Pranayama - Breathing Techniques", videoId: "inpok4MKVLM" },
    { id: "3", title: "Yoga for Flexibility & Strength", videoId: "Eml2xnoLpYE" }
  ]

  const astthitvaArticles = [
    {
      id: 1,
      title: "Understanding Astthitva Yoga Philosophy",
      excerpt: "Astthitva (अस्तित्व) means 'existence' in Sanskrit. Discover how this ancient philosophy connects you to your true self and the universe.",
      author: "Aadhya",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Five Principles of Astthitva Practice",
      excerpt: "Learn the foundational principles that guide Astthitva Yoga: Awareness, Balance, Connection, Discipline, and Enlightenment.",
      author: "Priya Sharma",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Astthitva Yoga for Modern Living",
      excerpt: "How ancient Astthitva wisdom can transform your daily life, reduce stress, and bring inner peace in today's fast-paced world.",
      author: "Arjun Patel",
      readTime: "5 min read"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden mt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop"
            alt="Yoga Practice"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Decorative Om Symbols */}
        <div className="absolute top-20 right-20 opacity-5 text-white text-9xl font-serif">ॐ</div>
        <div className="absolute bottom-20 left-20 opacity-5 text-white text-9xl font-serif">ॐ</div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-2 bg-orange-500/90 backdrop-blur-sm rounded-full">
              <span className="text-white text-2xl font-serif">ॐ</span>
              <p className="text-sm font-medium text-white">Astthitva Yoga • अस्तित्व योग</p>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Your
              <br />
              <span className="text-orange-400">True Existence</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Experience the ancient wisdom of Astthitva Yoga with modern teaching methods. 
              Transform your life through mindful practice.
            </p>

            {/* Sanskrit Quote */}
            <p className="text-lg text-orange-300 italic mb-10 font-serif">
              "योगः चित्त-वृत्ति निरोधः"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:+917301370000"
                className="group px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Schedule a Call
              </a>
              <Link
                to="/online-classes"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all shadow-xl"
              >
                Explore Classes
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-xl">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">5000+</div>
                <div className="text-sm text-gray-300">Students</div>
              </div>
              <div className="text-center border-l border-r border-white/30">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-gray-300">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Aadiyogi Path Section with Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="text-9xl font-serif text-orange-600 absolute top-10 left-10">ॐ</div>
          <div className="text-9xl font-serif text-orange-600 absolute bottom-10 right-10">ॐ</div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white text-5xl font-serif">ॐ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Path of <span className="text-orange-600">Aadiyogi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow the ancient path of the first yogi and discover the transformative power of yoga
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square">
              <img
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop"
                alt="Meditation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-semibold text-sm">Meditation</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop"
                alt="Sunrise Practice"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-semibold text-sm">Sunrise</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop"
                alt="Asana Practice"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-semibold text-sm">Asana</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square">
              <img
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=400&fit=crop"
                alt="Pranayama"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-semibold text-sm">Pranayama</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square">
              <img
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop"
                alt="Mountain Yoga"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-semibold text-sm">Nature</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square">
              <img
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&h=400&fit=crop"
                alt="Peace"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-semibold text-sm">Peace</p>
              </div>
            </div>
          </div>
          
          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3">🕉️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Asana</h3>
              <p className="text-gray-600">Physical postures for strength and flexibility</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3">🧘</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pranayama</h3>
              <p className="text-gray-600">Breath control for energy and vitality</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3">🙏</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dhyana</h3>
              <p className="text-gray-600">Meditation for peace and clarity</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600"/>
            <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                About Astthitva Yoga
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ancient Wisdom,
                <br />
                <span className="text-orange-600">Modern Practice</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Welcome to a sanctuary where ancient Indian wisdom meets modern wellness. 
                Astthitva means "existence" in Sanskrit - and we're here to help you discover 
                your true existence through transformative yoga practice.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our certified instructors blend traditional yoga philosophy with contemporary 
                teaching methods, creating an experience that honors the past while embracing 
                the present.
              </p>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-orange-600">
                  <div className="text-2xl font-bold text-orange-600 mb-1">10+</div>
                  <div className="text-sm text-gray-600">Years Teaching</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-emerald-600">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">5000+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-yellow-600">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Expert Teachers</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-pink-600">
                  <div className="text-2xl font-bold text-pink-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Weekly Classes</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-orange-200 to-yellow-200 rounded-2xl -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=800&fit=crop"
                alt="Meditation at Sunrise"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sunrise Yoga Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 via-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=600&fit=crop"
                alt="Sunrise Yoga Practice"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full blur-2xl opacity-40"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-6xl mb-4">🌅</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Start Your Day with <span className="text-orange-600">Surya Namaskar</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Experience the power of Sun Salutation as the first rays of dawn illuminate your practice. 
                Connect with the ancient tradition of greeting the sun and energizing your body and mind.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Boosts energy and vitality</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Improves flexibility and strength</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Enhances mental clarity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nature & Yoga Connection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Connect with <span className="text-green-600">Nature</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the harmony of yoga in natural settings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=500&h=600&fit=crop"
                alt="Yoga in Nature"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Mountain Meditation</h3>
                  <p className="text-sm opacity-90">Find peace in the heights</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=500&h=600&fit=crop"
                alt="Beach Yoga"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Seaside Serenity</h3>
                  <p className="text-sm opacity-90">Flow with the ocean waves</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=600&fit=crop"
                alt="Sunrise Yoga"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Dawn Practice</h3>
                  <p className="text-sm opacity-90">Greet the rising sun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Poses Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Explore Yoga Poses
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Master these foundational asanas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {yogaPoses.map((pose, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <img
                  src={pose.image}
                  alt={pose.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-semibold text-xl p-4">{pose.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Free Yoga Videos
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Practice along with our instructors anytime, anywhere
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real stories from our yoga community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rishi/Muni Wisdom Quote Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl font-serif text-orange-600 absolute top-10 right-10 rotate-12">ॐ</div>
          <div className="text-9xl font-serif text-orange-600 absolute bottom-10 left-10 -rotate-12">ॐ</div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-4">
              Ancient Wisdom • प्राचीन ज्ञान
            </p>
          </div>

          <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
            "योगः कर्मसु कौशलम्"
          </blockquote>
          <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
            "Yoga is skill in action"
          </p>
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-400"></div>
            <p className="text-lg text-orange-600 font-semibold">
              - Bhagavad Gita (2.50)
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-200">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              महर्षि पतंजलि ने कहा है कि योग चित्त की वृत्तियों का निरोध है। यह केवल शारीरिक व्यायाम नहीं, 
              बल्कि मन, शरीर और आत्मा का संपूर्ण विकास है।
            </p>
            <p className="text-gray-600 italic">
              Maharishi Patanjali said that yoga is the cessation of the modifications of the mind. 
              It is not just physical exercise, but the complete development of mind, body, and soul.
            </p>
          </div>
        </div>
      </section>

      {/* Astthitva Yoga Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              अस्तित्व योग • Astthitva Yoga
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Wisdom & Philosophy
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dive deep into the ancient wisdom of existence and consciousness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {astthitvaArticles.map((article) => (
              <div
                key={article.id}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-3xl font-serif">ॐ</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-orange-700 font-semibold text-xs">
                        {article.author.charAt(0)}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium">{article.author}</span>
                  </div>
                  <span className="text-gray-600">{article.readTime}</span>
                </div>
                <button className="mt-6 text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
