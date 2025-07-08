import React from 'react';
import {
  Download,
  BarChart3,
  Filter,
  PieChart,
  TrendingUp,
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Layers,
  Database,
  Zap
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shabab Akbar
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                Excel Dashboard Portfolio
              </p>
            </div>
            <p className="text-lg sm:text-xl text-purple-300 font-medium mb-8">
              Insightful Business Dashboards | Data-Driven Storytelling
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">Excel Expert</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                <Database className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">Data Analyst</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Project Highlight Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              📈 Superstore Sales Dashboard
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* IMAGE CARD */}
            <div className="order-2 lg:order-1 h-full">
              <div className="h-full bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-center">
                <div className="h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl flex items-center justify-center border-2 border-dashed border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group">
                  <img
                    src="/dashboard.png"
                    alt="Excel Dashboard Screenshot"
                    className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

              </div>
            </div>

            {/* TEXT CARD */}
            <div className="order-1 lg:order-2 h-full">
              <div className="h-full bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  This interactive Excel dashboard analyzes a fictional superstore's performance using slicers, pivot charts, and clean visual storytelling...
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700/50 rounded-lg p-4 border border-purple-500/10">
                    <Clock className="w-6 h-6 text-purple-400 mb-2" />
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-white font-semibold">2 Days</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-4 border border-purple-500/10">
                    <Layers className="w-6 h-6 text-purple-400 mb-2" />
                    <p className="text-sm text-gray-400">Tool Used</p>
                    <p className="text-white font-semibold">Excel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Key Features
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300">
              <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">Monthly & Yearly Sales Charts</h3>
              <p className="text-gray-300">Dynamic time-series visualization showing sales trends and performance patterns across different periods.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300">
              <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">Region & Category Reports</h3>
              <p className="text-gray-300">Comprehensive breakdown of sales performance by geographical regions and product categories.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300">
              <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <PieChart className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">Visual Charts & Insights</h3>
              <p className="text-gray-300">Pie charts and stacked columns providing quick visual insights into data distribution and composition.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300">
              <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Filter className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">Interactive Filters</h3>
              <p className="text-gray-300">Fully interactive slicers allowing users to filter and drill down into specific data segments.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300">
              <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">Pivot Table Integration</h3>
              <p className="text-gray-300">Data-driven design utilizing Excel's powerful pivot table functionality for dynamic analysis.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300">
              <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">Real-time Updates</h3>
              <p className="text-gray-300">Dynamic dashboard that automatically updates visualizations when underlying data changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              📥 Free Download
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Download the complete Excel dashboard file and explore the interactive features yourself. Perfect for learning or adapting to your own projects.
            </p>

            <a
              href="/SuperstoreDashboard.xlsx"
              download
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Download className="w-6 h-6" />
              <span className="text-lg">Download Excel File</span>
            </a>

            <p className="text-gray-400 mt-6">
              You're free to explore or customize this Excel file for your own use.
            </p>
          </div>
        </div>
      </section>

      {/* About the Project Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About the Project
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Tools Used</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Microsoft Excel</li>
                <li>• Pivot Tables</li>
                <li>• Advanced Charts</li>
                <li>• Data Validation</li>
                <li>• Conditional Formatting</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Timeline</h3>
              <div className="text-gray-300">
                <p className="text-3xl font-bold text-purple-400 mb-2">2 Days</p>
                <p>From concept to completion, this dashboard was designed and built efficiently while maintaining high quality and attention to detail.</p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Purpose</h3>
              <div className="text-gray-300">
                <p className="mb-4">Created for:</p>
                <ul className="space-y-2">
                  <li>• Portfolio showcase</li>
                  <li>• Client reference</li>
                  <li>• Skills demonstration</li>
                  <li>• Learning resource</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.linkedin.com/in/syed-shabab-akbar-b58411279"
                className="bg-gray-800/50 p-3 rounded-full hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
              >
                <Linkedin className="w-6 h-6 text-purple-400" />
              </a>
              <a
                href="https://www.fiverr.com/s/XLvjx1V"
                className="bg-gray-800/50 p-3 rounded-full hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
              >
                <ExternalLink className="w-6 h-6 text-purple-400" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shababakbar.dev@gmail.com&su=Dashboard%20Inquiry&body=Hello%20Shabab%2C%0A%0AI%20am%20interested%20in%20your%20dashboard%20project..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 p-3 rounded-full hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
              >
                <Mail className="w-6 h-6 text-purple-400" />
              </a>


            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">
              Made by <span className="text-purple-400 font-semibold">Shabab Akbar</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 All rights reserved. Gmail: shababakbar.dev@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

