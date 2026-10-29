import Benchmarking from "../assets/images/Benchmarking.png";
import Todo from "../assets/images/Todo.png";
import Chatbot from "../assets/images/ChatBot.png";
import LebenslaufKlar from "../assets/images/lebenslaufklar.webp";
import MenuScreen from "../assets/images/menu-screen.webp";
import M365Intranet from "../assets/images/m365-intranet.webp";
import N8nBewerbung from "../assets/images/n8n-bewerbung.webp";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "github" | "video";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  image: string;
  imageAlt: string;
  color: string;
};

// The newest projects get the big layout; a project without public code says why in "note"
export type FeaturedProject = Project & {
  badge: string;
  period: string;
  features: string[];
  note?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "lebenslaufklar",
    title: "LebenslaufKlar",
    badge: "KI-Web-App · Prototyp",
    period: "Oktober 2026",
    description: "Kostenlose Web-App für Bewerbungen: Sie prüft einen Lebenslauf so, wie ein Bewerber-Programm (ATS) ihn liest, und erstellt neue Lebensläufe und Anschreiben in 11 Sprachen – ohne Konto, die Daten bleiben im Browser.",
    features: [
      "Zwei Noten: Programm-Note (Prüfung im Code) und Mensch-Note (KI)",
      "„Röntgenblick“ zeigt den Text, den ein Bewerber-Programm wirklich liest",
      "Die KI fragt nach, statt etwas zu erfinden; PDF mit Live-Vorschau",
      "Datenschutz: kein Konto, keine Cookies, keine gespeicherten Lebensläufe",
      "75 automatisierte Tests mit pytest"
    ],
    tech: ["React", "TypeScript", "FastAPI", "Python", "Claude API", "fpdf2", "SQLite", "pytest"],
    links: [],
    note: "Code auf Anfrage · noch nicht online",
    image: LebenslaufKlar,
    imageAlt: "LebenslaufKlar: Prüfergebnis mit Programm-Note und Mensch-Note, daneben der Lebenslauf-Editor mit Vorschau",
    color: "from-teal-400 to-sky-500"
  },
  {
    id: "menu-screen",
    title: "Speisekarte mit WhatsApp-Bot",
    badge: "WhatsApp-Bot · Prototyp",
    period: "Oktober 2026",
    description: "Digitale Speisekarte für den Fernseher im Imbiss: Der Inhaber schreibt per WhatsApp „Adana Dürüm 10,50“, bestätigt mit einem Knopf – und TV und Handy-Speisekarte zeigen nach wenigen Sekunden den neuen Preis.",
    features: [
      "TV-Ansicht, Handy-Speisekarte per QR-Code und Tagesangebote",
      "WhatsApp Cloud API: Webhook mit Signaturprüfung, nur freigegebene Nummern",
      "Ein Preis ändert sich erst nach Bestätigung (Evet / Hayır)",
      "Jeder Laden ist eine Datei: eigenes Design, eigene SQLite-Datenbank",
      "20 automatisierte Tests mit pytest"
    ],
    tech: ["React", "FastAPI", "Python", "SQLite", "WhatsApp Cloud API", "Cloudflare Tunnel", "pytest"],
    links: [],
    note: "Code auf Anfrage",
    image: MenuScreen,
    imageAlt: "Speisekarte auf einem Fernseher, daneben ein Handy mit der Bestätigungsfrage des WhatsApp-Bots",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: "m365-intranet",
    title: "Intranet auf Microsoft 365",
    badge: "Ehrenamtlich · Microsoft 365",
    period: "seit Oktober 2026",
    description: "Für eine gemeinnützige Organisation in Kanada baue ich ehrenamtlich ein Intranet mit SharePoint und Teams. Es entsteht per Skript aus Konfigurationsdateien: erst im Test-Tenant geprüft, dann unverändert in Produktion.",
    features: [
      "Infrastruktur als Code: 50 Sites und Hubs, Rechte und Seiten aus CSV und JSON",
      "14 wiederholbare Deploy-Schritte mit PowerShell und PnP",
      "8 eigene SPFx-Webparts mit React und TypeScript",
      "Sicherheit: Rechte nach Rollen (Entra ID), Audit-Log, Freigaben nur intern",
      "Datenumzug: über 3.700 Dateien (154 GB) ohne Fehler kopiert"
    ],
    tech: ["SharePoint Online", "Microsoft Teams", "Entra ID", "PowerShell", "PnP.PowerShell", "SPFx", "React", "TypeScript"],
    links: [],
    note: "Code privat · Inhalte vertraulich",
    image: M365Intranet,
    imageAlt: "Schema: Konfiguration, PowerShell mit PnP, Test und Produktion; 50 Sites, 12 Sicherheitsgruppen, 8 Webparts, 14 Deploy-Schritte",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "n8n-bewerbung",
    title: "Bewerbungs-Automatisierung mit n8n",
    badge: "Automatisierung · KI",
    period: "August 2026",
    description: "Ein Bewerbungsprozess als n8n-Workflow: Kandidaten füllen ein React-Formular aus, bestätigen ihre E-Mail und ergänzen ihr Profil. Die Personalabteilung bekommt eine KI-Zusammenfassung als PDF per Gmail.",
    features: [
      "4 Webhooks und 59 Nodes: Prüfung, PostgreSQL, Bestätigungs-Links",
      "Bestätigungs-E-Mails in drei Sprachen (Deutsch, Englisch, Spanisch)",
      "Ein Groq-LLM schreibt die Zusammenfassung nur aus den Angaben des Kandidaten",
      "PDF mit Gotenberg (Docker), Versand über die Gmail API"
    ],
    tech: ["n8n", "React", "TypeScript", "PostgreSQL", "Groq", "Gotenberg", "Docker", "Gmail API"],
    links: [
      { label: "Code", href: "https://github.com/elmarAbdullayev/bewerbung-automatisierung", kind: "github" },
      { label: "Demo-Video", href: "https://www.loom.com/share/80a6dece5d344ecab8f9484071cac869", kind: "video" }
    ],
    image: N8nBewerbung,
    imageAlt: "Schema des n8n-Workflows: Formular, Webhook, Prüfung, PostgreSQL und E-Mail; danach Link, Token, Profil, KI-Text, PDF und Gmail",
    color: "from-pink-500 to-orange-400"
  }
];

