import { motion } from "motion/react";
import { Camera, FileText, Globe, Smartphone, Languages, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function ScanPage() {
  return (
    <div className="pt-24 pb-20 bg-neutral-900 text-white selection:bg-primary selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="font-mono text-xs font-bold text-primary-container uppercase tracking-[0.3em] mb-4 block">Omni-Scanner v2.0</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">If you can see it, you can learn it.</h1>
            <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-lg">
              Our award-winning OCR engine turns the physical world into your personal vocabulary list. No more manual typing or flipping through dictionaries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/download">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:bg-primary-container transition-colors">Try a Demo</button>
              </Link>
              <Link to="/download">
                <button className="text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">Download App</button>
              </Link>
            </div>
          </motion.div>

          <div className="relative">
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10 bg-white/5 border border-white/10 p-4 rounded-[40px] backdrop-blur-xl"
             >
                <div className="aspect-[3/4] bg-neutral-800 rounded-[32px] overflow-hidden flex items-center justify-center border border-white/5">
                   <div className="flex flex-col items-center gap-4">
                      <Camera size={64} className="text-primary animate-pulse" />
                      <div className="flex gap-2">
                         {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />)}
                      </div>
                   </div>
                </div>
                {/* Floating scan result */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-primary p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl max-w-[180px] md:max-w-[240px] border border-white/10 z-20"
                >
                   <p className="font-mono text-[8px] md:text-[10px] text-white/50 mb-1.5 md:mb-2 uppercase">Extraction Success</p>
                   <h3 className="font-serif text-lg md:text-xl font-bold mb-1">Phenomenal</h3>
                   <p className="text-[10px] md:text-xs text-white/80 leading-snug">Extremely remarkable or impressive; extraordinary.</p>
                </motion.div>
             </motion.div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[120px] -z-10" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
             { icon: FileText, title: "Document Analysis", desc: "Processes up to 50 pages in seconds. Perfect for IELTS reading practice tests." },
             { icon: Globe, title: "Web Importer", desc: "One-click extension to save words from BBC, CNN, or The Guardian." },
             { icon: Languages, title: "Multilingual Support", desc: "Recognizes 40+ languages. Perfect for polyglots and casual learners." },
             { icon: Smartphone, title: "Instant Mobile Sync", desc: "Scan on your phone, review on your tablet or desktop seamlessly." },
             { icon: ShieldCheck, title: "Privacy First", desc: "Processing is end-to-end encrypted. We never store your scanned documents." },
             { icon: Camera, title: "Low Light Mastery", desc: "Smart exposure tech works in dim lighting, from late-night study sessions." }
           ].map((tech, i) => (
             <motion.div 
               key={tech.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-colors"
             >
                <tech.icon className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{tech.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
