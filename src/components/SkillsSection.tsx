import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: "Kotlin", level: 95, category: "Languages" },
  { name: "Java", level: 90, category: "Languages" },
  { name: "Jetpack Compose", level: 88, category: "Frameworks" },
  { name: "MVVM/MVP", level: 92, category: "Architecture" },
  { name: "Kotlin Coroutines", level: 85, category: "Async" },
  { name: "Dagger/Hilt", level: 80, category: "DI" },
  { name: "Room DB", level: 85, category: "Database" },
  { name: "Firebase", level: 88, category: "Backend" },
  { name: "Retrofit", level: 90, category: "Networking" },
  { name: "Git", level: 85, category: "Tools" },
];

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">[{String(index + 1).padStart(2, '0')}]</span>
          <span className="font-display text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
            {skill.category}
          </span>
          <span className="font-mono text-primary text-sm">{skill.level}%</span>
        </div>
      </div>
      <div className="skill-bar h-2 rounded-sm overflow-hidden bg-muted/50">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
          className="h-full rounded-sm relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, hsl(180 100% 50%), hsl(${140 + index * 10} 100% 50%))`,
            boxShadow: '0 0 10px hsl(180 100% 50% / 0.5)',
          }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-4">
            <span className="font-mono text-xs text-accent">STATS.LOADED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-neon">SKILL</span>{" "}
            <span className="text-foreground">MATRIX</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-lg">
            Core competencies and technical proficiencies acquired through 3.4+ years of Android development
          </p>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 p-6 bg-cyber-card rounded-lg"
        >
          <h3 className="font-display text-xl mb-4 text-center text-secondary">DEVELOPMENT ARSENAL</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Android Studio", "JIRA", "GitLab", "Firebase Console", "Trello", "Postman"].map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4 + i * 0.1 }}
                className="px-4 py-2 rounded-md bg-muted/50 border border-primary/20 font-mono text-sm hover:border-primary hover:text-primary transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
