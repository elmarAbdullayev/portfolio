import { motion } from "framer-motion";
import { featuredProjects, moreProjects, type ProjectLink } from "../data/projects";
import { GitHubIcon, LockIcon, PlayIcon } from "./Icons";

function LinkIcon({ kind }: { kind: ProjectLink["kind"] }) {
  return kind === "video" ? <PlayIcon className="w-5 h-5" /> : <GitHubIcon className="w-5 h-5" />;
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 px-4 py-24">
      <div className="max-w-7xl mx-auto w-full">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projekte
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Die neuesten zuerst: Web-Apps mit KI, Automatisierung und Microsoft 365
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`absolute -inset-4 bg-gradient-to-r ${project.color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>

                  <div className="relative rounded-2xl overflow-hidden border border-dark-border bg-dark-card">
                    <div className="aspect-video">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>

                  {/* Title */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-dark-border text-gray-300">
                        {project.badge}
                      </span>
                      <span className="text-gray-500">{project.period}</span>
                    </div>
                    <h3 className={`text-3xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-gray-300">
                          <svg className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Technologien
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-dark-bg text-gray-300 rounded-lg text-sm border border-dark-border hover:border-primary/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border rounded-lg hover:border-primary/50 transition-all duration-300"
                      >
                        <LinkIcon kind={link.kind} />
                        <span className="text-sm font-medium">{link.label}</span>
                      </a>
                    ))}
                    {project.note && (
                      <span className="flex items-center gap-2 text-sm text-gray-400">
                        <LockIcon className="w-4 h-4" />
                        {project.note}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-28">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
            Weitere Projekte
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col rounded-2xl bg-dark-card border border-dark-border overflow-hidden hover:border-primary/50 transition-colors duration-300"
              >
                <div className="aspect-video overflow-hidden border-b border-dark-border">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-1 gap-4 p-6">
                  <h4 className={`text-xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-dark-bg text-gray-400 rounded-md text-xs border border-dark-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto pt-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-sm hover:border-primary/50 transition-colors duration-300"
                      >
                        <LinkIcon kind={link.kind} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
