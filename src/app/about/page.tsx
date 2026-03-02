"use client";

import Header from '@/components/layout/Header';
import { FaInstagram, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function About() {
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('wretchray@gmail.com');
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000); // Hide tooltip after 2 seconds
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="min-h-screen bg-theme-page text-theme-text font-mono">
      <Header />
      
      <main className="container mx-auto p-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 border border-theme-border p-6 rounded-lg bg-theme-card hover:bg-theme-card-hover transition-colors text-center">
            <h1 className="text-3xl font-bold text-theme-text-heading mb-4">About Me</h1>
            <p className="text-theme-text">I like to explore many fields of Art and Design ranging from mediums in Graphic Design to Full Stack Web Development, but to assign a label, I am a Student, aspiring Web Designer, and Art Director.</p>
          </div>
          
          <section className="mb-8 border border-theme-border p-6 rounded-lg bg-theme-card hover:bg-theme-card-hover transition-colors text-center">
            <p className="text-theme-text mb-4">
              I am a multidisciplinary artist exploring the intersections of digital art, photography, and mixed media. 
              My work often delves into surreal landscapes, experimental compositions, and the relationship between 
              nature and digital manipulation.
            </p>
          </section>

          <section className="mb-8 border border-theme-border p-6 rounded-lg bg-theme-card hover:bg-theme-card-hover transition-colors text-center">
            <h2 className="text-2xl font-semibold text-theme-text-heading mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="hover:bg-theme-accent-muted p-4 rounded-lg transition-colors">
                <h3 className="text-xl text-theme-text-heading">Digital Art & Photography</h3>
                <p className="text-theme-text">
                  Specializing in digital manipulation, photography, and mixed media compositions. 
                  My work ranges from surreal landscapes to experimental digital art.
                </p>
              </div>
              <div className="hover:bg-theme-accent-muted p-4 rounded-lg transition-colors">
                <h3 className="text-xl text-theme-text-heading">Client Work</h3>
                <p className="text-theme-text mb-4">
                  Experience in creating album artwork, promotional materials, and custom digital art 
                  for musicians and creative projects.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="border-t border-theme-border/30 pt-3">
                    <h4 className="text-theme-text-heading font-semibold mb-2">Services Offered:</h4>
                    <ul className="space-y-2">
                      <li>• Album Artwork & Cover Design</li>
                      <li>• Social Media Graphics & Banners</li>
                      <li>• Custom Digital Illustrations</li>
                      <li>• Photography & Photo Manipulation</li>
                      <li>• Brand Identity Design</li>
                    </ul>
                  </div>
                  <div className="border-t border-theme-border/30 pt-3">
                    <h4 className="text-theme-text-heading font-semibold mb-2">What to Expect:</h4>
                    <ul className="space-y-2">
                      <li>• Personalized Consultation</li>
                      <li>• Multiple Design Revisions</li>
                      <li>• High-Resolution Final Files</li>
                      <li>• Quick Turnaround Times</li>
                      <li>• Professional Communication</li>
                    </ul>
                  </div>
                  <div className="border-t border-theme-border/30 pt-3">
                    <h4 className="text-theme-text-heading font-semibold mb-2">Pricing:</h4>
                    <p className="text-theme-text">
                      Custom quotes based on project scope. Will be given upon Commision pitch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8 border border-theme-border p-6 rounded-lg bg-theme-card hover:bg-theme-card-hover transition-colors text-center">
            <h2 className="text-2xl font-semibold text-theme-text-heading mb-4">I made this website with...</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-theme-accent-muted transition-colors">
                <span className="text-3xl mb-2"><FaGithub /></span>
                <span className="font-semibold">Next.js</span>
                <span className="text-xs text-theme-text-muted mt-1">React framework for SSR & SSG</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-theme-accent-muted transition-colors">
                <span className="text-3xl mb-2"><FaGithub /></span>
                <span className="font-semibold">React</span>
                <span className="text-xs text-theme-text-muted mt-1">UI library for building interfaces</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-theme-accent-muted transition-colors">
                <span className="text-3xl mb-2">TS</span>
                <span className="font-semibold">TypeScript</span>
                <span className="text-xs text-theme-text-muted mt-1">Typed JavaScript for safer code</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-theme-accent-muted transition-colors">
                <span className="text-3xl mb-2">🎨</span>
                <span className="font-semibold">Tailwind CSS</span>
                <span className="text-xs text-theme-text-muted mt-1">Utility-first CSS framework</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-theme-accent-muted transition-colors">
                <span className="text-3xl mb-2">🗄️</span>
                <span className="font-semibold">MongoDB</span>
                <span className="text-xs text-theme-text-muted mt-1">NoSQL database for content</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-theme-accent-muted transition-colors">
                <span className="text-3xl mb-2">▲</span>
                <span className="font-semibold">Vercel</span>
                <span className="text-xs text-theme-text-muted mt-1">Deployment & hosting platform</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-theme-accent-muted transition-colors">
                <span className="text-3xl mb-2">🛠️</span>
                <span className="font-semibold">ESLint & Prettier</span>
                <span className="text-xs text-theme-text-muted mt-1">Code quality & formatting tools</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-theme-accent-muted transition-colors">
                <span className="text-3xl mb-2">🔗</span>
                <span className="font-semibold">Other Tools</span>
                <span className="text-xs text-theme-text-muted mt-1">PostCSS, React Icons, more</span>
              </div>
            </div>
          </section>

          <section id="contact" className="mb-8 border border-theme-border p-6 rounded-lg bg-theme-card hover:bg-theme-card-hover transition-colors text-center">
            <h2 className="text-2xl font-semibold text-theme-text-heading mb-4">Contact</h2>
            <p className="text-theme-text mb-6">
              I&apos;m always interested in new collaborations and creative projects. 
              Feel free to reach out for commissions, exhibitions, or just to say hello.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button 
                onClick={handleEmailClick}
                className="relative flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-theme-accent-muted hover:bg-theme-card-hover transition-colors"
              >
                <FaEnvelope className="text-xl" />
                <span>Email</span>
                {showCopied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-theme-accent-muted text-theme-text px-2 py-1 rounded text-sm whitespace-nowrap">
                    Email copied!
                  </span>
                )}
              </button>
              <a 
                href="https://instagram.com/raywretch" 
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-theme-accent-muted hover:bg-theme-card-hover transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://github.com/raywretch" 
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-theme-accent-muted hover:bg-theme-card-hover transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/raywretch" 
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-theme-accent-muted hover:bg-theme-card-hover transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-theme-border p-4 mt-8 bg-theme-card text-center">
        <div className="container mx-auto">
          <p>©Ray Wretch 2024 - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
} 