import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bookmark, Download, Sparkles, Cloud, Zap, X, PartyPopper, Star } from "lucide-react";
import { Link } from "react-router-dom";

function Confetti() {
  const pieces = useMemo(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      color: ["#AA7137", "#D4A574", "#C4956A", "#F5D6A8", "#E8C4A0", "#FFD700", "#FF6B6B", "#4ECDC4"][Math.floor(Math.random() * 8)],
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
      shape: Math.random() > 0.5 ? "circle" : "rect",
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            opacity: 1,
            x: `${p.x}vw`,
            y: -20,
            rotate: 0,
            scale: 1,
          }}
          animate={{
            y: "110vh",
            rotate: 720 + p.rotation,
            opacity: [1, 1, 0.8, 0],
            scale: [1, 1.2, 0.8, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute"
          style={{
            width: p.size,
            height: p.shape === "circle" ? p.size : p.size * 0.6,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            background: p.color,
            boxShadow: `0 0 6px ${p.color}66`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCelebration(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-auto md:min-h-screen pt-14 md:pt-24 pb-8 md:pb-0 flex items-center overflow-hidden bg-[radial-gradient(circle_at_top_right,#F9F8F6_0%,#D9CFC7_100%)]">
      {/* v2.0.0 Celebration Modal */}
      <AnimatePresence>
        {showCelebration && (
          <>
            <Confetti />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowCelebration(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ type: "spring", stiffness: 250, damping: 18, delay: 0.1 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg"
              >
                {/* Glow rings */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-4 rounded-3xl bg-[#AA7137]/20 blur-2xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.35, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -inset-8 rounded-[40px] bg-[#D4A574]/15 blur-3xl"
                />

                {/* Card */}
                <div className="relative bg-gradient-to-b from-[#FFFBF5] to-[#F5EDE4] rounded-3xl shadow-2xl border border-[#E8DDD0] overflow-hidden">
                  {/* Top decorative bar */}
                  <div className="h-2 bg-gradient-to-r from-[#AA7137] via-[#D4A574] to-[#C4956A]" />

                  {/* Sparkle corner decorations */}
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute top-4 left-4 text-[#FFD700]/30"
                  >
                    <Star size={24} fill="currentColor" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-4 right-4 text-[#FFD700]/20"
                  >
                    <Star size={20} fill="currentColor" />
                  </motion.div>

                  <button
                    onClick={() => setShowCelebration(false)}
                    className="absolute top-4 right-4 z-10 bg-[#E8DDD0]/50 hover:bg-[#E8DDD0] rounded-full p-1.5 transition-colors"
                  >
                    <X size={16} className="text-[#6B5B4E]" />
                  </button>

                  <div className="px-6 md:px-10 py-8 md:py-10 text-center">
                    {/* Party icon */}
                    <motion.div
                      animate={{ y: [0, -6, 0], rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-flex items-center justify-center mb-4"
                    >
                      <div className="bg-gradient-to-br from-[#AA7137] to-[#D4A574] p-3 rounded-full shadow-lg">
                        <PartyPopper size={28} className="text-white" />
                      </div>
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                      className="inline-flex items-center gap-1.5 bg-[#AA7137]/10 border border-[#AA7137]/20 rounded-full px-4 py-1.5 mb-4"
                    >
                      <Sparkles size={14} className="text-[#AA7137]" />
                      <span className="text-[#AA7137] font-mono text-[11px] font-bold tracking-widest uppercase">Brand New Release</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="font-serif text-3xl md:text-4xl font-bold text-[#2A170F] leading-tight mb-1"
                    >
                      Words Nest
                    </motion.h2>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], textShadow: ["0 0 0px rgba(170,113,55,0)", "0 0 12px rgba(170,113,55,0.4)", "0 0 0px rgba(170,113,55,0)"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-3xl md:text-5xl font-serif font-bold bg-gradient-to-r from-[#AA7137] via-[#D4A574] to-[#AA7137] bg-clip-text text-transparent mb-5"
                    >
                      2.0.0
                    </motion.div>

                    {/* Feature pills */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex flex-wrap justify-center gap-2 mb-6"
                    >
                      {[
                        { icon: Cloud, label: "Real-time Cloud Sync" },
                        { icon: Zap, label: "Redesigned UI" },
                        { icon: Bookmark, label: "Smarter Learning" },
                      ].map((f, i) => (
                        <motion.span
                          key={f.label}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
                          className="inline-flex items-center gap-1.5 bg-[#F5EDE4] border border-[#E8DDD0] rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#6B5B4E]"
                        >
                          <f.icon size={12} className="text-[#AA7137]" />
                          {f.label}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-xs md:text-sm text-[#897365] mb-6 max-w-xs mx-auto leading-relaxed"
                    >
                      Upgrade now to experience the next generation of vocabulary mastery.
                    </motion.p>

                    {/* Download button */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <a href="/wordsnest-v2.0.0.apk" download>
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(170,113,55,0.3)" }}
                          whileTap={{ scale: 0.95 }}
                          animate={{ boxShadow: ["0 4px 14px rgba(170,113,55,0.2)", "0 4px 20px rgba(170,113,55,0.4)", "0 4px 14px rgba(170,113,55,0.2)"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="bg-gradient-to-r from-[#AA7137] to-[#C4956A] text-white px-8 py-3.5 rounded-full font-mono text-sm font-bold flex items-center gap-2.5 mx-auto shadow-lg hover:shadow-xl transition-all"
                        >
                          <Download size={16} />
                          Download v2.0.0 Now
                          <Sparkles size={14} className="text-yellow-200" />
                        </motion.button>
                      </a>
                      <p className="text-[10px] text-[#BFA090] mt-3 font-mono">Free upgrade · Android 7+</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Organic Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-container/30 rounded-full blur-[60px] md:blur-[80px] -top-10 -right-10 md:-top-20 md:-right-20 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -15, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-secondary-container/30 rounded-full blur-[60px] md:blur-[80px] -bottom-10 -left-10 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-3 md:space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-start mb-2"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHsLS-maEFpdMrUFD35cpAcuJvdFuiT1Sk4kgqRhjqH0I_NGb0P9pXoG9OYto6R4fKHBQ0Gg1b7CFuR981IsgXZRPtfXQYz5Zva-C8OZbADhE_NDGQnG70vshLxSnME5nWg1wW9XMBo9SWnIaHak_3lc_8u0o9JW3pGJSqV2apTklQyJfASIzEU9miZFkp6ohUfenwVWp_kAwX_dBzcYLof4UE41XmtJb5As4j8o0RPcCCKRxWOXoh7D2ahQdS9MOJHFngddl29nvG" 
              alt="Words Nest Logo" 
              className="h-16 md:h-24 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105 duration-500"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-2xl md:text-5xl lg:text-7xl leading-tight text-text-primary"
          >
            Where Words<br />
            Find Their Home
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-base lg:text-lg text-text-secondary max-w-[280px] md:max-w-sm mx-auto md:mx-0"
          >
            AI-powered IELTS mastery. Experience word meanings and contexts like never before.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-secondary text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-mono text-xs md:text-sm font-bold flex flex-col items-center justify-center gap-0.5 hover:shadow-lg transition-all shadow-md group min-w-[160px] md:min-w-[200px]"
            >
              <div className="flex items-center gap-2">
                Start Journey
                <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <Bookmark size={14} className="fill-white" />
                </div>
              </div>
              <span className="text-[8px] md:text-[10px] opacity-70 font-normal">Begin Your IELTS Mastery</span>
            </motion.button>
            <Link to="/demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-6 md:px-10 py-3 md:py-4 rounded-full font-mono text-xs md:text-sm font-bold flex flex-col items-center justify-center gap-0.5 hover:bg-primary/5 transition-all min-w-[160px] md:min-w-[200px]"
              >
                <div className="flex items-center gap-2">
                  Watch Demo
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="opacity-80"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-[8px] md:text-[10px] opacity-70 font-normal">See the Scanner in Action</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center items-center mt-8 md:mt-0"
        >
          {/* Android Mockup */}
          <div className="relative w-[210px] md:w-[280px] h-[420px] md:h-[560px] bg-neutral-900 rounded-[32px] md:rounded-[40px] border-[6px] md:border-[8px] border-neutral-900 shadow-2xl overflow-hidden z-20">
            <div className="absolute top-0 w-full h-8 bg-neutral-900 flex justify-center items-center z-30">
              <div className="w-20 h-1 bg-neutral-700 rounded-full" />
            </div>
            
            <div className="mt-8 p-3 md:p-4 h-full bg-surface-bright">
              <div className="bg-white rounded-2xl p-4 md:p-6 card-shadow border border-divider">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <span className="font-mono text-[9px] md:text-[10px] bg-tertiary-container/30 px-2.5 py-0.5 rounded-full text-on-tertiary-container font-semibold uppercase tracking-wider">Academic</span>
                  <Bookmark className="text-primary" size={16} />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-0.5">Eloquent</h3>
                <p className="font-mono text-[11px] md:text-sm italic text-text-secondary mb-3 md:mb-4">/ˈeləkwənt/</p>
                <p className="text-[12px] md:text-sm text-text-primary leading-relaxed opacity-90">Fluent or persuasive in speaking or writing.</p>
                
                <div className="mt-5 pt-5 md:mt-6 md:pt-6 border-t border-divider">
                  <p className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-text-secondary mb-1.5">IELTS Example</p>
                  <p className="text-[11px] md:text-sm italic opacity-80 leading-relaxed">"The speaker delivered an <span className="text-secondary font-bold">eloquent</span> argument for protection."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Words Decor */}
          <div className="absolute inset-0 pointer-events-none z-30 scale-75 md:scale-100">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] -left-6 md:-left-12 bg-white/95 px-4 md:px-6 py-2 md:py-2.5 rounded-full shadow-lg border border-divider text-xs md:text-sm text-primary font-bold"
            >
              Pristine
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[35%] -left-4 md:-left-8 bg-white/95 px-4 md:px-6 py-2 md:py-2.5 rounded-full shadow-lg border border-divider text-xs md:text-sm text-primary font-bold"
            >
              Vibrant
            </motion.div>
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[40%] -right-8 md:-right-16 bg-white/95 px-4 md:px-6 py-2 md:py-2.5 rounded-full shadow-lg border border-divider text-xs md:text-sm text-primary font-bold"
            >
              Ambiguous
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
