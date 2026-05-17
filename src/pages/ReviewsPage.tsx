import { motion } from "motion/react";
import { Star, User, Quote, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const allReviews = [
  { id: 1, name: "Sakib Ahmed", rating: 5, date: "2024-05-10", comment: "This app is a game changer for IELTS students. The scan feature is incredibly accurate! It has saved me countless hours of manual note-taking.", category: "IELTS Candidate" },
  { id: 2, name: "Emma Wilson", rating: 5, date: "2024-05-12", comment: "I love the clean design and the context-sensitive meanings. High quality stuff. The UI is calm and helps me stay focused without distraction.", category: "Band 8.0 Aspiration" },
  { id: 3, name: "Rahat Kabir", rating: 4, date: "2024-05-14", comment: "Very helpful for academic writing. Wish it had more idioms, but overall outstanding. The etymology breakdown helps you guess the meaning of new words too!", category: "Graduate Student" },
  { id: 4, name: "Sarah J.", rating: 5, date: "3 days ago", comment: "The scanner is like magic! I used to spend hours writing down words from my reading passages. Now I just scan and learn. It's easily cut my study time in half.", category: "IELTS Student" },
  { id: 5, name: "Muna A.", rating: 5, date: "1 month ago", comment: "I was stuck at Band 6 for my Lexical Resource score. After 3 months of using Words Nest daily, I hit 7.5 in my latest practice test.", category: "IELTS Success" }
];

export default function ReviewsPage() {
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

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {allReviews.map((review, i) => (
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
                  <span className="text-[10px] text-primary font-mono uppercase tracking-[0.2em] font-bold">{review.category}</span>
                </div>
              </div>
              <div className="flex text-warning mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-warning" : "text-divider"} />
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-6 italic">
                "{review.comment}"
              </p>
              <div className="pt-6 border-t border-divider flex justify-between items-center text-[10px] text-text-secondary font-mono uppercase tracking-widest">
                <span>{review.date}</span>
                <span className="flex items-center gap-1.5"><MessageSquare size={12} /> Verified Review</span>
              </div>
            </motion.div>
          ))}
        </div>

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
