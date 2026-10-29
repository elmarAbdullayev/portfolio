import { motion } from "framer-motion";
import myImage from "../assets/images/myimage.jpg";

function About() {
  return (
    <section id="about" className="scroll-mt-16 px-4 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Über mich
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-dark-card/50 backdrop-blur-lg border border-dark-border">

              <h3 className="text-2xl font-semibold text-white mb-4">
                Mein Weg in die IT
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                Ich bin
                <span className="text-primary font-semibold"> Fachinformatiker für Anwendungsentwicklung</span> (Umschulung
                bei der BBQ in Hamburg, Abschluss 2026). Davor habe ich viele Jahre direkt mit Kunden gearbeitet: im
                Kundensupport, in der Gastronomie und mit eigenen kleinen Geschäften. Deshalb denke ich bei Software
                zuerst an die Menschen, die sie benutzen.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Im Praktikum bei HITeC habe ich im Team mit
                <span className="text-secondary font-semibold"> React, FastAPI und Docker</span> entwickelt. Heute baue
                ich Web-Apps mit <span className="text-accent font-semibold">KI und Automatisierung</span> – zum Beispiel
                eine Lebenslauf-Prüfung mit der Claude API und einen WhatsApp-Bot, der Preise auf dem Laden-TV ändert.
                Ehrenamtlich richte ich außerdem ein Intranet auf Microsoft 365 ein.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Jetzt suche ich eine Stelle als <span className="text-primary font-semibold">Junior Full-Stack Developer</span>,
                am liebsten in einem Team, das mit KI und Automatisierung arbeitet.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Python", "FastAPI", "Claude API", "n8n", "PostgreSQL", "Microsoft 365"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image/Photo Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">

              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>

              {/* Photo Card */}
              <div className="relative p-8 rounded-2xl bg-dark-card border border-dark-border overflow-hidden">

                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <img
                    src={myImage}
                    alt="Elmar Abdullayev"
                    className="w-full rounded-xl"
                  />
                </div>

                {/* Info Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-dark-bg rounded-lg">
                    <div className="text-2xl font-bold text-primary">5</div>
                    <div className="text-sm text-gray-400">Sprachen</div>
                  </div>
                  <div className="text-center p-4 bg-dark-bg rounded-lg">
                    <div className="text-2xl font-bold text-secondary">15+</div>
                    <div className="text-sm text-gray-400">Projekte</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >

   <a
  href="#contact"
  className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
>
  Kontakt aufnehmen
</a>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
