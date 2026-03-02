"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FaEnvelope, FaEnvelopeOpen, FaArchive, FaTrash, FaSearch, FaFilter } from 'react-icons/fa';

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  ip: string;
  status: 'unread' | 'read' | 'archived';
  createdAt: string;
}

interface MessageResponse {
  success: boolean;
  messages: Message[];
  pagination: {
    total: number;
    limit: number;
    skip: number;
    hasMore: boolean;
  };
  counts: {
    total: number;
    unread: number;
  };
}

export default function MessagesAdmin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unread' | 'read' | 'archived'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [counts, setCounts] = useState({ total: 0, unread: 0 });

  useEffect(() => {
    // Check if already authenticated by verifying session cookie
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages();
    }
  }, [statusFilter]);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/verify');
      if (response.ok) {
        const data = await response.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          fetchMessages();
        }
      }
    } catch (err) {
      console.error('Auth check failed:', err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      // Login successful - cookie is set automatically
      setIsAuthenticated(true);
      setPassword(''); // Clear password from state
      fetchMessages();
    } catch (err) {
      setError('Network error. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setMessages([]);
      setCounts({ total: 0, unread: 0 });
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const fetchMessages = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Cookie is sent automatically by browser
      const response = await fetch(`/api/contact?status=${statusFilter}`, {
        credentials: 'include', // Important: include cookies
      });

      if (response.status === 401) {
        setIsAuthenticated(false);
        setError('Session expired. Please log in again.');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }

      const data: MessageResponse = await response.json();
      setMessages(data.messages);
      setCounts(data.counts);
    } catch (err) {
      setError('Failed to load messages. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateMessageStatus = async (id: string, newStatus: 'read' | 'archived') => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important: include cookies
        body: JSON.stringify({ status: newStatus })
      });

      if (response.status === 401) {
        setIsAuthenticated(false);
        setError('Session expired. Please log in again.');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to update message');
      }

      // Refresh messages
      fetchMessages();
    } catch (err) {
      console.error('Error updating message:', err);
      alert('Failed to update message status');
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) {
      return;
    }

    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
        credentials: 'include', // Important: include cookies
      });

      if (response.status === 401) {
        setIsAuthenticated(false);
        setError('Session expired. Please log in again.');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to delete message');
      }

      // Refresh messages
      fetchMessages();
    } catch (err) {
      console.error('Error deleting message:', err);
      alert('Failed to delete message');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredMessages = messages.filter(msg => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      msg.name.toLowerCase().includes(search) ||
      msg.email.toLowerCase().includes(search) ||
      msg.subject.toLowerCase().includes(search) ||
      msg.message.toLowerCase().includes(search)
    );
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-theme-page text-theme-text font-mono flex items-center justify-center">
        <div className="max-w-md w-full p-8">
          <div className="border border-theme-border p-8 bg-theme-card rounded-lg">
            <h1 className="text-3xl font-bold text-theme-text-heading mb-6 text-center">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-theme-text-heading mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-theme-accent-muted border border-theme-border rounded-lg text-theme-text focus:outline-none focus:border-theme-accent"
                  required
                  placeholder="Enter admin password"
                />
                <p className="text-xs text-theme-text-muted mt-2">
                  Set ADMIN_PASSWORD in .env.local for production
                </p>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-theme-accent-muted hover:bg-theme-card-hover text-theme-text rounded-lg transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-theme-page text-theme-text font-mono">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-theme-text-heading mb-2">Message Dashboard</h1>
              <p className="text-theme-text-muted">Manage client inquiries and commission requests</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-900/50 hover:bg-red-900/70 text-red-200 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border border-theme-border p-4 bg-theme-card rounded-lg">
              <div className="text-theme-text-muted text-sm mb-1">Total Messages</div>
              <div className="text-2xl font-bold text-theme-text-heading">{counts.total}</div>
            </div>
            <div className="border border-theme-border p-4 bg-theme-card rounded-lg">
              <div className="text-theme-text-muted text-sm mb-1">Unread</div>
              <div className="text-2xl font-bold text-yellow-400">{counts.unread}</div>
            </div>
            <div className="border border-theme-border p-4 bg-theme-card rounded-lg">
              <div className="text-theme-text-muted text-sm mb-1">Showing</div>
              <div className="text-2xl font-bold text-theme-text-heading">{filteredMessages.length}</div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <FaSearch className="absolute left-3 top-3 text-theme-text-muted" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-theme-accent-muted border border-theme-border rounded-lg text-theme-text placeholder-theme-text-muted focus:outline-none focus:border-theme-accent"
              />
            </div>
            <div className="relative">
              <FaFilter className="absolute left-3 top-3 text-theme-text-muted" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="w-full pl-10 pr-4 py-3 bg-theme-accent-muted border border-theme-border rounded-lg text-theme-text focus:outline-none focus:border-theme-accent appearance-none"
              >
                <option value="all">All Messages</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-200">
              {error}
            </div>
          )}

          {/* Messages List */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-accent mx-auto"></div>
              <p className="text-theme-text-muted mt-4">Loading messages...</p>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="border border-theme-border p-12 bg-theme-card rounded-lg text-center">
              <FaEnvelope className="text-6xl text-theme-text-muted mx-auto mb-4 opacity-50" />
              <p className="text-theme-text-heading text-lg">No messages found</p>
              <p className="text-theme-text-muted text-sm mt-2">
                {searchTerm ? 'Try adjusting your search' : 'All caught up!'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredMessages.map((message) => (
                <div
                  key={message._id}
                  className={`border rounded-lg p-6 bg-theme-card transition-all ${
                    message.status === 'unread'
                      ? 'border-yellow-600 bg-yellow-900/10'
                      : message.status === 'archived'
                      ? 'border-theme-border opacity-60'
                      : 'border-theme-border'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-theme-text-heading">{message.name}</h3>
                        {message.status === 'unread' && (
                          <span className="px-2 py-1 bg-yellow-600 text-yellow-100 text-xs rounded-full">
                            New
                          </span>
                        )}
                        {message.status === 'archived' && (
                          <span className="px-2 py-1 bg-theme-accent text-theme-text-heading text-xs rounded-full">
                            Archived
                          </span>
                        )}
                      </div>
                      <a
                        href={`mailto:${message.email}`}
                        className="text-theme-text-muted hover:text-theme-text-heading transition-colors"
                      >
                        {message.email}
                      </a>
                      <p className="text-theme-text-heading font-semibold mt-2">{message.subject}</p>
                      <p className="text-theme-text-muted text-sm mt-1">
                        {formatDate(message.timestamp)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {message.status === 'unread' && (
                        <button
                          onClick={() => updateMessageStatus(message._id, 'read')}
                          className="p-2 bg-theme-accent-muted hover:bg-theme-card-hover rounded-lg transition-colors"
                          title="Mark as read"
                        >
                          <FaEnvelopeOpen className="text-theme-text-heading" />
                        </button>
                      )}
                      {message.status !== 'archived' && (
                        <button
                          onClick={() => updateMessageStatus(message._id, 'archived')}
                          className="p-2 bg-theme-accent-muted hover:bg-theme-card-hover rounded-lg transition-colors"
                          title="Archive"
                        >
                          <FaArchive className="text-theme-text-heading" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteMessage(message._id)}
                        className="p-2 bg-red-900/50 hover:bg-red-900/70 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <FaTrash className="text-red-300" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-theme-accent-muted rounded-lg">
                    <p className="text-theme-text whitespace-pre-wrap">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
