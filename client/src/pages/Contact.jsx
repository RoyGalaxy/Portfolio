import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
// Update the imports from lucide-react
import { Github, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xyyqpqzd"); // Replace with your Formspree form ID
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={24} />, // Changed from GitHub to Github
      url: 'https://github.com/roygalaxy',
      color: 'hover:text-gray-300'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={24} />, 
      url: 'https://linkedin.com/in/abhijeetroy11',
      color: 'hover:text-blue-500'
    },
    { 
      name: 'Email', 
      icon: <Mail size={24} />, 
      url: 'mailto:work.abhijeetroy@gmail.com',
      color: 'hover:text-red-400'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
          Feel free to reach out if you have any questions, want to discuss a project, or just want to say hello!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="backdrop-blur-lg bg-dark-darker/50 rounded-2xl p-8 border border-gray-800 shadow-xl h-full">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm currently available for freelance work and full-time positions. 
                If you have a project that needs some creative work, feel free to contact me.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-6 text-white/90">Connect with me</h3>
            <div className="flex space-x-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform transition-all duration-300 hover:scale-110 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="backdrop-blur-lg bg-dark-darker/50 rounded-2xl p-8 border border-gray-800 shadow-xl">
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Send Me a Message
            </h2>
            
            {state.succeeded ? (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <CheckCircle size={64} className="mx-auto mb-6 text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white">Message Sent!</h3>
                <p className="text-gray-300 text-lg">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-darker/70 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-darker/70 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-darker/70 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-2"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-white shadow-lg transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'} 
                  <Send size={20} />
                </button>
                <ValidationError 
                  errors={state.errors}
                  className="text-red-400 text-sm mt-3"
                />
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;