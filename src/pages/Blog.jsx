import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Morning Yoga Asanas for Energy",
      excerpt: "Start your day with these powerful yoga poses that boost energy and improve flexibility.",
      author: "Priya Sharma",
      date: "Nov 10, 2024",
      readTime: "5 min read",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Pranayama: The Art of Breathing",
      excerpt: "Discover ancient breathing techniques that calm the mind and energize the body.",
      author: "Aadhya",
      date: "Nov 8, 2024",
      readTime: "7 min read",
      category: "Meditation",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Yoga During Pregnancy: A Complete Guide",
      excerpt: "Safe and effective yoga practices for expecting mothers at every stage.",
      author: "Dr. Meera Patel",
      date: "Nov 5, 2024",
      readTime: "10 min read",
      category: "Pregnancy",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Yoga Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and inspiration for your yoga journey
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-700 font-semibold text-xs">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">More articles coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
