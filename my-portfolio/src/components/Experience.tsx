import { motion } from "framer-motion";

type Station = {
  period: string;
  title: string;
  place: string;
  points: string[];
};

// Newest first, the same dates as in the CV
const stations: Station[] = [
  {
    period: "seit 10/2026",
    title: "Microsoft-365-Entwickler (ehrenamtlich)",
    place: "Gemeinnützige Organisation in Kanada · remote",
    points: [
      "Intranet in SharePoint Online mit Hub-Sites, Navigation und Teams",
      "Eigene SPFx-Webparts mit React und TypeScript",
      "Automatisierte Bereitstellung und Tests mit PnP PowerShell und Git",
      "Tenant-Administration: Berechtigungen, Gruppen und Sicherheit"
    ]
  },
  {
    period: "07/2026 – 10/2026",
    title: "Weiterbildung: KI-Automation und AI-Agenten mit n8n",
    place: "Udemy",
    points: [
      "LLM-Anwendungen, AI-Agenten und automatisierte Workflows",
      "Eigenes Projekt: Bewerbungs-Automatisierung"
    ]
  },
  {
    period: "04/2025 – 01/2026",
    title: "Fullstack-Entwickler (Praktikum)",
    place: "HITeC – Hamburger Informatik Technologie-Center",
    points: [
      "Webanwendung mit React, FastAPI, REST-APIs und MySQL",
      "Benchmark-Projekt: Uvicorn gegen Gunicorn, Container mit Docker",
      "Versionsverwaltung mit Git, Mitarbeit im Scrum-Team"
    ]
  },
  {
    period: "01/2024 – 01/2026",
    title: "Umschulung: Fachinformatiker für Anwendungsentwicklung",
    place: "BBQ – Baumann Bildung und Qualifizierung, Hamburg",
    points: [
      "Programmierung, Datenbanken, Netzwerke (CCNA), Linux, Windows Server",
      "Klassisches und agiles Projektmanagement"
    ]
  },
  {
    period: "2016 – 2022",
    title: "Kundenservice, Gastronomie und Selbstständigkeit",
    place: "Kyiv und Baku",
    points: [
      "Kundensupport für Ein- und Auszahlungen per Telefon und Chat",
      "Restaurantleitung und eigenes Gaming-Café",
      "Online-Handel über Instagram"
    ]
  },
  {
    period: "2019",
    title: "Bachelor Verkehrstechnologie",
    place: "Nationale Universität für Verkehrswesen, Kyiv",
    points: ["In Deutschland anerkannt"]
  }
];

const certificates = ["SCRUM Foundation", "SCRUM Master", "Linux Essentials"];

function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 px-4 py-24">
      <div className="max-w-4xl mx-auto w-full">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Erfahrung & Ausbildung
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Vom Kundenservice in die Softwareentwicklung
        </motion.p>

        {/* Timeline */}
        <ol className="relative ml-3 border-l border-dark-border space-y-10">
          {stations.map((station, index) => (
            <motion.li
              key={station.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative pl-8"
            >
              <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-dark-bg"></span>
              <p className="text-sm font-medium text-primary">{station.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{station.title}</h3>
              <p className="text-sm text-gray-400">{station.place}</p>
              <ul className="mt-3 space-y-1.5 text-gray-300">
                {station.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-accent" aria-hidden="true">–</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 p-6 rounded-2xl bg-dark-card border border-dark-border flex flex-wrap items-center gap-3"
        >
          <span className="mr-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">Zertifikate</span>
          {certificates.map((certificate) => (
            <span key={certificate} className="px-3 py-1.5 bg-dark-bg text-gray-300 rounded-lg text-sm border border-dark-border">
              {certificate}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;
