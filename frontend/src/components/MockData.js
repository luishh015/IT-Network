// Mock Data für IT-Beratungsseite
export const mockTestimonials = [
  {
    id: 1,
    name: "Klaus Müller",
    company: "TechStart GmbH",
    position: "CTO",
    content: "Dank der IT-Beratung konnten wir unsere Serverinfrastruktur um 40% effizienter gestalten. Hervorragende Arbeit!",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    name: "Sarah Weber",
    company: "Digital Solutions AG",
    position: "IT-Leiterin",
    content: "Die Cloud-Migration war dank der professionellen Beratung reibungslos. Sehr empfehlenswert!",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    name: "Michael Schmidt",
    company: "InnovateTech",
    position: "Geschäftsführer",
    content: "Unsere Cybersecurity wurde komplett überarbeitet. Fühlen uns jetzt viel sicherer!",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const mockCaseStudies = [
  {
    id: 1,
    title: "Cloud-Migration für Mittelstand",
    description: "Erfolgreiche Migration von 50+ Mitarbeitern in die Cloud mit 99.9% Uptime",
    industry: "Fertigungsindustrie",
    downloadUrl: "/downloads/case-study-cloud-migration.pdf",
    image: "https://images.unsplash.com/photo-1573166364366-3f4f8b1857ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxJVCUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzUyODQ3ODcwfDA&ixlib=rb-4.1.0&q=85",
    tags: ["Cloud", "Migration", "Mittelstand"]
  },
  {
    id: 2,
    title: "Cybersecurity-Strategie für Startup",
    description: "Implementierung einer umfassenden Sicherheitsstrategie für schnell wachsendes Startup",
    industry: "FinTech",
    downloadUrl: "/downloads/case-study-cybersecurity.pdf",
    image: "https://images.unsplash.com/photo-1637855195094-992d3d578f42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxJVCUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzUyODQ3ODcwfDA&ixlib=rb-4.1.0&q=85",
    tags: ["Cybersecurity", "Startup", "FinTech"]
  },
  {
    id: 3,
    title: "Digitale Transformation Einzelhandel",
    description: "Vollständige Digitalisierung der Geschäftsprozesse für Einzelhandelskette",
    industry: "Einzelhandel",
    downloadUrl: "/downloads/case-study-digital-transformation.pdf",
    image: "https://images.pexels.com/photos/6804084/pexels-photo-6804084.jpeg",
    tags: ["Digitalisierung", "Einzelhandel", "Transformation"]
  }
];

export const mockBlogPosts = [
  {
    id: 1,
    title: "5 Trends in der IT-Sicherheit 2025",
    excerpt: "Erfahren Sie, welche Cybersecurity-Trends in diesem Jahr besonders wichtig werden und wie Sie sich darauf vorbereiten können.",
    author: "Dr. Thomas Becker",
    date: "2025-01-15",
    readTime: "5 min",
    category: "Cybersecurity",
    image: "https://images.pexels.com/photos/5710516/pexels-photo-5710516.jpeg"
  },
  {
    id: 2,
    title: "Cloud-First vs. Hybrid: Was ist richtig für Sie?",
    excerpt: "Ein detaillierter Vergleich verschiedener Cloud-Strategien und deren Vor- und Nachteile für Ihr Unternehmen.",
    author: "Lisa Hoffmann",
    date: "2025-01-10",
    readTime: "7 min",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1573166364366-3f4f8b1857ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxJVCUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzUyODQ3ODcwfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    title: "KI in der Unternehmens-IT: Praktische Anwendungen",
    excerpt: "Wie künstliche Intelligenz bereits heute die IT-Landschaft in Unternehmen revolutioniert.",
    author: "Martin Krause",
    date: "2025-01-05",
    readTime: "6 min",
    category: "Künstliche Intelligenz",
    image: "https://images.unsplash.com/photo-1637855195094-992d3d578f42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxJVCUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzUyODQ3ODcwfDA&ixlib=rb-4.1.0&q=85"
  }
];

export const mockAppointmentSlots = [
  {
    id: 1,
    date: "2025-01-20",
    time: "09:00",
    available: true,
    duration: 60
  },
  {
    id: 2,
    date: "2025-01-20",
    time: "10:30",
    available: true,
    duration: 60
  },
  {
    id: 3,
    date: "2025-01-20",
    time: "14:00",
    available: false,
    duration: 60
  },
  {
    id: 4,
    date: "2025-01-21",
    time: "09:00",
    available: true,
    duration: 60
  },
  {
    id: 5,
    date: "2025-01-21",
    time: "11:00",
    available: true,
    duration: 60
  },
  {
    id: 6,
    date: "2025-01-21",
    time: "15:30",
    available: true,
    duration: 60
  }
];

export const mockServices = [
  {
    id: 1,
    title: "IT-Strategie & Beratung",
    description: "Entwicklung maßgeschneiderter IT-Strategien für Ihr Unternehmen",
    icon: "🎯",
    features: ["Strategische Planung", "Technologie-Roadmap", "Budget-Optimierung"]
  },
  {
    id: 2,
    title: "Cloud-Migration",
    description: "Sichere und effiziente Migration in die Cloud",
    icon: "☁️",
    features: ["AWS/Azure Setup", "Datenmanagement", "Skalierbare Lösungen"]
  },
  {
    id: 3,
    title: "Cybersecurity",
    description: "Umfassender Schutz vor digitalen Bedrohungen",
    icon: "🔐",
    features: ["Sicherheitsaudit", "Incident Response", "Compliance"]
  },
  {
    id: 4,
    title: "Digitale Transformation",
    description: "Modernisierung Ihrer Geschäftsprozesse",
    icon: "🚀",
    features: ["Process Automation", "Digital Workflows", "Change Management"]
  }
];

// Mock für Network Status
export const mockNetworkStatus = {
  isOnline: true,
  connectionType: "wifi",
  speed: "fast"
};

// Mock für User Authentication
export const mockUser = {
  isAuthenticated: false,
  username: "",
  email: ""
};