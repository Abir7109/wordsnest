import { motion } from "motion/react";
import { Star, User, Quote, MessageSquare, Loader2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  name: string;
  rating: number;
  experience: string;
  createdAt?: number;
}

const API_URL = import.meta.env.VITE_API_URL || "https://words-nest.onrender.com";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/experiences`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setReviews(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="pt-24 pb-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif text-5xl md:text-7xl font-bold text-text-primary mb-6"
          >
            User Wall of Fame
          </motion.h1>
          <div className="flex justify-center items-center gap-4 mb-8">
             <div className="flex text-warning">
                {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
             </div>
             <span className="font-mono text-xl font-bold">4.9/5 Average</span>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Join 50,000+ learners who have transformed their vocabulary with Words Nest.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-primary" size={40} />
          </div>
        ) : reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <MessageCircle size={64} className="text-text-secondary/20 mb-6" />
            <h3 className="text-xl font-serif font-bold text-text-primary mb-2">No Experiences Yet</h3>
            <p className="text-text-secondary mb-6">Be the first to share your Words Nest journey!</p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid bg-white p-8 rounded-[32px] border border-divider shadow-sm hover:shadow-xl transition-all relative group"
              >
                <Quote className="absolute top-6 right-8 text-primary opacity-5 group-hover:opacity-10 transition-opacity" size={60} />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-text-primary text-lg">{review.name}</h4>
                  </div>
                </div>
                <div className="flex text-warning mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-warning" : "text-divider"} />
                  ))}
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 italic">
                  "{review.experience}"
                </p>
                <div className="pt-6 border-t border-divider flex justify-between items-center text-[10px] text-text-secondary font-mono uppercase tracking-widest">
                  <span>{review.createdAt ? new Date(review.createdAt).toLocaleDateString() : ''}</span>
                  <span className="flex items-center gap-1.5"><MessageSquare size={12} /> Verified Review</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-secondary rounded-[40px] p-12 text-center text-white">
           <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Ready to write your own success story?</h2>
           <p className="text-white/70 mb-10 text-lg">Start your journey today and hit that Band 7+ goal faster than you ever thought possible.</p>
           <Link to="/download">
             <button className="bg-white text-secondary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">Get Started Free</button>
           </Link>
        </div>
      </div>
    </div>
  );
}
