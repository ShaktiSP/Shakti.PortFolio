import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded bg-primary/20 border border-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary text-sm">SP</span>
            </div>
            <span className="font-display text-sm text-muted-foreground">SHAKTI PRAKASH</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-xs text-muted-foreground text-center"
          >
            <span className="text-primary">{"<"}</span>
            designed & built with passion
            <span className="text-primary">{" />"}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-xs text-muted-foreground"
          >
            © 2024 — SYSTEM.VERSION: 1.0.0
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
