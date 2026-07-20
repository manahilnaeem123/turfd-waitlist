import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        required
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-2 rounded-lg transition-colors"
      >
        Join Waitlist
      </motion.button>
    </div>
  );
}