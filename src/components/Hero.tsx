import { motion } from "motion/react";
import { Bookmark } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-auto md:min-h-screen pt-14 md:pt-24 pb-8 md:pb-0 flex items-center overflow-hidden bg-[radial-gradient(circle_at_top_right,#F9F8F6_0%,#D9CFC7_100%)]">
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('scan')?.scrollIntoView({ behavior: 'smooth' })}
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
