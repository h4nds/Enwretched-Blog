"use client";

import { useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        });
        setEmail('');
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to subscribe. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border border-theme-border p-6 bg-theme-card rounded-lg text-center">
      <h3 className="text-xl font-bold text-theme-text-heading mb-4">Stay in the Loop</h3>
      <p className="text-theme-text mb-4">
        Get notified when the forum launches and receive updates about new features.
      </p>
      
      {submitStatus.type && (
        <div className={`mb-4 p-3 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-900/30 border border-green-700 text-green-200' 
            : 'bg-red-900/30 border border-red-700 text-red-200'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div className="relative flex-1">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-theme-text-muted" />
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full pl-10 pr-4 py-2 bg-theme-accent-muted border border-theme-border rounded-lg text-theme-text placeholder-theme-text-muted focus:outline-none focus:border-theme-accent"
          />
        </div>
        <button 
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 px-6 py-2 bg-theme-accent-muted hover:bg-theme-card-hover disabled:bg-theme-accent-muted disabled:cursor-not-allowed text-theme-text rounded-lg transition-colors duration-200"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-theme-border"></div>
              Subscribing...
            </>
          ) : (
            <>
              <FaPaperPlane />
              Subscribe
            </>
          )}
        </button>
      </form>
      <p className="text-xs text-theme-text-muted mt-2">
         Unsubscribe at any time, its whatever.
      </p>
    </div>
  );
}
