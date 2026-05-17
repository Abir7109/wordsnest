import { motion } from "motion/react";
import { BarChart3, Sparkles, Languages } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Instant Analysis",
    description: "Deep-dive into any word with AI-powered etymology and usage analysis instantly."
  },
  {
    icon: Sparkles,
    title: "IELTS Sentences",
    description: "Learn words through real IELTS exam contexts and academic collocations."
  },
  {
    icon: Languages,
    title: "Bangla Meaning",
    description: "Native language support for better nuance and long-term memory retention."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-8 md:py-20 bg-surface-bright">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-xl md:text-3xl font-bold text-text-primary mb-1.5"
          >
            Academic Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-sm md:text-base"
          >
            Engineered for the IELTS standard of excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-surface p-5 md:p-6 rounded-[16px] md:rounded-[24px] border border-divider card-shadow"
            >
              <div className="w-9 h-9 md:w-11 md:h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 md:mb-5">
                <feature.icon size={18} className="md:w-6 md:h-6" />
              </div>
              <h3 className="font-serif text-base md:text-lg font-semibold text-text-primary mb-1.5 md:mb-2">{feature.title}</h3>
              <p className="text-[11px] md:text-sm text-text-secondary leading-relaxed opacity-90">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
