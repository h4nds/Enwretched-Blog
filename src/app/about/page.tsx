"use client";

import Header from '@/components/layout/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      
      <main className="container mx-auto p-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-purple-300 mb-4">About Me</h1>
            <p className="text-purple-200">I like to explore many feilds of Art and Design ranging from mediums in Grapic Desgin to Full Stack Web Development, but to assign a label, I am a Student, aspiring Web Desginer, and Art Director.</p>
          </div>
          
          <section className="mb-8">
            <p className="text-purple-200 mb-4">
              I am a multidisciplinary artist exploring the intersections of digital art, photography, and mixed media. 
              My work often delves into surreal landscapes, experimental compositions, and the relationship between 
              nature and digital manipulation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl text-purple-300">Digital Art & Photography</h3>
                <p className="text-purple-200">
                  Specializing in digital manipulation, photography, and mixed media compositions. 
                  My work ranges from surreal landscapes to experimental digital art.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-purple-300">Client Work</h3>
                <p className="text-purple-200">
                  Experience in creating album artwork, promotional materials, and custom digital art 
                  for musicians and creative projects.
                </p>
              </div>
              
            </div>
          </section>

          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Contact</h2>
            <p className="text-purple-200 mb-4">
              I&apos;m always interested in new collaborations and creative projects. 
              Feel free to reach out for commissions, exhibitions, or just to say hello.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:your.email@example.com" 
                className="px-4 py-2 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 transition-colors"
              >
                Email
              </a>
              <a 
                href="https://instagram.com/your-handle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 transition-colors"
              >
                Instagram
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-purple-900 p-4 mt-8 bg-black/90">
        <div className="container mx-auto text-center">
          <p>©Ray Wretch 2024 - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
} 