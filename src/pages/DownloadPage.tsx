import { motion } from "motion/react";
import { Smartphone, Laptop, Tablet, Download, CheckCircle, Apple, Store } from "lucide-react";

const platforms = [
  {
    name: "Android Mobile",
    icon: Smartphone,
    status: "Available",
    version: "v1.4.3",
    size: "28MB",
    features: ["Instant OCR Scanner", "Offline Mode", "Flashcard Sync"],
    downloadUrl: "/words-nest-v1.4.3.apk"
  },
  {
    name: "Desktop Web",
    icon: Laptop,
    status: "Available",
    version: "Cloud v1.2",
    size: "N/A",
    features: ["Mass Importer", "Database Backup", "Cross-device Sync"]
  },
  {
    name: "iPad & Tablet",
    icon: Tablet,
    status: "Coming Soon",
    version: "v1.9.0-beta",
    size: "38MB",
    features: ["Split Screen Support", "Apple Pencil Integration", "Landscape UI"]
  }
];

export default function DownloadPage() {
  return (
    <div className="pt-24 pb-20 bg-surface-bright">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl font-bold text-text-primary mb-6"
          >
            Take Words Nest Everywhere
          </motion.h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Sync your vocabulary library across all your devices and never miss a review session.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[40px] border flex flex-col ${platform.status === "Available" ? "bg-white border-divider shadow-sm" : "bg-surface border-divider/50 opacity-80"}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                 <platform.icon size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">{platform.name}</h3>
              <div className="flex gap-3 mb-8">
                 <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${platform.status === "Available" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                    {platform.status}
                 </span>
                 <span className="text-[10px] text-text-secondary font-mono pt-1">{platform.version} • {platform.size}</span>
              </div>
              <div className="flex-grow space-y-4 mb-10">
                 {platform.features.map(f => (
                   <div key={f} className="flex items-center gap-3 text-sm font-medium text-text-secondary">
                      <CheckCircle size={16} className="text-primary" />
                      {f}
                   </div>
                 ))}
              </div>
              {platform.downloadUrl ? (
                <a 
                  href={platform.downloadUrl}
                  download
                  className="w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all bg-primary text-white hover:shadow-xl hover:-translate-y-1"
                >
                  <Download size={18} />
                  Download Now
                </a>
              ) : (
                <button 
                  disabled
                  className="w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 bg-divider text-text-secondary cursor-not-allowed"
                >
                  <Download size={18} />
                  Coming Soon
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <div className="bg-neutral-900 rounded-[50px] p-8 md:p-16 text-white overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_rgba(201,181,156,0.1),_transparent)]" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                 <div className="flex items-center gap-3 mb-6">
                   <Apple className="text-primary-container" size={32} />
                   <h2 className="font-serif text-3xl md:text-5xl font-bold">iOS Early Access</h2>
                 </div>
                 <p className="text-white/60 text-lg mb-8">
                   We're putting the final touches on our iOS experience. Join the waitlist for 3 months of Premium for free.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <input type="email" placeholder="study@ielts.com" className="bg-white/5 border border-white/10 rounded-full px-6 py-3.5 flex-grow outline-none focus:border-primary transition-colors text-sm" />
                    <button className="bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-primary-container transition-colors text-sm whitespace-nowrap">Join Waitlist</button>
                 </div>
              </div>
              <div className="flex gap-6">
                 <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center group hover:bg-white/10 transition-colors">
                    <Store size={40} className="text-white/20 group-hover:text-white transition-colors" />
                 </div>
                 <div className="hidden sm:flex w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-3xl border border-white/10 items-center justify-center group hover:bg-white/10 transition-colors">
                    <Apple size={40} className="text-white/20 group-hover:text-white transition-colors" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
