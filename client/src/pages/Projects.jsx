import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://ecommerce-demo.com",
      githubLink: "https://github.com/abhijeet/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and deadlines with team collaboration features.",
      image: "/projects/taskmanager.jpg",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://taskmanager-demo.com",
      githubLink: "https://github.com/abhijeet/taskmanager",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
      image: "/projects/weather.jpg",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      liveLink: "https://weather-demo.com",
      githubLink: "https://github.com/abhijeet/weather",
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "A mobile app for tracking workouts, nutrition, and fitness progress with data visualization.",
      image: "/projects/fitness.jpg",
      technologies: ["React Native", "Redux", "Firebase"],
      liveLink: "https://fitness-demo.com",
      githubLink: "https://github.com/abhijeet/fitness",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive developer portfolio website built with modern web technologies.",
      image: "/projects/portfolio.jpg",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://abhijeet-portfolio.com",
      githubLink: "https://github.com/abhijeet/portfolio",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">My Projects</h1>
        <p className="text-gray-300 mt-4 mb-8 max-w-2xl">
          Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="card overflow-hidden flex flex-col h-full"
            variants={item}
          >
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs bg-dark-darker px-2 py-1 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 pt-0 flex gap-4">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2 text-sm"
              >
                Live Demo <ExternalLink size={16} />
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2 text-sm"
              >
                GitHub <Github size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;