export const moreProjects: Project[] = [
  {
    id: "task-manager",
    title: "Task Management System",
    description: "Sichere Aufgabenverwaltung mit JWT-Authentifizierung: Jeder Benutzer verwaltet seine eigenen Tasks mit CRUD-Operationen, Filter und Suche.",
    tech: ["React", "TypeScript", "Redux", "FastAPI", "MySQL", "Alembic"],
    links: [
      { label: "Frontend", href: "https://github.com/elmarAbdullayev/todo-app-react", kind: "github" },
      { label: "Backend", href: "https://github.com/elmarAbdullayev/todo-app-fastapi", kind: "github" }
    ],
    image: Todo,
    imageAlt: "Task Management System",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "benchmark",
    title: "Server Benchmarking Tool",
    description: "Aus dem Praktikum bei HITeC: vergleicht FastAPI-Server (Uvicorn und Gunicorn) unter Last – Antwortzeiten, Fehlerquoten und Ressourcen in Echtzeit, Export als CSV.",
    tech: ["React", "TypeScript", "FastAPI", "MySQL"],
    links: [
      { label: "Frontend", href: "https://github.com/elmarAbdullayev/benchmark-frontend", kind: "github" },
      { label: "Backend", href: "https://github.com/elmarAbdullayev/benchmark-backend", kind: "github" }
    ],
    image: Benchmarking,
    imageAlt: "Server Benchmarking Tool",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "chatbot",
    title: "AI Chatbot mit Ollama",
    description: "Lokaler KI-Chatbot mit Benutzer-Login: Ollama beantwortet die Fragen, der Chat-Verlauf liegt in SQLite, alles läuft in Docker-Containern.",
    tech: ["React", "FastAPI", "Ollama", "SQLite", "Docker", "JWT"],
    links: [
      { label: "Frontend", href: "https://github.com/elmarAbdullayev/chatbot-frontend", kind: "github" },
      { label: "Backend", href: "https://github.com/elmarAbdullayev/chatbot-backend", kind: "github" }
    ],
    image: Chatbot,
    imageAlt: "AI Chatbot mit Ollama",
    color: "from-emerald-500 to-teal-500"
  }
];
