import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaDocker, FaFigma
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiFirebase, SiNextdotjs, SiTypescript, 
  SiPython, SiMysql, SiSpring, SiExpo, SiGooglecloud
} from 'react-icons/si';
import { FaJava, FaAws } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact className="w-12 h-12 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12 text-white" /> },
        { name: "JavaScript", icon: <FaJs className="w-12 h-12 text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-12 h-12 text-[#3178C6]" /> },
        { name: "HTML5", icon: <FaHtml5 className="w-12 h-12 text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-12 h-12 text-[#1572B6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12 text-[#06B6D4]" /> },
        { name: "Redux", icon: <SiRedux className="w-12 h-12 text-[#764ABC]" /> },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="w-12 h-12 text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="w-12 h-12 text-white" /> },
        { name: "Python", icon: <SiPython className="w-12 h-12 text-[#3776AB]" /> },
        { name: "Java", icon: <FaJava className="w-12 h-12 text-[#007396]" /> },
        { name: "Spring Boot", icon: <SiSpring className="w-12 h-12 text-[#6DB33F]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="w-12 h-12 text-[#4479A1]" /> },
        { name: "Firebase", icon: <SiFirebase className="w-12 h-12 text-[#FFCA28]" /> },
      ]
    },
    {
      category: "Cloud",
      items: [
        { name: "AWS", icon: <FaAws className="w-12 h-12 text-[#FF9900]" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="w-12 h-12 text-[#4285F4]" /> },
      ]
    },
    {
      category: "Mobile",
      items: [
        { name: "React Native", icon: <FaReact className="w-12 h-12 text-[#61DAFB]" /> },
        { name: "Expo", icon: <SiExpo className="w-12 h-12 text-white" /> },
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt className="w-12 h-12 text-[#F05032]" /> }, 
        { name: "VS Code", icon: <VscVscodeInsiders className="w-12 h-12 text-[#007ACC]" /> },
        { name: "Figma", icon: <FaFigma className="w-12 h-12 text-[#F24E1E]" /> },
        { name: "Docker", icon: <FaDocker className="w-12 h-12 text-[#2496ED]" /> },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="mt-12 space-y-12">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="backdrop-blur-sm bg-opacity-10 bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-100 border-b border-gray-700 pb-2">
                {skillGroup.category}
              </h3>
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "50px" }}
              >
                {skillGroup.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="relative group"
                    variants={item}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative flex flex-col items-center p-6 bg-gray-800/80 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-gray-500 transition-all duration-300">
                      <div className="transform transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-gray-300 font-medium text-sm mt-4 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;