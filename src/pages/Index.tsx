import ParticleField from '@/components/three/ParticleField';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* 3D Particle Background */}
      <ParticleField />
      
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-30">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(180_100%_50%/0.02)_2px,hsl(180_100%_50%/0.02)_4px)]" />
      </div>
      
      {/* Main Content */}
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
