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
const Header = ({ isLanding = true }) => {
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
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
              <Settings className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-slate-300" />
              </div>
            </div>
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