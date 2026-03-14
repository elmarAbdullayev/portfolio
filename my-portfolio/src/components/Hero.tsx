import { motion } from "framer-motion";
import CV_Deutsch from "../assets/CV_Deutsch.pdf"

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Name mit Gradient */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
        >
          Elmar Abdullayev
        </motion.h1>

        {/* Titel */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
        >
          Full-Stack Developer
        </motion.h2>

        {/* Beschreibung */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Ich entwickle moderne Web-Applikationen mit React, TypeScript und FastAPI.
          Meine Leidenschaft liegt darin, benutzerfreundliche und skalierbare Lösungen zu schaffen.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 bg-dark-card hover:bg-gray-800 text-white font-medium rounded-lg border border-dark-border transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>

          <a
            href={CV_Deutsch}
            download
            className="px-8 py-3 bg-transparent hover:bg-dark-card text-primary font-medium rounded-lg border border-primary transition-all duration-300 transform hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex gap-6 justify-center"
        >
          <a
            href="https://github.com/elmarAbdullayev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 ..."/> {/* gekürzt */}
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/elmar-abdullayev-65b02b253/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 ..."/> {/* gekürzt */}
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;