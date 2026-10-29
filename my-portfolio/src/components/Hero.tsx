import { motion } from "framer-motion";
import Lebenslauf from "../assets/Lebenslauf_Elmar_Abdullayev.pdf"
import { GitHubIcon, LinkedInIcon } from "./Icons";

function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Status */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-dark-border bg-dark-card/60 text-sm text-gray-300"
        >
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          Hamburg · offen für Junior-Stellen
        </motion.span>

        {/* Name mit Gradient */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
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
          Full-Stack Developer · KI & Automatisierung
        </motion.h2>

        {/* Beschreibung */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Ich entwickle Web-Apps mit React, TypeScript und FastAPI und verbinde sie mit KI und Automatisierung –
          von der Lebenslauf-Prüfung mit der Claude API bis zum WhatsApp-Bot für Restaurants.
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
            Projekte ansehen
          </a>

          <a
            href="#contact"
            className="px-8 py-3 bg-dark-card hover:bg-gray-800 text-white font-medium rounded-lg border border-dark-border transition-all duration-300 transform hover:scale-105"
          >
            Kontakt
          </a>

          <a
            href={Lebenslauf}
            download="Lebenslauf_Elmar_Abdullayev.pdf"
            className="px-8 py-3 bg-transparent hover:bg-dark-card text-primary font-medium rounded-lg border border-primary transition-all duration-300 transform hover:scale-105"
          >
            Lebenslauf (PDF)
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
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/elmar-abdullayev-65b02b253/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <LinkedInIcon />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
