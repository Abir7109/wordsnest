import { motion } from "motion/react";
import { Download } from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';

const APK_URL = "/wordsnest-v2.0.0.apk";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-10 md:py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-[20px] md:rounded-[48px] p-5 md:p-14 relative border border-white/5 text-center space-y-5 md:space-y-10 backdrop-blur-3xl"
        >
          <div className="space-y-2 md:space-y-5">
            <h2 className="font-serif text-xl md:text-5xl font-bold leading-tight">
              Cultivate your excellence today.
            </h2>
            <p className="text-[10px] md:text-base text-outline-variant max-w-xl mx-auto opacity-80">
              Available exclusively on Android. Your journey to band 8.0 starts with a single word.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-3 md:mt-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-3 md:p-5 rounded-xl md:rounded-2xl shadow-2xl transition-transform duration-300"
            >
              <QRCodeSVG value={APK_URL} size={96} />
              <p className="text-neutral-900 font-mono text-[8px] md:text-[9px] font-bold mt-2 md:mt-3 tracking-widest uppercase opacity-60 text-center uppercase">Scan to Install</p>
            </motion.div>
            
            <div className="flex flex-col gap-3">
              <a href={APK_URL} download>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary-container text-on-primary-container px-6 md:px-8 py-3 md:py-3.5 rounded-xl md:rounded-2xl font-serif text-sm md:text-base font-bold flex items-center gap-3 hover:shadow-[0_0_30px_rgba(201,181,156,0.2)] transition-all min-w-[240px]"
                >
                  <div className="bg-neutral-900 rounded-lg p-1.5">
                    <Download size={18} className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-mono opacity-60 leading-none mb-1">Download</div>
                    <div className="leading-none">Words Nest APK</div>
                  </div>
                </motion.button>
              </a>

              <motion.button
                disabled
                className="bg-white/5 text-white/40 px-6 md:px-8 py-3 md:py-3.5 rounded-xl md:rounded-2xl font-serif text-sm md:text-base font-bold flex items-center gap-3 border border-white/10 cursor-not-allowed min-w-[240px]"
              >
                <div className="bg-white/10 rounded-lg p-1.5 opacity-40">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-2.50 2.48-.77.02-1.01-.46-1.89-.46-.89 0-1.15.45-1.89.47-.78.03-1.75-1.25-2.58-2.47-1.7-2.48-2.99-7.01-1.24-10.05 1.76-3.05 4.91-4.98 5.61-4.98.7 0 3.3.47 4.96 4.96-.86.51-1.44 2.13-1.44 3.73s.59 2.5 1.45 2.96c-.34.94-.97 2.11-1.48 2.86zm-4.38-16.14c0 1.25-.97 2.33-2.18 2.33s-2.18-1.08-2.18-2.33c0-1.25.97-2.33 2.18-2.33s2.18 1.08 2.18 2.33z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-mono opacity-100 leading-none mb-1">Coming Soon</div>
                  <div className="leading-none">App Store</div>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
