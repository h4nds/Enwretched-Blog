"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/features/ContactForm';
import { FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';
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
    <div className="min-h-screen bg-theme-page text-theme-text font-mono">
      <Header />
      
      <main className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font- text-theme-text-heading mb-6">
              Commission Enquiry
            </h1>
            <p className="text-xl md:text-2xl text-theme-text mb-8">
              we can work something out :3
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="border border-theme-border p-6 bg-theme-card rounded-lg">
                <h2 className="text-2xl font-bold text-theme-text-heading mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-theme-text-muted text-xl" />
                    <div>
                      <p className="text-theme-text-heading font-semibold">Email</p>
                      <p className="text-theme-text">wretchray@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaInstagram className="text-theme-text-muted text-xl" />
                    <div>
                      <p className="text-theme-text-heading font-semibold">Instagram</p>
                      <a 
                        href="https://instagram.com/raywretch" 
                        className="text-theme-text hover:text-theme-text-heading transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @raywretch
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaGithub className="text-theme-text-muted text-xl" />
                    <div>
                      <p className="text-theme-text-heading font-semibold">GitHub</p>
                      <a 
                        href="https://github.com/h4nds" 
                        className="text-theme-text hover:text-theme-text-heading transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        h4nds
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-theme-border p-6 bg-theme-card rounded-lg">
                <h3 className="text-xl font-bold text-theme-text-heading mb-4">Services I Offer</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-theme-accent rounded-full"></span>
                    <span className="text-theme-text">Album Artwork & Cover Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-theme-accent rounded-full"></span>
                    <span className="text-theme-text">Social Media Graphics & Banners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-theme-accent rounded-full"></span>
                    <span className="text-theme-text">Custom Digital Illustrations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-theme-accent rounded-full"></span>
                    <span className="text-theme-text">Photography & Photo Manipulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-theme-accent rounded-full"></span>
                    <span className="text-theme-text">Brand Identity Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-theme-accent rounded-full"></span>
                    <span className="text-theme-text">Web Development & Design</span>
                  </div>
                </div>
              </div>

              <div className="border border-theme-border p-6 bg-theme-card rounded-lg">
                <h3 className="text-xl font-bold text-theme-text-heading mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button 
                    onClick={handleEmailClick}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-theme-accent-muted hover:bg-theme-card-hover transition-colors relative"
                  >
                    <FaEnvelope className="text-xl" />
                    <span>Copy Email Address</span>
                    {showCopied && (
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-theme-accent-muted text-theme-text px-2 py-1 rounded text-sm whitespace-nowrap">
                        Email copied!
                      </span>
                    )}
                  </button>
                  <a 
                    href="https://instagram.com/raywretch" 
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-theme-accent-muted hover:bg-theme-card-hover transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-xl" />
                    <span>Follow on Instagram</span>
                  </a>
                  <a 
                    href="https://github.com/h4nds" 
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-theme-accent-muted hover:bg-theme-card-hover transition-colors"
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
              <p className="text-sm text-theme-text-muted mb-4 leading-relaxed">
                For commissions, include project type, timeline or deadline, budget range, and any
                reference links or inspiration so we can respond clearly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
