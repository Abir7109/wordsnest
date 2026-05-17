import { motion, AnimatePresence } from "motion/react";
import { QrCode, CheckCircle2, Check } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScanDemo() {
  const [isToastVisible, setIsToastVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsToastVisible(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="scan" className="py-10 md:py-20 bg-surface-bright border-y border-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="order-2 md:order-1 space-y-3 md:space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 md:gap-2 bg-secondary-container/40 text-on-secondary-container px-2.5 md:px-4 py-1 md:py-1.5 rounded-full"
          >
            <QrCode size={12} className="md:w-4 md:h-4" />
            <span className="font-mono text-[9px] md:text-xs font-bold uppercase tracking-widest">Ocular Scan Technology</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-4xl font-bold leading-tight"
          >
            Scan any text, <br className="hidden md:block" />
            understand instantly.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-text-secondary"
          >
            Reading a difficult academic paper? Don't stop to search. Just point your camera. Our high-fidelity OCR identifies academic tokens and reveals their "Nest" identity in milliseconds.
          </motion.p>
          
          <ul className="space-y-3 md:space-y-4">
            {[
              "Identifies 12,000+ IELTS-specific keywords",
              "Low-light optimized scanning",
              "Contextual meaning extraction"
            ].map((text, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 md:gap-4 text-text-primary"
              >
                <CheckCircle2 size={20} className="text-primary md:w-6 md:h-6" />
                <span className="font-medium text-sm md:text-base">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-[210px] md:w-[300px] h-[380px] md:min-h-[550px] bg-neutral-900 rounded-[28px] md:rounded-[44px] overflow-hidden border-[4px] md:border-8 border-neutral-900 shadow-2xl">
            <div className="absolute inset-0 bg-neutral-800">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgbzc4pgehMSlsbbCe66uUhEn7v2PFhfUm0v9ghMjNhIm-fczo2VgoX-QAhCyjh4Io2VvJJngv66JgC7uBRFyTULeld-8V2jqIMeo80RInSUbh8-8wpfBXeJULZKK6V92Ef8SDMI80sWeipmkp0A0oRqC8emJk6ULN7Ro4a8rSSEfaDqVappLBYQBwsmp-tOk4PFPkExPLKSEm9EGwV7TiJDrETqtNboxUkM5ZucvdQAKggws2ZQqGQ73vCqM4c9BHXiKHL1Pjnn3Z" 
                alt="Scanning" 
                className="w-full h-full object-cover opacity-60"
              />
              
              {/* Scan Line Animation */}
              <div className="absolute inset-x-6 md:inset-x-8 top-1/2 -translate-y-1/2 h-32 md:h-40 border-2 border-primary/40 rounded-2xl shadow-[0_0_30px_rgba(107,92,71,0.2)] pointer-events-none overflow-hidden">
                <div className="absolute top-0 w-full h-0.5 bg-primary animate-scan" />
              </div>

              {/* Scan Toast UI */}
              <AnimatePresence>
                {isToastVisible && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 10, x: "-50%" }}
                    className="absolute bottom-6 md:bottom-10 left-1/2 w-[85%] bg-white/95 backdrop-blur-md p-2.5 md:p-4 rounded-lg md:rounded-2xl border border-primary flex items-center gap-2.5 md:gap-4 card-shadow"
                  >
                    <div className="w-7 h-7 md:w-10 md:h-10 bg-tertiary-container/20 rounded-md md:rounded-xl flex items-center justify-center text-tertiary font-bold">
                       <Check size={14} className="md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[10px] md:text-sm text-text-primary">Eloquent <span className="text-tertiary ml-1">✓</span></p>
                      <p className="text-[8px] md:text-[10px] text-text-secondary font-mono">Word detected and analyzed</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
