"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import NewsletterSignup from '@/components/features/NewsletterSignup';
//TODO: Add forum page - start wireframes and backend 

export default function Forum() {
  return (
    <div className="min-h-screen bg-theme-page text-theme-text font-mono">
      <Header />
      
      <main className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-8xl font-cormorant text-theme-text-heading mb-6">
              Ballroom 
            </h1>
            <p className="text-xl md:text-2xl text-theme-text mb-8">
              
            </p>
          </div>

          {/* Coming Soon Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="border border-theme-border p-6 bg-theme-card rounded-lg">
              <h2 className="text-2xl font-bold text-theme-text-heading mb-4">What's Coming</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-theme-text-muted text-xl"></span>
                  <div>
                    <h3 className="text-theme-text-heading font-semibold">Artist Showcases</h3>
                    <p className="text-theme-text text-sm">Share your work and get feedback from the community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-theme-text-muted text-xl"></span>
                  <div>
                    <h3 className="text-theme-text-heading font-semibold">Discussion Boards</h3>
                    <p className="text-theme-text text-sm">Id like to have a place where people can discuss the project and share their thoughts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-theme-text-muted text-xl"></span>
                  <div>
                    <h3 className="text-theme-text-heading font-semibold">Collaborations</h3>
                    <p className="text-theme-text text-sm">Connect with other people working on similar projects & end up as life long friends (hopefully)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-theme-text-muted text-xl"></span>
                  <div>
                    <h3 className="text-theme-text-heading font-semibold">Resources</h3>
                    <p className="text-theme-text text-sm">Share tutorials, tools, and other resources for people making other projects  </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="border border-theme-border p-6 bg-theme-card rounded-lg">
              <h2 className="text-2xl font-bold text-theme-text-heading mb-4">Stay Updated</h2>
              <p className="text-theme-text mb-6">
                Be the first to know when the forum launches. Join our community of artists and creators.
              </p>
              
              <div className="space-y-4">
                <div className="bg-theme-accent-muted border border-theme-border p-4 rounded-lg">
                  <h3 className="text-theme-text-heading font-semibold mb-2">Development Progress</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-theme-text">Backend Setup</span>
                      <span className="text-green-400 text-sm">✓ Complete</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-theme-text">UI Design</span>
                      <span className="text-yellow-400 text-sm">In Progress</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-theme-text">User Account/Authentication</span>
                      <span className="text-gray-400 text-sm">Planned </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-theme-text">Beta Testing</span>
                      <span className="text-gray-400 text-sm">Planned</span>
                    </div>
                  </div>
                </div>

                <div className="bg-theme-accent-muted border border-theme-border p-4 rounded-lg">
                  <h3 className="text-theme-text-heading font-semibold mb-2">Progress Tracker</h3>
                  <p className="text-theme-text text-sm">Hopefully by the end of the year</p>
                  <div className="mt-2 w-full bg-theme-accent-muted rounded-full h-2">
                    <div className="bg-theme-accent h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center border border-theme-border p-8 bg-theme-card rounded-lg">
            <h2 className="text-2xl font-bold text-theme-text-heading mb-4">In the meantime...</h2>
            <p className="text-theme-text mb-6 max-w-2xl mx-auto">
              May i interest you in my other projects perhaps?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="bg-theme-accent-muted hover:bg-theme-card-hover text-theme-text px-6 py-3 rounded-lg transition-colors duration-200"
              >
                My Blog
              </Link>
              <Link 
                href="/gallery"
                className="bg-theme-accent-muted hover:bg-theme-card-hover text-theme-text px-6 py-3 rounded-lg transition-colors duration-200"
              >
                View Gallery
              </Link>
              <Link 
                href="/contact"
                className="bg-theme-accent-muted hover:bg-theme-card-hover text-theme-text px-6 py-3 rounded-lg transition-colors duration-200"
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