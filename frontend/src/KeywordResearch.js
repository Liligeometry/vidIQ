import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  Heart, 
  Download,
  Share2,
  Lightbulb,
  Bell,
  Settings,
  User,
  Play,
  ExternalLink
} from 'lucide-react';

// Header Component for Keyword Research
const Header = ({ currentPage = 'keyword-research' }) => {
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
        </div>
      </div>
    </header>
  );
};

// Keyword Research Component
const KeywordResearch = () => {
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
      <Header currentPage="keyword-research" />
      
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
                  {searchResults.length || mockKeywords.length} keywords found
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

export default KeywordResearch;