import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import SkillsSection from '../components/SkillsSection';

const About = () => {
  return (
    <div className="container py-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="section-title">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-1">
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-75"></div>
              <div className="relative">
                <img 
                  src="/assets/profile.jpeg" 
                  alt="Profile Avatar" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              I'm a web and mobile developer with over 5 years of experience
            </h2>
            <p className="text-gray-300 mb-4">
              I specialize in building fast and responsive applications using modern technologies. 
              My journey in software development began when I was in college, and since then, 
              I've worked on various projects ranging from small business websites to complex 
              enterprise applications.
            </p>
            <p className="text-gray-300 mb-6">
              I'm passionate about creating clean, efficient, and user-friendly interfaces that 
              provide exceptional user experiences. I stay updated with the latest trends and 
              technologies in web and mobile development to deliver cutting-edge solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <a 
                href="/resume.pdf" 
                download 
                className="btn btn-primary flex items-center gap-2"
              >
                Download Resume <Download size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        id="skills"
        className="pt-8"
      >
        <SkillsSection />
      </motion.section>
    </div>
  );
};

export default About;