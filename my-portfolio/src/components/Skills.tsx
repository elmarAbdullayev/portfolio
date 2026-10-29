import { motion } from "framer-motion";

const skillsData = {
  technical: [
    {
      category: "Frontend",
      skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS", "Tailwind CSS", "Redux", "Vite", "Bootstrap", "jQuery"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      skills: ["Python", "FastAPI", "REST-APIs", "Pydantic", "SQLAlchemy", "JWT", "Java", "Spring Boot"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "KI & Automatisierung",
      skills: ["Claude API", "Structured Outputs", "n8n", "Groq", "Ollama", "WhatsApp Cloud API", "Webhooks", "Claude Code"],
      color: "from-pink-500 to-orange-400"
    },
    {
      category: "Datenbanken",
      skills: ["PostgreSQL", "MySQL", "SQLite", "SQL", "Alembic"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Microsoft 365",
      skills: ["SharePoint Online", "Microsoft Teams", "Entra ID", "PowerShell", "PnP.PowerShell", "SPFx"],
      color: "from-sky-500 to-blue-600"
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "pytest", "Linux", "Postman", "Vercel", "UML"],
      color: "from-orange-500 to-red-500"
    }
  ],
  soft: [
    "Problemlösungsfähigkeit",
    "Selbstständigkeit",
    "Flexibilität",
    "Teamarbeit",
    "Agiles Projektmanagement",
    "Schnelle Auffassungsgabe"
  ]
};

function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 px-4 py-24">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Skills & Technologien
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Technologien und Fähigkeiten, mit denen ich professionelle Anwendungen entwickle
        </motion.p>

        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
            Technische Skills
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.technical.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-primary/50 transition-all duration-300">
                  
                  {/* Category Header */}
                  <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-dark-border mb-4">
                    <h4 className={`text-lg font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.category}
                    </h4>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-dark-bg text-gray-300 rounded-lg text-sm border border-dark-border hover:border-primary/50 hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-2 h-8 bg-gradient-to-b from-secondary to-accent rounded-full"></span>
            Soft Skills & Methoden
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-dark-card border border-dark-border"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skillsData.soft.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-dark-bg border border-dark-border hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300 font-medium">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Skills;