import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#070b19] text-white flex flex-col items-center justify-center p-6 selection:bg-emerald-500 selection:text-black">
      {/* Hero Section */}
      <div className="max-w-3xl w-full text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
        >
          Booking Experience
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-8"
        >
          Stop calling around. Browse available slots, split payments with friends, and lock your pitch instantly. Join the early access squad.
        </motion.p>

        {/* Waitlist Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-900/60 border border-slate-800/80 p-4 sm:p-6 rounded-2xl max-w-md mx-auto shadow-2xl backdrop-blur-md"
        >
          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 text-sm transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-emerald-500/20"
            >
              Join Waitlist
            </motion.button>
          </form>
          <p className="text-xs text-slate-500 mt-3 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
            🔒 No spam. Only major product updates and early discounts.
          </p>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl w-full"
      >
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl backdrop-blur-sm transition-all"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-bold">⚡</div>
          <h3 className="font-semibold text-lg mb-1 text-slate-200">Priority Access</h3>
          <p className="text-sm text-slate-400">Get notified 48 hours before slots open to the public.</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl backdrop-blur-sm transition-all"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-bold">📅</div>
          <h3 className="font-semibold text-lg mb-1 text-slate-200">Instant Booking</h3>
          <p className="text-sm text-slate-400">No more endless calls. Lock your favorite pitch in seconds.</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl backdrop-blur-sm transition-all"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-bold">👥</div>
          <h3 className="font-semibold text-lg mb-1 text-slate-200">Easy Split-Pay</h3>
          <p className="text-sm text-slate-400">Divide the pitch cost seamlessly with your teammates.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}