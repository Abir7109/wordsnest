import { motion } from "motion/react";
import { Search, PenTool, BrainCircuit, Rocket, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Step 1: Capture",
    description: "Use our AI camera to scan academic articles, list books, or IELTS reading test papers. The app instantly extracts high-value vocabulary.",
    icon: Search,
    color: "bg-orange-100 text-orange-600",
    details: "Supports physical books, screens, and even handwritten notes with high accuracy OCR.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Step 2: Contextualize",
    description: "The AI provides the specific definition for the context found. It also suggests collocations and idioms commonly used with that word in academic writing.",
    icon: PenTool,
    color: "bg-blue-100 text-blue-600",
    details: "Learn how words behave in natural academic speech rather than just memorizing dictionary definitions.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Step 3: Habitualize",
    description: "Words are added to your dynamic review deck. The app uses 'Active Recall' exercises including sentence construction and synonym matching.",
    icon: BrainCircuit,
    color: "bg-purple-100 text-purple-600",
    details: "Switch between 5 different exercise types designed to stimulate different areas of linguistic memory.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Step 4: Mastery",
    description: "Review at the optimal time predicted by our engine. Once a word reaches 'Mastery Level', it's archived, and focused reports show your Band 7+ growth.",
    icon: Rocket,
    color: "bg-green-100 text-green-600",
    details: "Interactive dashboards show your journey from Band 5 to Band 8 level vocabulary density.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function HowItWorksPage() {
  return (
    <div className="pt-24 pb-20 bg-surface-bright">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-bold text-text-primary mb-6"
          >
            The Methodology
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            A systematic, science-backed approach to vocabulary acquisition that replaces traditional rote-memorization.
          </motion.p>
        </div>

        <div className="space-y-12 md:space-y-24">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                  <step.icon size={32} />
                </div>
                <h2 className="font-serif text-3xl font-bold">{step.title}</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {step.description}
                </p>
                <div className="p-4 bg-white rounded-xl border border-divider flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                  <p className="text-sm font-medium opacity-80">{step.details}</p>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[120%]">
                 <div className="aspect-[4/3] bg-white rounded-[40px] shadow-2xl border border-divider overflow-hidden group relative">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/20">
                       <step.icon size={24} className="text-primary" />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
