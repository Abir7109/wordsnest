import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is the app free to use?",
    answer: "Yes, Words Nest offers a comprehensive free tier that includes basic word search, scan capabilities, and local saving. Premium features include cloud sync and advanced AI etymology."
  },
  {
    question: "Which English dialects are supported?",
    answer: "We provide both British and American pronunciations, but we prioritize British usage contexts as per the standard IELTS curriculum."
  },
  {
    question: "Can I use it offline?",
    answer: "Absolutely. Once you've searched or saved a word, it is available offline in your local Nest database."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-surface-bright">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
        >
          Common Questions
        </motion.h2>

        <div className="space-y-2 md:space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-divider last:border-0"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center py-6 md:py-8 text-left group"
              >
                <span className="font-serif text-xl md:text-2xl font-semibold text-text-primary group-hover:text-primary transition-colors pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                  className="text-outline group-hover:text-primary transition-colors shrink-0"
                >
                  <ChevronDown size={20} className="md:w-6 md:h-6" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-text-secondary pb-6 md:pb-8 text-base md:text-lg opacity-90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
