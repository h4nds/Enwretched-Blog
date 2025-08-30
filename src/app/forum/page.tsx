"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import NewsletterSignup from '@/components/features/NewsletterSignup';
//TODO: Add forum page - start wireframes and backend 

export default function Forum() {
  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      
      <main className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-8xl font-cormorant text-purple-300 mb-6">
              Ballroom 
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8">
              
            </p>
          </div>

          {/* Coming Soon Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="border border-purple-900 p-6 bg-black/90 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">What's Coming</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl"></span>
                  <div>
                    <h3 className="text-purple-300 font-semibold">Artist Showcases</h3>
                    <p className="text-purple-200 text-sm">Share your work and get feedback from the community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl"></span>
                  <div>
                    <h3 className="text-purple-300 font-semibold">Discussion Boards</h3>
                    <p className="text-purple-200 text-sm">Id like to have a place where people can discuss the project and share their thoughts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl"></span>
                  <div>
                    <h3 className="text-purple-300 font-semibold">Collaborations</h3>
                    <p className="text-purple-200 text-sm">Connect with other people working on similar projects & end up as life long friends (hopefully)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl"></span>
                  <div>
                    <h3 className="text-purple-300 font-semibold">Resources</h3>
                    <p className="text-purple-200 text-sm">Share tutorials, tools, and other resources for people making other projects  </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="border border-purple-900 p-6 bg-black/90 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">Stay Updated</h2>
              <p className="text-purple-200 mb-6">
                Be the first to know when the forum launches. Join our community of artists and creators.
              </p>
              
              <div className="space-y-4">
                <div className="bg-purple-900/20 border border-purple-900 p-4 rounded-lg">
                  <h3 className="text-purple-300 font-semibold mb-2">Development Progress</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-200">Backend Setup</span>
                      <span className="text-green-400 text-sm">✓ Complete</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-200">UI Design</span>
                      <span className="text-yellow-400 text-sm">In Progress</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-200">User Account/Authentication</span>
                      <span className="text-gray-400 text-sm">Planned </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-200">Beta Testing</span>
                      <span className="text-gray-400 text-sm">Planned</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-900 p-4 rounded-lg">
                  <h3 className="text-purple-300 font-semibold mb-2">Progress Tracker</h3>
                  <p className="text-purple-200 text-sm">Hopefully by the end of the year</p>
                  <div className="mt-2 w-full bg-purple-900/30 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center border border-purple-900 p-8 bg-black/90 rounded-lg">
            <h2 className="text-2xl font-bold text-purple-300 mb-4">In the meantime...</h2>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              May i interest you in my other projects perhaps?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="bg-purple-900/50 hover:bg-purple-900/70 text-purple-200 px-6 py-3 rounded-lg transition-colors duration-200"
              >
                My Blog
              </Link>
              <Link 
                href="/gallery"
                className="bg-purple-900/50 hover:bg-purple-900/70 text-purple-200 px-6 py-3 rounded-lg transition-colors duration-200"
              >
                View Gallery
              </Link>
              <Link 
                href="/contact"
                className="bg-purple-900/50 hover:bg-purple-900/70 text-purple-200 px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12">
            <NewsletterSignup />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 