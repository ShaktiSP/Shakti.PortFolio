import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "shaktiprakash0207@gmail.com",
    href: "mailto:shaktiprakash0207@gmail.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 8872059872",
    href: "tel:+918872059872",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Noida, India",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "shakti-prakash-02071996",
    href: "https://www.linkedin.com/in/shakti-prakash-02071996",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-accent">CHANNEL.OPEN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">ESTABLISH</span>{" "}
            <span className="text-neon-green">CONTACT</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-lg">
            Ready to collaborate on your next Android project? Let's connect.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block bg-cyber-card rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all group"
                >
                  <ContactContent item={item} />
                </a>
              ) : (
                <div className="bg-cyber-card rounded-xl p-6 border border-primary/20">
                  <ContactContent item={item} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Terminal style message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-cyber-card rounded-xl p-6 border border-primary/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="ml-4 font-mono text-xs text-muted-foreground">terminal@shakti-portfolio:~</span>
          </div>
          <div className="font-mono text-sm">
            <p className="text-muted-foreground mb-2">$ cat message.txt</p>
            <p className="text-accent mb-4">
              {">"} Thank you for visiting my portfolio! I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>
            <p className="text-muted-foreground">
              $ <span className="animate-pulse">_</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactContent({ item }: { item: typeof contactInfo[0] }) {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="font-mono text-xs text-muted-foreground mb-1">{item.label}</p>
        <p className="font-body text-foreground group-hover:text-primary transition-colors">{item.value}</p>
      </div>
    </div>
  );
}
