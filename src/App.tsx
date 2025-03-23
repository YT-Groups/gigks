import React, { useState } from 'react';
import { Search, Globe, Menu, X, Sparkles, Zap, Star, TrendingUp, Shield, Clock, PenTool as Tool, CreditCard, Users, Briefcase, Award, Heart, Rss, Settings, User, Edit, Lock, Bell, HelpCircle, LogOut } from 'lucide-react';


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'jobs':
        return <JobFeed />;
      case 'freelancers':
        return <FreelancerFeed />;
      case 'signin':
        return <SignIn />;
      case 'signup':
        return <SignUp />;
      case 'settings':
        return <SettingsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'manage-profile':
        return <ManageProfilePage />;
      default:
        return <HomePage 
          onFindWorkClick={() => setCurrentPage('jobs')}
          onBrowseFreelancersClick={() => setCurrentPage('freelancers')}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center space-x-2 cursor-pointer" 
              onClick={() => setCurrentPage('home')}
            >
              <Sparkles className="text-sky-500" />
              <span className="text-2xl font-bold gradient-text">GigksHub</span>
            </div>
            
            <button 
              className="md:hidden p-2 rounded-md text-blue-600 hover:text-blue-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={30} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <button 
                className="text-gray-600 hover:text-sky-600 transition-all hover:scale-105"
                onClick={() => setCurrentPage('jobs')}
              >
                Find Work
              </button>
              <button 
                className="text-gray-600 hover:text-sky-600 transition-all hover:scale-105"
                onClick={() => setCurrentPage('freelancers')}
              >
                Browse Freelancers
              </button>
              <div className="flex items-center space-x-2">
                <Globe size={18} className="text-gray-600" />
                <span className="text-gray-600">English</span>
              </div>
              <button 
                className="text-gray-600 hover:text-sky-600 transition-all hover:scale-105"
                onClick={() => setCurrentPage('signin')}
              >
                Sign in
              </button>
              <button 
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                onClick={() => setCurrentPage('signup')}
              >
                Join Now
              </button>
              <button 
                className="text-gray-600 hover:text-sky-600 transition-all hover:scale-105"
                onClick={() => setCurrentPage('settings')}
              >
                <Settings size={24} />
              </button>
            </div>
          </div>

          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col space-y-4">
              <button 
                className="text-gray-600 hover:text-sky-600 transition-colors py-2"
                onClick={() => {
                  setCurrentPage('jobs');
                  setMobileMenuOpen(false);
                }}
              >
                Find Work
              </button>
              <button 
                className="text-gray-600 hover:text-sky-600 transition-colors py-2"
                onClick={() => {
                  setCurrentPage('freelancers');
                  setMobileMenuOpen(false);
                }}
              >
                Browse Freelancers
              </button>
              <button 
                className="text-gray-600 hover:text-sky-600 transition-colors py-2"
                onClick={() => {
                  setCurrentPage('signin');
                  setMobileMenuOpen(false);
                }}
              >
                Sign in
              </button>
              <button 
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg"
                onClick={() => {
                  setCurrentPage('signup');
                  setMobileMenuOpen(false);
                }}
              >
                Join Now
              </button>
              <button 
                className="text-gray-600 hover:text-sky-600 transition-colors py-2"
                onClick={() => {
                  setCurrentPage('settings');
                  setMobileMenuOpen(false);
                }}
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      </nav>

      {renderPage()}
    </div>
  );
}



