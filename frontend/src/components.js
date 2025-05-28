import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Search, 
  TrendingUp, 
  Users, 
  Eye, 
  Star, 
  ChevronRight, 
  BarChart3, 
  Target, 
  Lightbulb,
  Video,
  ThumbsUp,
  MessageSquare,
  Share2,
  Crown,
  Zap,
  Camera,
  Settings,
  Bell,
  User,
  Home,
  PieChart,
  Award,
  Calendar,
  Clock,
  Heart,
  Download,
  ExternalLink
} from 'lucide-react';

// Header Component
const Header = ({ isLanding = true, currentPage = 'landing' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">vidIQ</span>
            </a>
          </div>

          {isLanding && (
            <>
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
                <a href="#ai-tools" className="text-slate-300 hover:text-white transition-colors">AI Tools</a>
                <a href="#top-youtube-channels" className="text-slate-300 hover:text-white transition-colors">Top YouTube Channels</a>
                <a href="#coaching" className="text-slate-300 hover:text-white transition-colors">Coaching</a>
                <a href="#extensions" className="text-slate-300 hover:text-white transition-colors">Extensions</a>
                <a href="#blog" className="text-slate-300 hover:text-white transition-colors">Blog</a>
                <a href="#login" className="text-slate-300 hover:text-white transition-colors">Login</a>
              </nav>

              <div className="flex items-center space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Sign Up for Free
                </button>
              </div>
            </>
          )}

          {!isLanding && (
            <>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="/dashboard" className={`text-sm font-medium transition-colors ${currentPage === 'dashboard' ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}>
                  Dashboard
                </a>
                <a href="/keyword-research" className={`text-sm font-medium transition-colors ${currentPage === 'keyword-research' ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}>
                  Keyword Research
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <Bell className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                <Settings className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-slate-300" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-600/10 text-blue-400 border border-blue-600/20 mb-8"
          >
            <Zap className="w-4 h-4 mr-2" />
            Breakthrough! Make AI not steal, but help to find it
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Get More Views on YouTube
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            The #1 AI-powered and Data-driven tool for YouTube growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Sign Up for FREE
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-slate-400"
          >
            For our community of 20M+ creators
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// Features Grid
const FeaturesGrid = () => {
  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Personalized Daily Ideas",
      description: "Get daily video ideas based on your channel's niche and performance.",
      image: "https://images.unsplash.com/photo-1548328928-34db1c5fcc1f"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trending Keywords",
      description: "Discover trending keywords and topics relevant to your content.",
      image: "https://images.unsplash.com/photo-1545063328-c8e3faffa16f"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Video Content Generator",
      description: "Generate compelling video ideas with AI-powered tools.",
      image: "https://images.unsplash.com/photo-1477013743164-ffc3a5e556da"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Optimize Videos",
      description: "Get real-time suggestions to optimize your videos for maximum reach.",
      image: "https://images.pexels.com/photos/8532858/pexels-photo-8532858.jpeg"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Recreate Outlier Videos",
      description: "Analyze and recreate successful videos in your niche.",
      image: "https://images.pexels.com/photos/11158021/pexels-photo-11158021.jpeg"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Thumbnails Maker",
      description: "Create eye-catching thumbnails that increase click-through rates.",
      image: "https://images.unsplash.com/photo-1603126004372-e63e3b53934b"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">The Ultimate YouTube Growth Toolkit</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400 mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-slate-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
            View All Features
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Sign Up for Free
          </button>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Sign up and connect your channel",
      description: "Connect your YouTube channel to vidIQ to get started with personalized insights.",
      image: "https://images.unsplash.com/photo-1603126004012-6b6715b9ed91"
    },
    {
      number: "2", 
      title: "Explore tools to grow your channel",
      description: "Use our suite of tools to research keywords, optimize content, and track performance.",
      image: "https://images.pexels.com/photos/14016239/pexels-photo-14016239.png"
    },
    {
      number: "3",
      title: "Watch your channel grow",
      description: "Implement our recommendations and watch your views, subscribers, and engagement increase.",
      image: "https://images.unsplash.com/photo-1603126004372-e63e3b53934b"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How it works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Sign Up for Free
          </button>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "vidIQ's extension and keyword research tools have helped me discover new opportunities on YouTube.",
      author: "Vidalia",
      subscribers: "289M Views",
      avatar: "https://images.pexels.com/photos/8532858/pexels-photo-8532858.jpeg"
    },
    {
      rating: 5,
      text: "vidIQ's daily ideas is what's I find most valuable for my next hit video.",
      author: "BK737",
      subscribers: "324 Subscribers • 7% Views",
      avatar: "https://images.pexels.com/photos/11158021/pexels-photo-11158021.jpeg"
    },
    {
      rating: 5,
      text: "vidIQ has helped me grow my channel and discover key insights.",
      author: "The Steffan",
      subscribers: "1M Subscribers",
      avatar: "https://images.unsplash.com/photo-1603126004372-e63e3b53934b"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-slate-300">25k+ 5 Star Reviews</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Trusted by over 20 million YouTube creators</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.subscribers}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Keyword Research Section
const KeywordResearchSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Reach bigger audiences with winning keywords.
            </h2>
            <p className="text-slate-300 mb-8">
              Access tools with the most accurate and comprehensive Youtube 
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Trending Keywords</h3>
                  <p className="text-slate-300">See what's popular on YouTube right now.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Keyword Scores</h3>
                  <p className="text-slate-300">Discover winning keywords in your niche.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Related Keywords</h3>
                  <p className="text-slate-300">Find new keywords to get your videos seen.</p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Explore Keywords
            </button>
          </div>

          <div className="relative">
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da" 
                alt="Keyword Research Dashboard"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Daily Ideas Section  
const DailyIdeasSection = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Make better videos with personalized ideas.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Get fresh ideas everyday that are tailored to your niche and audience, helping you 
            create content that performs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                <Lightbulb className="w-3 h-3 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Daily Ideas</h3>
                <p className="text-slate-300">Personalized ideas everyday based on what your audience wants to see.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                <Eye className="w-3 h-3 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">See Into the Future</h3>
                <p className="text-slate-300">Predict future performance with new forecasts analytics.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                <Target className="w-3 h-3 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Break New Ground</h3>
                <p className="text-slate-300">Find untapped opportunities based on your data.</p>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Get Today's Ideas
            </button>
          </div>

          <div className="relative">
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Introducing Daily Ideas from vidIQ</h3>
              <p className="text-slate-300 text-sm">Watch on YouTube</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to grow your channel?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-blue-100 mb-8"
        >
          Join the millions of creators using vidIQ today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center">
            <Play className="w-5 h-5 mr-2" />
            Get Started for Free
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            View Pricing
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
              <Play className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">vidIQ</span>
          </div>
          <p className="text-slate-400 mb-6">
            We value your privacy
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Dashboard Sidebar
const DashboardSidebar = () => {
  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: "Dashboard", active: true },
    { icon: <BarChart3 className="w-5 h-5" />, label: "Analytics" },
    { icon: <Search className="w-5 h-5" />, label: "Keyword Research" },
    { icon: <Lightbulb className="w-5 h-5" />, label: "Daily Ideas" },
    { icon: <Video className="w-5 h-5" />, label: "Video Optimization" },
    { icon: <Users className="w-5 h-5" />, label: "Competitors" },
    { icon: <Camera className="w-5 h-5" />, label: "Thumbnails" },
    { icon: <Award className="w-5 h-5" />, label: "Achievement" },
  ];

  return (
    <div className="fixed left-0 top-16 w-64 h-screen bg-slate-800 border-r border-slate-700">
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({ icon, title, value, change, positive = true }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
          {icon}
        </div>
        <div className={`text-sm ${positive ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-slate-400 text-sm">{title}</p>
    </div>
  );
};

// Video Performance Table
const VideoPerformanceTable = () => {
  const videos = [
    {
      title: "How to Grow Your YouTube Channel in 2024",
      views: "45.2K",
      likes: "2.1K",
      comments: "234",
      duration: "12:34",
      published: "2 days ago",
      thumbnail: "https://images.unsplash.com/photo-1548328928-34db1c5fcc1f"
    },
    {
      title: "YouTube Analytics Explained for Beginners",
      views: "32.8K",
      likes: "1.8K",
      comments: "156",
      duration: "8:45",
      published: "5 days ago",
      thumbnail: "https://images.unsplash.com/photo-1545063328-c8e3faffa16f"
    },
    {
      title: "Best YouTube SEO Tips and Tricks",
      views: "28.3K",
      likes: "1.5K",
      comments: "189",
      duration: "15:22",
      published: "1 week ago",
      thumbnail: "https://images.unsplash.com/photo-1477013743164-ffc3a5e556da"
    },
    {
      title: "Creating Viral YouTube Content",
      views: "67.9K",
      likes: "3.2K",
      comments: "445",
      duration: "10:17",
      published: "2 weeks ago",
      thumbnail: "https://images.pexels.com/photos/8532858/pexels-photo-8532858.jpeg"
    }
  ];

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700">
      <div className="p-6 border-b border-slate-700">
        <h3 className="text-lg font-semibold text-white">Recent Videos Performance</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left p-4 text-slate-400 font-medium">Video</th>
              <th className="text-left p-4 text-slate-400 font-medium">Views</th>
              <th className="text-left p-4 text-slate-400 font-medium">Engagement</th>
              <th className="text-left p-4 text-slate-400 font-medium">Published</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video, index) => (
              <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-16 h-12 rounded-lg overflow-hidden mr-3 bg-slate-700">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1 line-clamp-2">{video.title}</h4>
                      <span className="text-slate-400 text-xs">{video.duration}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-white font-medium">{video.views}</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {video.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {video.comments}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-slate-400 text-sm">{video.published}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Daily Ideas Widget
const DailyIdeasWidget = () => {
  const ideas = [
    "10 YouTube Thumbnail Mistakes That Kill Your Views",
    "How to Use YouTube Shorts to Boost Your Main Channel",
    "Secret YouTube Algorithm Changes in 2024",
    "Why Your YouTube Channel Isn't Growing (And How to Fix It)"
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Today's Video Ideas</h3>
        <Lightbulb className="w-5 h-5 text-yellow-400" />
      </div>
      <div className="space-y-3">
        {ideas.map((idea, index) => (
          <div key={index} className="p-3 bg-slate-700/50 rounded-lg border border-slate-600/30">
            <p className="text-white text-sm mb-2">{idea}</p>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-xs">Trending potential: High</span>
              <Heart className="w-4 h-4 text-slate-400 hover:text-red-400 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
        Generate More Ideas
      </button>
    </div>
  );

  // Keyword Research Component
  export const KeywordResearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [sortBy, setSortBy] = useState('score');

  // Keyword Research Component
  export const KeywordResearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [sortBy, setSortBy] = useState('score');

    // Mock keyword data
    const mockKeywords = [
      {
        keyword: 'youtube analytics',
        score: 85,
        volume: '22K',
        competition: 'Medium',
        trend: '+12%',
        difficulty: 'Medium',
        cpc: '$1.45',
        related: ['youtube metrics', 'channel analytics', 'video performance']
      },
      {
        keyword: 'youtube seo tips',
        score: 92,
        volume: '18K',
        competition: 'High',
        trend: '+25%',
        difficulty: 'Hard',
        cpc: '$2.10',
        related: ['youtube optimization', 'video seo', 'youtube ranking']
      },
      {
        keyword: 'how to grow youtube channel',
        score: 78,
        volume: '45K',
        competition: 'High',
        trend: '+8%',
        difficulty: 'Hard',
        cpc: '$1.89',
        related: ['youtube growth', 'channel growth tips', 'youtube subscribers']
      },
      {
        keyword: 'youtube thumbnail design',
        score: 88,
        volume: '15K',
        competition: 'Medium',
        trend: '+18%',
        difficulty: 'Medium',
        cpc: '$1.25',
        related: ['thumbnail maker', 'youtube thumbnails', 'clickable thumbnails']
      },
      {
        keyword: 'youtube shorts strategy',
        score: 95,
        volume: '35K',
        competition: 'Low',
        trend: '+45%',
        difficulty: 'Easy',
        cpc: '$0.95',
        related: ['shorts optimization', 'youtube shorts tips', 'viral shorts']
      },
      {
        keyword: 'youtube monetization',
        score: 82,
        volume: '28K',
        competition: 'High',
        trend: '+15%',
        difficulty: 'Hard',
        cpc: '$2.45',
        related: ['youtube ads', 'channel monetization', 'youtube income']
      },
      {
        keyword: 'video editing for youtube',
        score: 76,
        volume: '32K',
        competition: 'Medium',
        trend: '+10%',
        difficulty: 'Medium',
        cpc: '$1.65',
        related: ['youtube editing', 'video editing tips', 'editing software']
      },
      {
        keyword: 'youtube algorithm 2024',
        score: 90,
        volume: '20K',
        competition: 'Medium',
        trend: '+35%',
        difficulty: 'Medium',
        cpc: '$1.75',
        related: ['youtube algorithm changes', 'algorithm tips', 'youtube updates']
      }
    ];

    const trendingKeywords = [
      'AI content creation',
      'YouTube Shorts monetization',
      'Live streaming tips',
      'Community posts strategy',
      'YouTube Premium features'
    ];

    const handleSearch = (query = searchQuery) => {
      setIsSearching(true);
      
      setTimeout(() => {
        if (query.trim()) {
          const filtered = mockKeywords.filter(keyword => 
            keyword.keyword.toLowerCase().includes(query.toLowerCase()) ||
            keyword.related.some(related => related.toLowerCase().includes(query.toLowerCase()))
          );
          setSearchResults(filtered.length > 0 ? filtered : mockKeywords.slice(0, 6));
        } else {
          setSearchResults(mockKeywords);
        }
        setIsSearching(false);
      }, 1000);
    };

    const getScoreColor = (score) => {
      if (score >= 90) return 'text-green-400';
      if (score >= 80) return 'text-yellow-400';
      if (score >= 70) return 'text-orange-400';
      return 'text-red-400';
    };

    const getDifficultyColor = (difficulty) => {
      switch (difficulty) {
        case 'Easy': return 'text-green-400 bg-green-400/10';
        case 'Medium': return 'text-yellow-400 bg-yellow-400/10';
        case 'Hard': return 'text-red-400 bg-red-400/10';
        default: return 'text-slate-400 bg-slate-400/10';
      }
    };

    return (
      <div className="min-h-screen bg-slate-900">
        <Header isLanding={false} currentPage="keyword-research" />
        
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Keyword Research</h1>
              <p className="text-slate-400">Discover high-performing keywords to boost your YouTube content</p>
            </div>

            {/* Search Section */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Enter a keyword or topic..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={() => handleSearch()}
                  disabled={isSearching}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center"
                >
                  {isSearching ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </>
                  )}
                </button>
              </div>

              {/* Quick Search Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-slate-400 text-sm mr-2">Quick search:</span>
                {trendingKeywords.map((keyword, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(keyword);
                      handleSearch(keyword);
                    }}
                    className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-full text-sm transition-colors"
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Results */}
              <div className="lg:col-span-3">
                {/* Filters */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <select
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option value="all">All Keywords</option>
                      <option value="high-volume">High Volume</option>
                      <option value="low-competition">Low Competition</option>
                      <option value="trending">Trending</option>
                    </select>
                    
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option value="score">Sort by Score</option>
                      <option value="volume">Sort by Volume</option>
                      <option value="competition">Sort by Competition</option>
                      <option value="trend">Sort by Trend</option>
                    </select>
                  </div>
                  
                  <div className="text-slate-400 text-sm">
                    {searchResults.length} keywords found
                  </div>
                </div>

                {/* Results Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-700 bg-slate-700/50">
                          <th className="text-left p-4 text-slate-300 font-medium">Keyword</th>
                          <th className="text-left p-4 text-slate-300 font-medium">Score</th>
                          <th className="text-left p-4 text-slate-300 font-medium">Volume</th>
                          <th className="text-left p-4 text-slate-300 font-medium">Competition</th>
                          <th className="text-left p-4 text-slate-300 font-medium">Trend</th>
                          <th className="text-left p-4 text-slate-300 font-medium">Difficulty</th>
                          <th className="text-left p-4 text-slate-300 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(searchResults.length > 0 ? searchResults : mockKeywords).map((keyword, index) => (
                          <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                            <td className="p-4">
                              <div>
                                <h4 className="text-white font-medium">{keyword.keyword}</h4>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {keyword.related.slice(0, 2).map((related, idx) => (
                                    <span key={idx} className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                                      {related}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center">
                                <span className={`text-lg font-bold ${getScoreColor(keyword.score)}`}>
                                  {keyword.score}
                                </span>
                                <span className="text-slate-400 text-sm ml-1">/100</span>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="text-white font-medium">{keyword.volume}</span>
                              <span className="text-slate-400 text-sm block">monthly</span>
                            </td>
                            <td className="p-4">
                              <span className="text-slate-300">{keyword.competition}</span>
                            </td>
                            <td className="p-4">
                              <span className="text-green-400 font-medium">{keyword.trend}</span>
                            </td>
                            <td className="p-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(keyword.difficulty)}`}>
                                {keyword.difficulty}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                <button className="p-1 text-slate-400 hover:text-blue-400 transition-colors">
                                  <Heart className="w-4 h-4" />
                                </button>
                                <button className="p-1 text-slate-400 hover:text-green-400 transition-colors">
                                  <Download className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Trending Keywords */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                    Trending Now
                  </h3>
                  <div className="space-y-3">
                    {trendingKeywords.map((keyword, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-slate-700/50 rounded-lg">
                        <span className="text-white text-sm">{keyword}</span>
                        <div className="flex items-center text-green-400 text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          +{25 + index * 5}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Keyword Tips */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                    Pro Tips
                  </h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                      <p>Target keywords with 70+ score for best results</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                      <p>Look for trending keywords with low competition</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                      <p>Use long-tail keywords for better ranking</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                      <p>Monitor seasonal trends for content planning</p>
                    </div>
                  </div>
                </div>

                {/* Export Options */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Export Results</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download CSV
                    </button>
                    <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

// Analytics Chart Component
const AnalyticsChart = () => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Channel Analytics</h3>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">7D</button>
          <button className="px-3 py-1 text-slate-400 hover:text-white rounded text-sm">30D</button>
          <button className="px-3 py-1 text-slate-400 hover:text-white rounded text-sm">90D</button>
        </div>
      </div>
      
      <div className="h-64 bg-slate-700/30 rounded-lg flex items-center justify-center mb-4">
        <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg p-4">
          <img 
            src="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da" 
            alt="Analytics Chart"
            className="w-full h-full object-cover rounded opacity-50"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-white">12.3K</p>
          <p className="text-slate-400 text-sm">Views</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">847</p>
          <p className="text-slate-400 text-sm">Watch Time (hrs)</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">156</p>
          <p className="text-slate-400 text-sm">New Subscribers</p>
        </div>
      </div>
    </div>
  );
};

// Dashboard Component
export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header isLanding={false} />
      <DashboardSidebar />
      
      <div className="ml-64 pt-16">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-slate-400">Welcome back! Here's what's happening with your channel.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              icon={<Eye className="w-6 h-6" />}
              title="Total Views"
              value="1.2M"
              change="+12.5%"
              positive={true}
            />
            <StatsCard
              icon={<Users className="w-6 h-6" />}
              title="Subscribers"
              value="45.2K"
              change="+8.3%"
              positive={true}
            />
            <StatsCard
              icon={<Clock className="w-6 h-6" />}
              title="Watch Time"
              value="2.1K hrs"
              change="+15.7%"
              positive={true}
            />
            <StatsCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Engagement Rate"
              value="4.8%"
              change="-2.1%"
              positive={false}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <AnalyticsChart />
              <VideoPerformanceTable />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <DailyIdeasWidget />
              
              {/* Quick Actions */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <Search className="w-5 h-5 text-blue-400 mr-3" />
                      <span className="text-white">Keyword Research</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <Camera className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-white">Create Thumbnail</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-white">Optimize Video</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Video uploaded successfully</span>
                    <span className="text-slate-500 ml-auto">2h ago</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Keyword research completed</span>
                    <span className="text-slate-500 ml-auto">4h ago</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">New subscriber milestone reached</span>
                    <span className="text-slate-500 ml-auto">1d ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// HomePage Component
export const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <TestimonialsSection />
      <KeywordResearchSection />
      <DailyIdeasSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};