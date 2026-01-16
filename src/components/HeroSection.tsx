import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const titles = ["Android Developer", "Kotlin Expert", "Mobile Architect", "Tech Innovator"];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 scanline">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-mono text-muted-foreground">SYSTEM.STATUS: <span className="text-accent">ONLINE</span></span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
        >
          <span className="text-neon glow-pulse">SHAKTI</span>
          <br />
          <span className="text-foreground">PRAKASH</span>
        </motion.h1>

        {/* Typing title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-12 flex items-center justify-center mb-8"
        >
          <span className="text-2xl md:text-3xl font-mono text-accent">
            {">"} {displayText}
            <span className="inline-block w-3 h-6 ml-1 bg-accent animate-pulse" />
          </span>
        </motion.div>

        {/* Experience badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-around w-full items-center gap-4 px-6 py-4 bg-cyber-card rounded-lg mb-10"
        >
          <div className="text-center flex gap-1 flex-col">
            <div className="text-3xl font-display font-bold text-primary">3.4+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Years XP</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center flex gap-1 flex-col">
            <div className="text-3xl font-display font-bold text-secondary">6+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Projects</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center flex gap-1 flex-col">
            <div className="text-3xl font-display font-bold text-accent">IIT</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Patna MCA</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="cyber-button px-8 py-3 rounded-md text-lg">
            View Projects
          </a>
          <a
            href="mailto:shaktiprakash0207@gmail.com"
            className="px-8 py-3 rounded-md text-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-background transition-all font-display uppercase tracking-wider"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            {/* <span className="text-xs font-mono uppercase tracking-widest">Scroll to explore</span> */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