// Add the new components for Settings, Profile, and Manage Profile
function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <User className="text-sky-500" size={24} />
              <h2 className="text-xl font-bold">Profile</h2>
            </div>
            <p className="text-gray-600 mb-4">Manage your profile information and visibility.</p>
            <button 
              className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
              onClick={() => setCurrentPage('profile')}
            >
              View Profile
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Edit className="text-purple-500" size={24} />
              <h2 className="text-xl font-bold">Manage Profile</h2>
            </div>
            <p className="text-gray-600 mb-4">Edit your profile details and preferences.</p>
            <button 
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              onClick={() => setCurrentPage('manage-profile')}
            >
              Manage Profile
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Lock className="text-red-500" size={24} />
              <h2 className="text-xl font-bold">Security</h2>
            </div>
            <p className="text-gray-600 mb-4">Update your password and security settings.</p>
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              onClick={() => setCurrentPage('security')}
            >
              Security Settings
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Bell className="text-yellow-500" size={24} />
              <h2 className="text-xl font-bold">Notifications</h2>
            </div>
            <p className="text-gray-600 mb-4">Manage your notification preferences.</p>
            <button 
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
              onClick={() => setCurrentPage('notifications')}
            >
              Notification Settings
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <HelpCircle className="text-green-500" size={24} />
              <h2 className="text-xl font-bold">Help & Support</h2>
            </div>
            <p className="text-gray-600 mb-4">Get help and support for your account.</p>
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              onClick={() => setCurrentPage('help')}
            >
              Help & Support
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <LogOut className="text-gray-500" size={24} />
              <h2 className="text-xl font-bold">Logout</h2>
            </div>
            <p className="text-gray-600 mb-4">Logout from your account.</p>
            <button 
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              onClick={() => setCurrentPage('logout')}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-6 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300" 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4">About Me</h3>
              <p className="text-gray-600">I am a passionate Full Stack Developer with over 5 years of experience in building web applications. I specialize in React, Node.js, and MongoDB.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Express', 'GraphQL'].map((skill, index) => (
                  <span key={index} className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ManageProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-8">Manage Profile</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea 
                id="bio" 
                name="bio" 
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                placeholder="Tell us about yourself..."
              />
            </div>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
              <input 
                type="text" 
                id="skills" 
                name="skills" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                placeholder="React, Node.js, MongoDB"
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



