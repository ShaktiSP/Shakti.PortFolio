import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-primary/20"
            : ""
        }`}
      >
        <div className="max-w-full mx-8 px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary text-lg">
                SP
              </span>
            </div>
            <span className="font-display text-sm hidden sm:block text-foreground">
              SHAKTI PRAKASH
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors relative group"
              >
                <span className="text-primary mr-1">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-2xl text-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary mr-2 text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
