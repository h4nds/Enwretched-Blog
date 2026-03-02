"use client";

import { useState } from 'react';
import { FaEnvelope, FaUser, FaComment, FaPaperPlane } from 'react-icons/fa';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
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
    <div className="border border-theme-border p-8 bg-theme-card rounded-lg">
      <h2 className="text-2xl font-bold text-theme-text-heading mb-8 text-center">Send Me a Message</h2>
      
      {submitStatus.type && (
        <div className={`mb-4 p-3 rounded-lg text-center ${
          submitStatus.type === 'success' 
            ? 'bg-green-900/30 border border-green-700 text-green-200' 
            : 'bg-red-900/30 border border-red-700 text-red-200'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-theme-text-muted" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 bg-theme-accent-muted border border-theme-border rounded-lg text-theme-text placeholder-theme-text-muted focus:outline-none focus:border-theme-accent transition-colors"
            />
          </div>
          
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-theme-text-muted" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 bg-theme-accent-muted border border-theme-border rounded-lg text-theme-text placeholder-theme-text-muted focus:outline-none focus:border-theme-accent transition-colors"
            />
          </div>
        </div>

        <div className="relative">
          <FaComment className="absolute left-3 top-3 text-theme-text-muted" />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject (optional)"
            className="w-full pl-10 pr-4 py-3 bg-theme-accent-muted border border-theme-border rounded-lg text-theme-text placeholder-theme-text-muted focus:outline-none focus:border-theme-accent transition-colors"
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-theme-accent-muted border border-theme-border rounded-lg text-theme-text placeholder-theme-text-muted focus:outline-none focus:border-theme-accent transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-theme-accent-muted hover:bg-theme-card-hover disabled:bg-theme-accent-muted disabled:cursor-not-allowed text-theme-text rounded-lg transition-colors duration-200 mt-4"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-theme-border"></div>
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
