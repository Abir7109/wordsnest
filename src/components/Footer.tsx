import { Facebook, Instagram, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-10 md:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-5 space-y-4 md:space-y-8">
          <Link to="/" className="flex items-center gap-2 md:gap-4 justify-center md:justify-start group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHsLS-maEFpdMrUFD35cpAcuJvdFuiT1Sk4kgqRhjqH0I_NGb0P9pXoG9OYto6R4fKHBQ0Gg1b7CFuR981IsgXZRPtfXQYz5Zva-C8OZbADhE_NDGQnG70vshLxSnME5nWg1wW9XMBo9SWnIaHak_3lc_8u0o9JW3pGJSqV2apTklQyJfASIzEU9miZFkp6ohUfenwVWp_kAwX_dBzcYLof4UE41XmtJb5As4j8o0RPcCCKRxWOXoh7D2ahQdS9MOJHFngddl29nvG" 
              alt="Words Nest" 
              className="h-8 md:h-14 w-auto transition-transform group-hover:scale-110"
            />
            <h2 className="font-serif text-xl md:text-3xl font-bold text-primary-container">Words Nest</h2>
          </Link>
          <p className="text-outline-variant max-w-sm mx-auto md:mx-0 opacity-70 leading-relaxed font-medium text-center md:text-left text-sm md:text-base">
            Cultivating IELTS Excellence through intelligent, distraction-free vocabulary building.
          </p>
          <div className="flex gap-6 justify-center md:justify-start pt-2">
            <a href="#" className="hover:text-primary-container transition-all hover:scale-110"><Facebook size={22} /></a>
            <a href="#" className="hover:text-primary-container transition-all hover:scale-110"><Instagram size={22} /></a>
            <a href="https://rmabir71.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-container transition-all hover:scale-110" title="Developer Portfolio">
              <Globe size={22} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-7 md:col-span-7 gap-8">
          <div className="md:col-span-2 space-y-4 md:space-y-6">
            <h3 className="font-mono text-[10px] md:text-xs font-bold text-primary-container uppercase tracking-[0.2em]">Product</h3>
            <ul className="space-y-2 md:space-y-4 opacity-60 font-medium text-sm">
              <li><Link to="/features" className="hover:underline text-white/80 hover:text-white">Features</Link></li>
              <li><Link to="/how-it-works" className="hover:underline text-white/80 hover:text-white">How it Works</Link></li>
              <li><Link to="/scan" className="hover:underline text-white/80 hover:text-white">Scanner</Link></li>
              <li><Link to="/reviews" className="hover:underline text-white/80 hover:text-white">Reviews</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4 md:space-y-6">
            <h3 className="font-mono text-[10px] md:text-xs font-bold text-primary-container uppercase tracking-[0.2em]">Support</h3>
            <ul className="space-y-2 md:space-y-4 opacity-60 font-medium text-sm">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 space-y-4 md:space-y-6">
            <h3 className="font-mono text-[10px] md:text-xs font-bold text-primary-container uppercase tracking-[0.2em]">The Creator</h3>
            <div className="space-y-3">
              <p className="text-xs md:text-sm opacity-60 leading-relaxed font-medium">
                Words Nest was architected by <span className="text-primary-container">R.M. Abir</span>, a Full-Stack Engineer with 7+ years of experience and 30+ successfully shipped projects.
              </p>
              <div className="flex gap-4 pt-1">
                <div className="text-center">
                  <div className="font-serif text-lg text-primary-container">7+</div>
                  <div className="text-[8px] uppercase tracking-tighter opacity-40 font-mono">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-lg text-primary-container">30+</div>
                  <div className="text-[8px] uppercase tracking-tighter opacity-40 font-mono">Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-lg text-primary-container">10+</div>
                  <div className="text-[8px] uppercase tracking-tighter opacity-40 font-mono">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 text-[9px] md:text-[10px] opacity-40 font-mono tracking-widest uppercase text-center">
        <div>
          Crafted with passion by{" "}
          <a 
            href="https://rmabir71.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary-container transition-colors underline decoration-dotted underline-offset-4"
          >
            R.M. Abir
          </a>
        </div>
      </div>
    </footer>
  );
}
