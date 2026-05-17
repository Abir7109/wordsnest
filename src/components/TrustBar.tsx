import { Star } from "lucide-react";
import { motion } from "motion/react";

export default function TrustBar() {
  return (
    <section className="py-8 md:py-12 bg-surface-bright/50 border-y border-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 opacity-60">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-serif font-bold">4.9/5</span>
            <div className="flex text-warning">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="md:w-[18px] md:h-[18px]" fill="currentColor" />
              ))}
            </div>
          </div>
          
          <div className="text-[10px] md:text-sm font-mono font-bold tracking-widest">10K+ WORDS LEARNED</div>
          
          <div className="flex gap-8 md:gap-12 items-center grayscale scale-90 md:scale-100">
            <span className="font-serif text-lg md:text-xl font-bold opacity-50 tracking-tighter uppercase whitespace-nowrap">British Council</span>
            <span className="font-serif text-lg md:text-xl font-bold opacity-50 tracking-tighter uppercase whitespace-nowrap">IDP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
