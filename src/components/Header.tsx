import { motion, AnimatePresence } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Features", path: "/features" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "Scan", path: "/scan" },
    { name: "Reviews", path: "/reviews" },
    { name: "Download", path: "/download" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 glass-header">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/icon.png" 
            alt="Words Nest" 
            className="h-7 md:h-9 w-auto transition-transform group-hover:scale-110"
          />
          <span className="font-serif text-lg md:text-xl font-semibold text-primary">Words Nest</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-sm md:text-base transition-colors font-medium relative group ${isActive(item.path) ? "text-primary" : "text-text-secondary hover:text-primary"}`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all group-hover:w-full ${isActive(item.path) ? "w-full" : "w-0"}`} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="/wordsnest-v2.0.0.apk"
            download
            className="bg-secondary text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full font-mono text-[10px] md:text-xs font-medium flex items-center gap-1.5 md:gap-2 hover:opacity-90 shadow-md transition-all whitespace-nowrap"
          >
            <Download size={12} className="md:w-3.5 md:h-3.5" />
            <span className="hidden sm:inline">Get App</span>
            <span className="sm:hidden">Download</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-divider overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium text-lg py-2 border-b border-divider/50 transition-colors ${isActive(item.path) ? "text-primary px-2" : "text-text-primary hover:text-primary"}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
