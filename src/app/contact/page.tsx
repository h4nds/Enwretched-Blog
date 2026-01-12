"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/features/ContactForm';
import { FaInstagram, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('wretchray@gmail.com');
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      
      <main className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font- text-purple-300 mb-6">
              Commision Enquiry
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8">
              we can work something out :3
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="border border-purple-900 p-6 bg-black/90 rounded-lg">
                <h2 className="text-2xl font-bold text-purple-300 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-purple-400 text-xl" />
                    <div>
                      <p className="text-purple-300 font-semibold">Email</p>
                      <p className="text-purple-200">wretchray@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaInstagram className="text-purple-400 text-xl" />
                    <div>
                      <p className="text-purple-300 font-semibold">Instagram</p>
                      <a 
                        href="https://instagram.com/raywretch" 
                        className="text-purple-200 hover:text-purple-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @raywretch
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaGithub className="text-purple-400 text-xl" />
                    <div>
                      <p className="text-purple-300 font-semibold">GitHub</p>
                      <a 
                        href="https://github.com/h4nds" 
                        className="text-purple-200 hover:text-purple-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        raywretch
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-purple-900 p-6 bg-black/90 rounded-lg">
                <h3 className="text-xl font-bold text-purple-300 mb-4">Services I Offer</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-purple-200">Album Artwork & Cover Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-purple-200">Social Media Graphics & Banners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-purple-200">Custom Digital Illustrations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-purple-200">Photography & Photo Manipulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-purple-200">Brand Identity Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-purple-200">Web Development & Design</span>
                  </div>
                </div>
              </div>

              <div className="border border-purple-900 p-6 bg-black/90 rounded-lg">
                <h3 className="text-xl font-bold text-purple-300 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button 
                    onClick={handleEmailClick}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 transition-colors relative"
                  >
                    <FaEnvelope className="text-xl" />
                    <span>Copy Email Address</span>
                    {showCopied && (
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-900 text-purple-200 px-2 py-1 rounded text-sm whitespace-nowrap">
                        Email copied!
                      </span>
                    )}
                  </button>
                  <a 
                    href="https://instagram.com/raywretch" 
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-xl" />
                    <span>Follow on Instagram</span>
                  </a>
                  <a 
                    href="https://github.com/h4nds" 
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-xl" />
                    <span>View GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
