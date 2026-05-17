import { motion } from "motion/react";
import { Sparkles, Brain, Image as ImageIcon, Zap, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const detailedFeatures = [
  {
    title: "AI-Powered Spaced Repetition",
    description: "Our algorithm isn't just a timer. It analyzes your speed of recall and error patterns to predict exactly when you're about to forget a word. It schedules reviews at the 'desirable difficulty' peak for permanent neuro-encoding.",
    icon: Brain,
    color: "bg-blue-500",
    details: ["Personalized forgetting curves", "Dynamic review intervals", "Recall speed tracking"]
  },
  {
    title: "Visual Etymology & Mnemonics",
    description: "We don't just show words; we show stories. Roots are mapped visually to connect new words to familiar ones. Every word comes with a custom AI-generated mnemonic image designed for maximum 'sticky' memory.",
    icon: ImageIcon,
    color: "bg-purple-500",
    details: ["Root mapping trees", "AI Mnemonic generator", "Historical timeline of usage"]
  },
  {
    title: "Real-time Contextual Extraction",
    description: "Scan your IELTS reading passages or any academic text. Our OCR doesn't just read text; it understands academic density and highlights Band 7+ vocabulary automatically, giving you definitions in the context you found them.",
    icon: Zap,
    color: "bg-yellow-500",
    details: ["Band-level detection", "Contextual definitions", "Direct import to decks"]
  },
  {
    title: "Precision Progress Analytics",
    description: "See your vocabulary growth not just in numbers, but in Band Score probability. Our analytics engine maps your known vocabulary against official IELTS corpora to estimate your lexical resource score.",
    icon: Target,
    color: "bg-red-500",
    details: ["Lexical density charts", "Band probability score", "Gap analysis reports"]
  }
];

export default function FeaturesPage() {
  return (
    <div className="pt-24 pb-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs md:text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Core Technology</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-text-primary mb-6">Master IELTS Lexis with Science</h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            We've combined polyglot learning techniques with cutting-edge AI to build the ultimate vocabulary engine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {detailedFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[32px] border border-divider shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-text-secondary leading-relaxed mb-8 text-sm md:text-base">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-sm font-medium text-text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Decorative Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-8 md:p-16 bg-primary rounded-[40px] text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <Sparkles className="mx-auto mb-6 text-primary-container" size={48} />
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Ready to expand your lexicon?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Start using these features today and feel the difference in your Band Score.
            </p>
            <Link to="/download">
              <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                Get Started Now
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
