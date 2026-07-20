import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Calendar, Users } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  // Features Data Array
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      title: "Priority Access",
      desc: "Get notified 48 hours before slots open to the public."
    },
    {
      icon: <Calendar className="w-5 h-5 text-emerald-400" />,
      title: "Instant Booking",
      desc: "No more endless calls. Lock your favorite pitch in seconds."
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: "Easy Split-Pay",
      desc: "Divide the pitch cost seamlessly with your teammates."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4 py-12 overflow-hidden relative">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-3xl w-full text-center z-10 space-y-12">
        
        {/* Live Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-sm font-medium text-emerald-400"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Turf'd Waitlist is Live
        </motion.div>

        {/* Hero Section Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Your Premium Turf Booking Experience
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto">
            Stop calling around. Browse available slots, split payments with friends, and lock your pitch instantly. Join the early access squad.
          </p>
        </div>

        {/* Interactive Waitlist Form Section */}
        <div className="max-w-md w-full mx-auto bg-slate-900/40 border border-slate-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl min-h-[140px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all text-white"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-3 rounded-xl text-sm transition-colors shadow-lg shadow-emerald-500/20 whitespace-nowrap"
                  >
                    Join Waitlist
                  </motion.button>
                </div>
                <p className="text-xs text-slate-500 text-left px-1">
                  🔒 No spam. Only major product updates and early discounts.
                </p>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center space-y-2 py-2"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 mb-1">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white">You're on the list!</h3>
                <p className="text-sm text-slate-400">
                  Thanks for joining. We'll ping you as soon as early access slots open up.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Features Grid Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-900"
        >
          {features.map((item, index) => (
            <div key={index} className="text-left p-5 rounded-2xl bg-slate-900/20 border border-slate-900 hover:border-slate-800 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/10">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-white text-base">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default App;