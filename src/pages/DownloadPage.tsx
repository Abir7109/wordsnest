import { motion, useScroll, useTransform } from "motion/react";
import { Smartphone, Laptop, Tablet, Download, CheckCircle, Apple, Store, Sparkles, Leaf, Star, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const platforms = [
  {
    name: "Android Mobile",
    icon: Smartphone,
    status: "Available",
    version: "v2.0.0",
    size: "28MB",
    features: ["Instant OCR Scanner", "Offline Mode", "Flashcard Sync", "AI Quiz Generator"],
    downloadUrl: "/wordsnest-v2.0.0.apk",
    gradient: "from-emerald-400/20 to-teal-400/10",
    accent: "bg-gradient-to-br from-emerald-400 to-teal-500"
  },
  {
    name: "Desktop Web",
    icon: Laptop,
    status: "Available",
    version: "Cloud v1.2",
    size: "N/A",
    features: ["Mass Importer", "Database Backup", "Cross-device Sync"],
    gradient: "from-amber-400/20 to-orange-400/10",
    accent: "bg-gradient-to-br from-amber-400 to-orange-500"
  },
  {
    name: "iPad & Tablet",
    icon: Tablet,
    status: "Coming Soon",
    version: "v1.9.0-beta",
    size: "38MB",
    features: ["Split Screen Support", "Apple Pencil Integration", "Landscape UI"],
    gradient: "from-violet-400/20 to-purple-400/10",
    accent: "bg-gradient-to-br from-violet-400 to-purple-500"
  }
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        >
          {i % 3 === 0 ? <Leaf size={20} /> : i % 3 === 1 ? <Sparkles size={16} /> : <Star size={18} />}
        </motion.div>
      ))}
    </div>
  );
}

function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  return (
    <div ref={ref} className="relative">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <div className="pt-24 pb-20 bg-surface-bright relative overflow-hidden">
      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Hero Section */}
        <ParallaxSection>
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
            >
              <Sparkles size={14} />
              Now Available Everywhere
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl font-bold text-text-primary mb-6"
            >
              Take Words Nest
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Everywhere</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-text-secondary text-lg max-w-2xl mx-auto"
            >
              Sync your vocabulary library across all your devices and never miss a review session.
            </motion.p>
          </div>
        </ParallaxSection>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`p-10 rounded-[40px] border flex flex-col relative overflow-hidden group ${
                platform.status === "Available"
                  ? "bg-white border-divider shadow-lg shadow-black/5"
                  : "bg-surface border-divider/50 opacity-80"
              }`}
            >
              {/* Gradient hover overlay */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${platform.gradient}`}
              />

              {/* Glow dot */}
              <motion.div
                className={`absolute -top-8 -right-8 w-24 h-24 rounded-full blur-3xl ${platform.accent} opacity-20`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${platform.accent} shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <platform.icon size={28} className="text-white" />
                </motion.div>

                <h3 className="font-serif text-2xl font-bold mb-2 relative z-10">{platform.name}</h3>

                <div className="flex gap-3 mb-8 relative z-10">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                      platform.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {platform.status}
                  </motion.span>
                  <span className="text-[10px] text-text-secondary font-mono pt-1">
                    {platform.version} • {platform.size}
                  </span>
                </div>

                <div className="flex-grow space-y-4 mb-10 relative z-10">
                  {platform.features.map((f, fi) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * fi }}
                      className="flex items-center gap-3 text-sm font-medium text-text-secondary"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CheckCircle size={16} className="text-primary shrink-0" />
                      </motion.div>
                      {f}
                    </motion.div>
                  ))}
                </div>

                {platform.downloadUrl ? (
                  <motion.a
                    href={platform.downloadUrl}
                    download
                    className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 text-white relative z-10 ${platform.accent} shadow-lg shadow-black/10`}
                    whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Download size={18} />
                    Download Now
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </motion.a>
                ) : (
                  <button
                    disabled
                    className="w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 bg-divider text-text-secondary cursor-not-allowed relative z-10"
                  >
                    <Download size={18} />
                    Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* iOS Early Access CTA */}
        <ParallaxSection>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900 rounded-[50px] p-8 md:p-16 text-white overflow-hidden relative"
          >
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-emerald-500/10 blur-[80px]"
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-teal-500/10 blur-[80px]"
                animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_rgba(201,181,156,0.1),_transparent)]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Apple className="text-primary-container" size={32} />
                  </motion.div>
                  <h2 className="font-serif text-3xl md:text-5xl font-bold">iOS Early Access</h2>
                </motion.div>
                <motion.p
                  className="text-white/60 text-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  We're putting the final touches on our iOS experience. Join the waitlist for 3 months of Premium for free.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <input
                    type="email"
                    id="ios-waitlist-email"
                    placeholder="study@ielts.com"
                    className="bg-white/5 border border-white/10 rounded-full px-6 py-3.5 flex-grow outline-none focus:border-primary transition-all duration-300 text-sm focus:shadow-[0_0_20px_rgba(201,181,156,0.3)]"
                  />
                  <motion.button
                    id="ios-waitlist-btn"
                    className="bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-primary-container transition-colors text-sm whitespace-nowrap"
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(201,181,156,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      const input = document.getElementById('ios-waitlist-email') as HTMLInputElement;
                      if (!input) return;
                      const email = input.value.trim();
                      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                        alert('Please enter a valid email address');
                        return;
                      }
                      const btn = document.getElementById('ios-waitlist-btn');
                      if (btn) btn.textContent = 'Joined!';
                      input.value = '';
                      fetch('https://words-nest.onrender.com/api/waitlist/ios', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email }),
                      }).catch(e => console.warn('Waitlist submission failed', e));
                    }}
                  >
                    Join Waitlist
                  </motion.button>
                </motion.div>
              </div>
              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <motion.div
                  className="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center group hover:bg-white/10 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Store size={40} className="text-white/20 group-hover:text-white transition-colors" />
                </motion.div>
                <motion.div
                  className="hidden sm:flex w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-3xl border border-white/10 items-center justify-center group hover:bg-white/10 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <Apple size={40} className="text-white/20 group-hover:text-white transition-colors" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </ParallaxSection>

        {/* Bottom scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-text-secondary/30 flex items-start justify-center p-1.5"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 rounded-full bg-text-secondary/50"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
