import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Send, User, Loader2 } from "lucide-react";

interface Review {
  id: string;
  name: string;
  rating: number;
  experience: string;
  createdAt?: number;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: "1",
    name: "Sakib Ahmed",
    rating: 5,
    experience: "This app is a game changer for IELTS students. The scan feature is incredibly accurate!",
  },
  {
    id: "2",
    name: "Emma Wilson",
    rating: 5,
    experience: "I love the clean design and the context-sensitive meanings. High quality stuff.",
  },
  {
    id: "3",
    name: "Rahat Kabir",
    rating: 4,
    experience: "Very helpful for academic writing. Wish it had more idioms, but overall outstanding.",
  }
];

const API_URL = import.meta.env.VITE_API_URL || "https://words-nest.onrender.com";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitMsg, setSubmitMsg] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/experiences`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setReviews(data);
        } else {
          setReviews(INITIAL_REVIEWS);
        }
      })
      .catch(() => setReviews(INITIAL_REVIEWS))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/experiences`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), experience: comment.trim(), rating })
      });
      if (res.ok) {
        setSubmitMsg("Thanks! Your experience will appear after approval.");
        setName("");
        setComment("");
        setRating(5);
      } else {
        setSubmitMsg("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitMsg("Failed to submit. Check your connection.");
    }
    setSubmitting(false);
    setTimeout(() => setSubmitMsg(""), 5000);
  };

  return (
    <section id="reviews" className="py-12 md:py-20 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-2 md:mb-3"
          >
            User Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-text-secondary max-w-xl mx-auto"
          >
            See what other IELTS aspirants are saying about their journey with Words Nest.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Review Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-[20px] md:rounded-[32px] card-shadow border border-divider"
          >
            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-6 text-center">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-mono font-bold uppercase tracking-wider text-text-secondary">Your Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-surface-bright rounded-xl border border-divider focus:border-primary outline-none transition-colors text-sm"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-mono font-bold uppercase tracking-wider text-text-secondary">Rating</label>
                  <div className="flex gap-2 py-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform active:scale-95"
                      >
                        <Star 
                          size={24} 
                          fill={(hoverRating || rating) >= star ? "#EAB308" : "none"}
                          className={(hoverRating || rating) >= star ? "text-warning" : "text-divider"}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs md:text-sm font-mono font-bold uppercase tracking-wider text-text-secondary">Review</label>
                <textarea 
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience with the APK..."
                  rows={3}
                  className="w-full px-4 py-3 bg-surface-bright rounded-xl border border-divider focus:border-primary outline-none transition-colors text-sm resize-none"
                  required
                />
              </div>

              {submitMsg && (
                <p className="text-center text-sm text-primary font-medium">{submitMsg}</p>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-all text-sm md:text-base border border-primary disabled:opacity-50"
              >
                {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {submitting ? "Submitting..." : "Submit Review"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative mt-8 md:mt-12 group">
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
        
        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="animate-spin text-primary" size={32} />
          </div>
        ) : (
          <div className="flex overflow-hidden">
            <motion.div 
              whileHover={{ animationPlayState: "paused" }}
              animate={{ 
                x: ["0%", "-50%"] 
              }}
              transition={{ 
                duration: 80,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-4 md:gap-6 py-4 pr-4 md:pr-6 cursor-pointer"
            >
              {[...reviews, ...reviews].map((review, idx) => (
                <div 
                  key={`${review.id}-${idx}`}
                  className="flex-shrink-0 w-[260px] md:w-[320px] bg-white p-5 md:p-6 rounded-[20px] md:rounded-[24px] border border-divider shadow-sm hover:shadow-md transition-shadow group/card"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover/card:bg-primary group-hover/card:text-white transition-colors">
                        <User size={18} />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-text-primary text-xs md:text-sm">{review.name}</h4>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          fill={i < review.rating ? "#EAB308" : "none"}
                          className={i < review.rating ? "text-warning" : "text-divider"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {review.experience}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
