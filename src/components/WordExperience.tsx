import { motion, AnimatePresence } from "motion/react";
import { Volume2, Share2, Bookmark, ChevronUp } from "lucide-react";
import { useState } from "react";

const sections = [
  {
    id: "meaning",
    title: "Meaning (English & Bangla)",
    content: (
      <div className="space-y-4">
        <p className="text-xl text-text-primary leading-relaxed">
          Open to more than one interpretation; having a double meaning.
        </p>
        <p className="text-2xl font-bold font-serif text-secondary">
          অস্পষ্ট বা দ্ব্যর্থবোধক
        </p>
      </div>
    )
  },
  {
    id: "synonyms",
    title: "Synonyms",
    content: (
      <div className="flex flex-wrap gap-2 pt-2">
        {["Equivocal", "Obscure", "Vague", "Cryptic"].map(word => (
          <span key={word} className="px-5 py-1.5 border border-divider rounded-full text-sm font-medium hover:bg-surface-container transition-colors cursor-default">
            {word}
          </span>
        ))}
      </div>
    )
  },
  {
    id: "context",
    title: "IELTS Context Example",
    content: (
      <p className="text-lg italic border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
        "The government’s stance on the new tax laws remains <span className="text-primary font-bold">ambiguous</span>, leading to public confusion."
      </p>
    )
  }
];

export default function WordExperience() {
  const [openSections, setOpenSections] = useState<string[]>(["meaning", "synonyms", "context"]);

  const speak = (text: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 md:py-20 bg-surface-container-highest/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-2 md:mb-3"
          >
            The Premium Word Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-text-secondary"
          >
            Every word is a journey of discovery.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[20px] md:rounded-[32px] p-5 md:p-10 card-shadow border border-divider max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-3 md:gap-6 mb-5 md:mb-8">
            <div className="space-y-1.5 md:space-y-3">
              <div className="flex items-center gap-2 md:gap-3">
                <h3 className="font-serif text-2xl md:text-5xl font-bold text-primary">Ambiguous</h3>
        <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => speak("Ambiguous")}
                  className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-surface-container text-text-secondary hover:text-primary transition-all font-mono text-[10px] md:text-sm font-bold border border-divider"
                >
                  <Volume2 size={16} className="md:w-5 md:h-5" />
                  Pronounce
                </motion.button>
              </div>
              <div className="flex gap-2">
                <span className="font-mono text-[9px] md:text-[10px] px-2.5 md:px-3 py-1 bg-surface rounded-full border border-divider font-semibold uppercase tracking-wider">Adjective</span>
                <span className="font-mono text-[9px] md:text-[10px] px-2.5 md:px-3 py-1 bg-tertiary-container/20 text-on-tertiary-container rounded-full font-semibold uppercase tracking-wider">Band 7.5+</span>
              </div>
            </div>
            
            <div className="flex gap-1.5 md:gap-2">
              <motion.button whileHover={{ scale: 1.05 }} className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-divider flex items-center justify-center text-text-secondary hover:bg-surface transition-colors shadow-sm">
                <Share2 size={16} className="md:w-4 md:h-4" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                <Bookmark size={16} className="md:w-4 md:h-4" fill="currentColor" />
              </motion.button>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-4 md:space-y-6">
            {sections.map((section) => (
              <div key={section.id} className="border-b last:border-0 border-divider pb-4 md:pb-6 last:pb-0">
                <button 
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex justify-between items-center group py-0.5"
                >
                  <h4 className="font-mono text-[9px] md:text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                    {section.title}
                  </h4>
                  <motion.div
                    animate={{ rotate: openSections.includes(section.id) ? 0 : 180 }}
                    className="text-divider group-hover:text-primary transition-colors"
                  >
                    <ChevronUp size={14} className="md:w-4 md:h-4" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openSections.includes(section.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 md:pt-5">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