function HomePage({ onFindWorkClick, onBrowseFreelancersClick }) {
  return (
    <>
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white flex items-center justify-center text-center">

        <div className="absolute inset-0 hero-pattern"></div>
        <div className="container relative mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">

                Find <span className="gradient-text">amazing talent</span> for your next project
              </h1>
              <p className="text-base sm:text-lg text-gray-600">Connect with top freelancers and bring your ideas to life</p>
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
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onFindWorkClick}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2"
                >
                  <Briefcase size={20} />
                  <span>Find Work</span>
                </button>
                <button 
                  onClick={onBrowseFreelancersClick}
                  className="bg-white text-sky-600 border-2 border-sky-500 px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2"
                >
                  <Users size={20} />
                  <span>Browse Freelancers</span>
                </button>
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

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Services</h2>
            <p className="text-gray-600 text-lg">Find the perfect match for your project</p>
          </div>
          
          {/* Quick Categories - Moved here as requested */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">
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

      {/* Premium Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">The Premium Freelance Solution for Businesses</h2>
            <p className="text-base sm:text-lg text-gray-600">Everything you need to seamlessly integrate top talent into your team</p>
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
    </>
  );
}

function JobFeed() {
  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer Needed for E-commerce Platform",
      budget: "$3,000 - $5,000",
      description: "Looking for an experienced developer to build a custom e-commerce platform with React, Node.js, and MongoDB.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      postedDate: "2 days ago",
      company: "TechSolutions Inc.",
      location: "Remote"
    },
    {
      id: 2,
      title: "WordPress Website Redesign",
      budget: "$1,500 - $2,500",
      description: "Need to redesign an existing WordPress website for a local restaurant. Must be mobile-friendly and SEO optimized.",
      skills: ["WordPress", "UI/UX", "PHP", "SEO"],
      postedDate: "1 day ago",
      company: "FoodieFinds",
      location: "Remote"
    },
    {
      id: 3,
      title: "Mobile App Developer for Fitness Tracking App",
      budget: "$4,000 - $6,000",
      description: "Seeking a mobile developer to create a fitness tracking app for iOS and Android using React Native.",
      skills: ["React Native", "Firebase", "UI/UX", "API Integration"],
      postedDate: "3 days ago",
      company: "FitTech",
      location: "Remote"
    },
    {
      id: 4,
      title: "Logo and Brand Identity Design",
      budget: "$800 - $1,200",
      description: "Looking for a creative designer to develop a logo and brand identity for a new tech startup.",
      skills: ["Logo Design", "Branding", "Adobe Illustrator", "Typography"],
      postedDate: "5 hours ago",
      company: "InnovateTech",
      location: "Remote"
    },
    {
      id: 5,
      title: "Content Writer for SaaS Blog",
      budget: "$50 - $100 per article",
      description: "Need an experienced content writer to create engaging blog posts about SaaS products and industry trends.",
      skills: ["Content Writing", "SEO", "SaaS Knowledge", "Research"],
      postedDate: "1 week ago",
      company: "SaaSify",
      location: "Remote"
    },
    {
      id: 6,
      title: "Video Editor for YouTube Channel",
      budget: "$500 - $1,000 per video",
      description: "Seeking a skilled video editor to create engaging content for a growing YouTube channel focused on technology reviews.",
      skills: ["Video Editing", "Adobe Premiere", "After Effects", "Storytelling"],
      postedDate: "3 days ago",
      company: "TechTube",
      location: "Remote"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Find Work</h1>
          <div className="flex items-center space-x-2">
            <Rss className="text-sky-500" />
            <span className="text-gray-700">Job Feed</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
              <option>All Categories</option>
              <option>Web Development</option>
              <option>Design</option>
              <option>Writing</option>
              <option>Marketing</option>
            </select>
            <button className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600">
              Search
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {jobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h2>
                  <span className="text-sky-600 font-semibold">{job.budget}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>{job.company}</span>
                  <span className="mx-2">•</span>
                  <span>{job.location}</span>
                  <span className="mx-2">•</span>
                  <span>{job.postedDate}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FreelancerFeed() {
  const freelancers = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "Full Stack Developer",
      rating: 4.9,
      reviews: 127,
      hourlyRate: "$65",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500"
      ]
    },
    {
      id: 2,
      name: "Sophia Chen",
      title: "UI/UX Designer",
      rating: 5.0,
      reviews: 89,
      hourlyRate: "$75",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=500"
      ]
    },
    {
      id: 3,
      name: "Marcus Williams",
      title: "Mobile App Developer",
      rating: 4.8,
      reviews: 56,
      hourlyRate: "$70",
      skills: ["React Native", "Swift", "Kotlin", "Firebase"],
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500"
      ]
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      title: "Graphic Designer",
      rating: 4.7,
      reviews: 103,
      hourlyRate: "$55",
      skills: ["Illustrator", "Photoshop", "InDesign", "Branding"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=500"
      ]
    },
    {
      id: 5,
      name: "David Kim",
      title: "Content Writer",
      rating: 4.9,
      reviews: 78,
      hourlyRate: "$45",
      skills: ["Copywriting", "SEO", "Blog Writing", "Technical Writing"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500"
      ]
    },
    {
      id: 6,
      name: "Olivia Taylor",
      title: "Video Editor",
      rating: 4.8,
      reviews: 62,
      hourlyRate: "$60",
      skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=500"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Browse Freelancers</h1>
          <div className="flex items-center space-x-2">
            <Rss className="text-sky-500" />
            <span className="text-gray-700">Freelancer Feed</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search freelancers..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
              <option>All Skills</option>
              <option>Development</option>
              <option>Design</option>
              <option>Writing</option>
              <option>Marketing</option>
            </select>
            <button className="bg-sky-500 text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-sky-600
">
              Search
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map(freelancer => (
            <div key={freelancer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={freelancer.image} 
                    alt={freelancer.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{freelancer.name}</h2>
                    <p className="text-gray-600">{freelancer.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-yellow-400 mr-2">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-gray-800">{freelancer.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">({freelancer.reviews} reviews)</span>
                  <span className="ml-auto font-semibold text-sky-600">{freelancer.hourlyRate}/hr</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {freelancer.skills.map((skill, index) => (
                    <span key={index} className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {freelancer.portfolio.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SignIn() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <Sparkles className="text-sky-500 h-12 w-12" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <button className="font-medium text-sky-600 hover:text-sky-500">
              create a new account
            </button>
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <button className="font-medium text-sky-600 hover:text-sky-500">
                Forgot your password?
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function SignUp() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <Sparkles className="text-sky-500 h-12 w-12" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <button className="font-medium text-sky-600 hover:text-sky-500">
              Sign in
            </button>
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full name
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{" "}
              <button className="font-medium text-sky-600 hover:text-sky-500">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="font-medium text-sky-600 hover:text-sky-500">
                Privacy Policy
              </button>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
