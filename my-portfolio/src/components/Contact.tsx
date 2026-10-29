import { motion } from "framer-motion";
import Lebenslauf from "../assets/Lebenslauf_Elmar_Abdullayev.pdf"
import { GitHubIcon, LinkedInIcon } from "./Icons";

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-4 py-24">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Kontakt
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ich freue mich über neue Möglichkeiten und interessante Projekte. 
            Kontaktieren Sie mich gerne!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Email */}
          <motion.a
            href="mailto:abdullayevelmar758@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm break-all">abdullayevelmar758@gmail.com</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/elmar-abdullayev-65b02b253/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-secondary/50 transition-all duration-300"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
              <LinkedInIcon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Vernetzen Sie sich mit mir</p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/elmarAbdullayev"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-accent/50 transition-all duration-300"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <GitHubIcon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">Sehen Sie meine Projekte</p>
          </motion.a>

        </div>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <a
            href={Lebenslauf}
            download="Lebenslauf_Elmar_Abdullayev.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Lebenslauf herunterladen
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-dark-border text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Elmar Abdullayev. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Entwickelt mit React, TypeScript & Tailwind CSS
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;