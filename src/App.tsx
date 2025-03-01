import React from 'react';
import { Search, Globe, Menu, X, Sparkles, Zap, Star, TrendingUp, Shield, Clock, PenTool as Tool, CreditCard, Users, Briefcase, Award, Heart } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-sky-500" />
              <span className="text-2xl font-bold gradient-text">GigsHub</span>
            </div>
            
            <button 
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-sky-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <button className="text-gray-600 hover:text-sky-600 transition-all hover:scale-105">Find Work</button>
              <button className="text-gray-600 hover:text-sky-600 transition-all hover:scale-105">Browse Freelancers</button>
              <div className="flex items-center space-x-2">
                <Globe size={18} className="text-gray-600" />
                <span className="text-gray-600">English</span>
              </div>
              <button className="text-gray-600 hover:text-sky-600 transition-all hover:scale-105">Sign in</button>
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all">
                Join Now
              </button>
            </div>
          </div>

          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col space-y-4">
              <button className="text-gray-600 hover:text-sky-600 transition-colors py-2">Find Work</button>
              <button className="text-gray-600 hover:text-sky-600 transition-colors py-2">Browse Freelancers</button>
              <button className="text-gray-600 hover:text-sky-600 transition-colors py-2">Sign in</button>
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="container relative mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                Find <span className="gradient-text">amazing talent</span> for your next project
              </h1>
              <p className="text-xl text-gray-600">Connect with top freelancers and bring your ideas to life</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="w-full pl-12 pr-32 py-4 rounded-full border-2 border-sky-100 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all flex items-center space-x-2">
                  <Search size={20} />
                  <span>Search</span>
                </button>
                <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              </div>
            </div>
            <div className="relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
                alt="Work together"
                className="rounded-lg shadow-2xl animate-float"
              />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400"
                alt="Team collaboration"
                className="absolute -bottom-10 -left-10 w-64 rounded-lg shadow-2xl animate-float-delayed"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Featured Categories - Moved up */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Services</h2>
            <p className="text-gray-600 text-lg">Find the perfect match for your project</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
                description: "Build your online presence",
                icon: <Zap className="text-yellow-500" />
              },
              {
                title: "Graphic Design",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800",
                description: "Create stunning visuals",
                icon: <Star className="text-purple-500" />
              },
              {
                title: "Digital Marketing",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
                description: "Grow your audience",
                icon: <TrendingUp className="text-green-500" />
              }
            ].map((category, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative h-64">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover image-fade"
                    style={{ animationDelay: `${index * 1}s` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center space-x-2 mb-2">
                      {category.icon}
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                    <p className="text-gray-200">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose GigsHub?</h2>
            <p className="text-gray-600 text-lg">Join thousands of satisfied clients and freelancers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Award className="w-12 h-12 text-yellow-500" />,
                title: "Top Quality Talent",
                description: "Access pre-vetted professionals with proven track records"
              },
              {
                icon: <Heart className="w-12 h-12 text-red-500" />,
                title: "95% Satisfaction Rate",
                description: "Our clients love the results they get with our freelancers"
              },
              {
                icon: <Briefcase className="w-12 h-12 text-blue-500" />,
                title: "Global Reach",
                description: "Connect with experts from over 150 countries worldwide"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4 hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: "💻", label: "Programming", color: "bg-blue-50" },
              { icon: "🎨", label: "Design", color: "bg-purple-50" },
              { icon: "📝", label: "Writing", color: "bg-green-50" },
              { icon: "🎥", label: "Video", color: "bg-red-50" },
              { icon: "📊", label: "Marketing", color: "bg-yellow-50" },
              { icon: "📸", label: "Photography", color: "bg-pink-50" }
            ].map((service, index) => (
              <button
                key={index}
                className={`p-6 ${service.color} rounded-xl shadow-sm hover:shadow-xl transition-all hover:scale-105 group`}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors">
                  {service.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section - Moved to bottom */}
      <section className="py-24 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">The Premium Freelance Solution for Businesses</h2>
            <p className="text-xl text-gray-600">Everything you need to seamlessly integrate top talent into your team</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-sky-500" />,
                title: "Dedicated Hiring Experts",
                description: "Count on an account manager to find you the right talent and see to your project's every need."
              },
              {
                icon: <Shield className="w-8 h-8 text-green-500" />,
                title: "Satisfaction Guarantee",
                description: "Order confidently, with guaranteed refunds for less-than-satisfactory deliveries."
              },
              {
                icon: <Tool className="w-8 h-8 text-purple-500" />,
                title: "Advanced Management Tools",
                description: "Seamlessly integrate freelancers into your team and projects."
              },
              {
                icon: <CreditCard className="w-8 h-8 text-blue-500" />,
                title: "Flexible Payment Models",
                description: "Pay per project or opt for hourly rates to facilitate longer-term collaboration."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
