import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: "AgiCent Technologies",
    role: "Software Engineer (Android)",
    period: "May 2025 – Present",
    status: "CURRENT",
    description: "Building next-generation Android applications with cutting-edge technologies",
  },
  {
    company: "TecHangouts LLC",
    role: "Android Developer",
    period: "April 2022 - December 2024",
    status: "COMPLETED",
    description: "Developed and shipped multiple production Android apps with millions of users",
  },
];

const education = [
  {
    degree: "MCA",
    institution: "Indian Institute of Technology Patna",
    period: "July 2025 - May 2027",
    status: "ONGOING",
  },
  {
    degree: "BCA",
    institution: "Panjab University",
    period: "July 2015 - May 2018",
    status: "COMPLETED",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <span className="font-mono text-xs text-primary">CAREER.TIMELINE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">EXPERIENCE</span>{" "}
            <span className="text-neon">LOG</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className={`absolute left-6 w-5 h-5 rounded-full border-2 ${
                exp.status === 'CURRENT' 
                  ? 'bg-primary border-primary animate-glow' 
                  : 'bg-background border-secondary'
              }`}>
                {exp.status === 'CURRENT' && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              <div className="bg-cyber-card rounded-xl p-6 hover:border-primary/50 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-body text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded text-xs font-mono ${
                      exp.status === 'CURRENT' ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'
                    }`}>
                      {exp.status}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground font-body">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-center">
            <span className="text-accent">EDUCATION</span> DATABASE
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-cyber-card rounded-xl p-6 border border-accent/20 hover:border-accent/50 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-2xl font-display font-bold text-accent">{edu.degree}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-mono ${
                    edu.status === 'ONGOING' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                <p className="text-foreground font-body">{edu.institution}</p>
                <p className="text-sm font-mono text-muted-foreground mt-2">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
