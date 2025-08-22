import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // To Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('nav') && !target.closest('button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="border-b border-purple-900 bg-black sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center relative">
          <Logo />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-purple-200 hover:text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-purple-100 transition-colors duration-200">Home</Link>
            <Link href="/gallery" className="hover:text-purple-100 transition-colors duration-200">Gallery</Link>
            <Link href="/blog" className="hover:text-purple-100 transition-colors duration-200">Blog</Link>
            <Link href="/forum" className="hover:text-purple-100 transition-colors duration-200">Forum</Link>
            <Link href="/about" className="hover:text-purple-100 transition-colors duration-200">About</Link>
            <Link href="/contact" className="hover:text-purple-100 transition-colors duration-200">Contact</Link>
          </nav>

          {/* Mobile Navigation */}
          <nav
            className={`${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            } md:hidden absolute top-full right-0 mt-2 w-56 bg-black border border-purple-900 rounded-lg shadow-lg transition-all duration-300 ease-in-out`}
          >
            <div className="py-2">
              <Link 
                href="/" 
                className="block px-4 py-3 text-purple-200 hover:bg-purple-900/30 hover:text-purple-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/gallery" 
                className="block px-4 py-3 text-purple-200 hover:bg-purple-900/30 hover:text-purple-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/blog" 
                className="block px-4 py-3 text-purple-200 hover:bg-purple-900/30 hover:text-purple-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/forum" 
                className="block px-4 py-3 text-purple-200 hover:bg-purple-900/30 hover:text-purple-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Forum
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-3 text-purple-200 hover:bg-purple-900/30 hover:text-purple-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-purple-200 hover:bg-purple-900/30 hover:text-purple-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 