import { motion } from "motion/react";

export default function DemoPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#F9F8F6_0%,#D9CFC7_100%)]">
      {/* Royal Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner Ornaments */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary/20">
            <path d="M0 0 Q50 50 100 0" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0 20 Q50 70 100 20" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="10" r="4" fill="currentColor" opacity="0.3" />
          </svg>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 rotate-90"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary/20">
            <path d="M0 0 Q50 50 100 0" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0 20 Q50 70 100 20" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="10" r="4" fill="currentColor" opacity="0.3" />
          </svg>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 -rotate-90"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary/20">
            <path d="M0 0 Q50 50 100 0" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0 20 Q50 70 100 20" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="10" r="4" fill="currentColor" opacity="0.3" />
          </svg>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 rotate-180"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary/20">
            <path d="M0 0 Q50 50 100 0" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0 20 Q50 70 100 20" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="10" r="4" fill="currentColor" opacity="0.3" />
          </svg>
        </motion.div>

        {/* Decorative Lines */}
        <motion.div 
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-0 w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
        <motion.div 
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-0 w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />

        {/* Floating Royal Elements */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] text-primary/15"
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-32 right-[15%] text-secondary/15"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-text-primary mb-4">
            App Demo
          </h1>
          <p className="text-sm md:text-lg text-text-secondary max-w-md mx-auto">
            See Words Nest in action
          </p>
        </motion.div>

        {/* Phone Mockup - 9:16 Ratio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Phone Frame */}
          <div className="w-[280px] md:w-[320px] h-[497px] md:h-[569px] bg-neutral-900 rounded-[40px] md:rounded-[48px] border-[8px] md:border-[10px] border-neutral-800 shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-28 h-6 bg-neutral-900 rounded-b-2xl z-30" />
            
            {/* Screen Content */}
            <div className="w-full h-full bg-surface-bright flex items-center justify-center">
              {/* YouTube Embed Placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-wV2257kJ98?autoplay=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=-wV2257kJ98"
                  title="Words Nest Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Phone Shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-4 bg-black/20 blur-xl rounded-[100%]" />
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xs md:text-sm text-text-secondary">
            Tap the video to play • Swipe to navigate
          </p>
        </motion.div>
      </div>
    </div>
  );
}