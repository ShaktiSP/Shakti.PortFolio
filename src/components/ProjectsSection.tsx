import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    name: "Harho",
    subtitle: "Home Gardening Assistant",
    description: "An app that helps users grow fruits and vegetables at home, offering support through daily quizzes via notifications.",
    tech: ["Kotlin", "MVVM", "Firebase FCM", "Push Notifications"],
    status: "DEPLOYED",
    difficulty: "INTERMEDIATE",
    color: "primary",
  },
  {
    id: 2,
    name: "MedWareHouse",
    subtitle: "Medical Marketplace",
    description: "Innovative app offering solutions for both buyers and sellers with price negotiation and seamless communication.",
    tech: ["Java", "MVP", "Socket.IO", "Firebase FCM"],
    status: "LIVE",
    difficulty: "ADVANCED",
    color: "secondary",
  },
  {
    id: 3,
    name: "Genie Chat",
    subtitle: "AI-Powered Keyboard",
    description: "Custom keyboard app for scheduling messages, generating AI-powered replies and setting chat reminders.",
    tech: ["Kotlin", "AWS S3", "ChatGPT API", "In-App Purchase"],
    status: "PRODUCTION",
    difficulty: "EXPERT",
    color: "accent",
  },
  {
    id: 4,
    name: "Elite Fishin",
    subtitle: "Fishing Community App",
    description: "A fishing app for users to share catches, join competitions, and check sea weather conditions.",
    tech: ["Kotlin", "MVVM", "Paging 3", "ExoPlayer", "Firebase Dynamic Link"],
    status: "ACTIVE",
    difficulty: "ADVANCED",
    color: "primary",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const colorMap = {
    primary: 'hsl(180 100% 50%)',
    secondary: 'hsl(280 100% 60%)',
    accent: 'hsl(140 100% 50%)',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: colorMap[project.color as keyof typeof colorMap], opacity: isHovered ? 0.15 : 0 }}
      />
      
      <div className="relative bg-cyber-card rounded-xl p-6 h-full border border-primary/20 hover:border-primary/50 transition-all duration-300">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-muted-foreground">MISSION_{String(project.id).padStart(2, '0')}</span>
              <span className={`px-2 py-0.5 rounded text-xs font-mono ${
                project.status === 'LIVE' ? 'bg-accent/20 text-accent' :
                project.status === 'PRODUCTION' ? 'bg-secondary/20 text-secondary' :
                'bg-primary/20 text-primary'
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <div className={`px-3 py-1 rounded border text-xs font-mono ${
            project.difficulty === 'EXPERT' ? 'border-secondary/50 text-secondary' :
            project.difficulty === 'ADVANCED' ? 'border-primary/50 text-primary' :
            'border-accent/50 text-accent'
          }`}>
            {project.difficulty}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 font-body">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.3 + i * 0.05 }}
              className="px-3 py-1 rounded-full bg-muted/50 text-xs font-mono text-foreground border border-border hover:border-primary/50 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
          <div
            className="absolute top-0 right-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-10"
            style={{ background: colorMap[project.color as keyof typeof colorMap] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-xs text-secondary">MISSION.ARCHIVE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">COMPLETED</span>{" "}
            <span className="text-neon-purple">MISSIONS</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-lg">
            Production-grade Android applications deployed and serving users worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
