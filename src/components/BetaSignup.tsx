'use client';

import React, { useState, useEffect } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

interface BetaSignupProps {
  variant?: 'home' | 'beta';
}

const BetaSignup = ({ variant = 'beta' }: BetaSignupProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      setError('Missing Supabase configuration. Please check your environment variables.');
      return;
    }

    const client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    setSupabase(client);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setError('Database connection not initialized');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const { error } = await supabase
        .from('beta_signups')
        .insert([{ 
          email, 
          name, 
          role,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;
      setSuccess(true);
      setEmail('');
      setName('');
      setRole('');
    } catch (error) {
      console.error('Signup error:', error);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!supabase) {
    return (
      <div className="w-full max-w-md mx-auto text-center text-gray-300">
        {error || 'Loading...'}
      </div>
    );
  }

  const containerClasses = variant === 'home' 
    ? "w-full max-w-md mx-auto bg-white rounded-xl p-8 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-shadow duration-300"
    : "w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-lg";

  const inputClasses = variant === 'home'
    ? "w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
    : "w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors";

  return (
    <div className={containerClasses}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join the Beta</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClasses}
            placeholder="your@email.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className={inputClasses}
          >
            <option value="" disabled>Select your role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="product_manager">Product Manager</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isSubmitting ? 'Submitting...' : 'Join Beta'}
        </button>
        {error && (
          <div className="text-red-600 text-sm text-center bg-red-50/80 p-3 rounded-lg">{error}</div>
        )}
        {success && (
          <div className="text-green-600 text-sm text-center bg-green-50/80 p-3 rounded-lg">
            Thanks for signing up! We&apos;ll be in touch soon.
          </div>
        )}
      </form>
    </div>
  );
};

export default BetaSignup; 