import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { animate, createScope, createSpring, createDraggable } from 'animejs';
import RotatingText from '../components/RotatingText';

const Home = () => {
  const root = useRef(null);
  const scope = useRef(null);
  const [displayText, setDisplayText] = useState('Abhijeet');
  const [textIndex, setTextIndex] = useState(1);

  const text = [
    'Abhijeet',
    'Developer',
    'Designer',
    'Freelancer',
    'Student',
  ];



  return (
    <section ref={root} className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="flex gap-4 text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm
              <RotatingText
                texts={text}
                mainClassName="inline-block px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg transition-all duration-300"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 600 }}
                rotationInterval={1500}
              />
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Web & Mobile Developer
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              I build fast, responsive, and beautiful apps using modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="btn btn-primary flex items-center hover:text-white gap-2 hover:transition-all duration-300"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="btn btn-outline flex items-center gap-2  hover:transition-all duration-300"
              >
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75"></div>
              <div className="relative bg-dark-darker rounded-full p-2">
                <img
                  src="/assets/profile.jpeg"
                  alt="Developer illustration"
                  className="w-full max-w-md rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;