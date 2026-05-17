import { motion } from "motion/react";

const steps = [
  {
    number: "1",
    title: "Search or Scan",
    description: "Type a word or point your camera at any reading passage.",
    color: "bg-primary-container"
  },
  {
    number: "2",
    title: "AI Analysis",
    description: "Our AI breaks it down into synonyms, antonyms, and IELTS contexts.",
    color: "bg-secondary-container"
  },
  {
    number: "3",
    title: "Save to Nest",
    description: "Categorize and save to your smart flashcards for spaced repetition.",
    color: "bg-tertiary-container"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-10 md:mb-16"
        >
          3 Steps to Mastery
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10 relative">
          {/* Connector Lines (Desktop only) */}
          <div className="hidden md:block absolute top-7 left-[20%] right-[20%] h-[1px] bg-divider z-0" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className={`w-14 h-14 md:w-20 md:h-20 ${step.color} rounded-full flex items-center justify-center text-lg md:text-2xl font-serif font-bold card-shadow mb-4 md:mb-6 border-4 border-surface-bright`}>
                {step.number}
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold mb-2 md:mb-3 text-text-primary">{step.title}</h3>
              <p className="text-[11px] md:text-sm text-text-secondary max-w-[200px] md:max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
