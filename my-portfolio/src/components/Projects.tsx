import { motion } from "framer-motion";
import Benchmarking from "../assets/images/Benchmarking.png";
import Todo from "../assets/images/Todo.png";
import Chatbot from "../assets/images/Chatbot.png";


const projectsData = [
  {
    id: 1,
    title: "Server Benchmarking Tool",
    description: "Performance-Analyse-Tool zum Vergleich von FastAPI-Servern (Uvicorn vs. Gunicorn). Visualisierung von Antwortzeiten, Fehlerquoten und Ressourcenauslastung in Echtzeit.",
    longDescription: "Entwicklung einer Full-Stack-Anwendung zur Messung und Visualisierung der Server-Performance unter verschiedenen Lastbedingungen. Unterstützt synchrone und asynchrone Anfragen mit detaillierten Metriken.",
    tech: ["React", "TypeScript", "FastAPI", "MySQL"],
    features: [
      "Real-time Performance Monitoring",
      "CSV Export für Datenanalyse",
      "Konfigurierbarer Lasttest",
      "Responsive Dashboard"
    ],
    github: {
      frontend: "https://github.com/elmarAbdullayev/benchmark-frontend",
      backend: "https://github.com/elmarAbdullayev/benchmark-backend"
    },
    image:Benchmarking,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "Sichere Full-Stack-Aufgabenverwaltung mit JWT-Authentifizierung. Jeder Benutzer verwaltet seine eigenen Tasks mit CRUD-Operationen und Filter-Funktionen.",
    longDescription: "Professionelles Task-Management-System mit Token-basierter Authentifizierung, sicherer Passwortverschlüsselung und benutzerbasierter Datentrennung.",
    tech: ["React", "TypeScript", "Redux", "FastAPI", "MySQL", "Alembic"],
    features: [
      "JWT-Authentifizierung",
      "CRUD Operations",
      "Task Filtering & Search",
      "User-spezifische Daten"
    ],
    github: {
      frontend: "https://github.com/elmarAbdullayev/todo-app-react",
      backend: "https://github.com/elmarAbdullayev/todo-app-fastapi"
    },
    image: Todo,
    color: "from-purple-500 to-pink-500"
  },
    {
    id: 3,
    title: "AI Chatbot mit Ollama",
    description: "Lokaler AI-Chatbot mit Benutzer-Authentifizierung. Nutzt Ollama für KI-Antworten und bietet eine sichere, containerisierte Chat-Umgebung.",
    longDescription: "Full-Stack AI-Chatbot-Anwendung mit lokaler KI-Integration (Ollama). Implementiert sichere Benutzer-Authentifizierung und speichert Chat-Verläufe in SQLite. Vollständig containerisiert mit Docker.",
    tech: ["React", "FastAPI", "Ollama", "SQLite3", "Docker", "JWT"],
    features: [
      "Lokale KI mit Ollama",
      "JWT-Authentifizierung",
      "Chat-Verlauf Speicherung",
      "Docker Containerisierung"
    ],
    github: {
      frontend: "https://github.com/elmarAbdullayev/ai-chatbot-frontend",
      backend: "https://github.com/elmarAbdullayev/ai-chatbot-backend"
    },
    image: Chatbot,
    color: "from-emerald-500 to-teal-500"
  },
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
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
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Eine Auswahl meiner Full-Stack-Projekte, die moderne Technologien und Best Practices demonstrieren
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`absolute -inset-4 bg-gradient-to-r ${project.color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
    
                  <div className="relative rounded-2xl overflow-hidden border border-dark-border bg-dark-card">
                    <div className="aspect-video bg-gradient-to-br from-dark-bg to-dark-card ">
                      <div className="text-center p-8">
                         <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                        <p className="text-gray-600 text-xs mt-2">{project.title}</p>
                      </div>
                    </div>
                    
                
                    
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  
                  {/* Title */}
                  <div>
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
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-gray-300">
                          <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      Tech Stack
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
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border rounded-lg hover:border-primary/50 transition-all duration-300 group/btn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-sm font-medium">Frontend Code</span>
                    </a>

                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border rounded-lg hover:border-secondary/50 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-sm font-medium">Backend Code</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;