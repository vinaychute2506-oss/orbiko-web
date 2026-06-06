// ─── Hardcoded Data for High-End Minimalist Experience ──────────────────────────

export interface Project {
  title: string;
  slug: string;
  featuredImage: string | null;
  projectType?: string | null;
  content?: string | null;
  projectFields?: {
    projecttype?: string;
    image1?: { node: { sourceUrl: string } };
    image2?: { node: { sourceUrl: string } };
    image3?: { node: { sourceUrl: string } };
    image4?: { node: { sourceUrl: string } };
    image5?: { node: { sourceUrl: string } };
  };
  serviceTypes?: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
}


export interface Service {
  title: string;
  slug: string;
  description: string | null;
  backgroundImage: string | null;
}

export interface SiteSettings {
  title: string;
  description: string;
  heroVideo: string | null;
}

export interface GalleryItem {
  title?: string;
  caption?: string;
  image: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  };
}

// ─── Static Data Stores ────────────────────────────────────────────────────────

const SITE_SETTINGS: SiteSettings = {
  title: "Orbiko Studio",
  description: "Premium interior planning, modular manufacturing, and turnkey architectural executions.",
  heroVideo: "/videos/hero_video.mp4",
};

const SERVICES: Service[] = [
  {
    title: "Residential Interiors",
    slug: "residential-interiors",
    description: "Bespoke home interiors featuring smart layouts, custom master suites, modular kitchens, and premium wardrobe units fabricated in our dedicated production factories.",
    backgroundImage: "/images/residential_hero.png",
  },
  {
    title: "Commercial Interiors",
    slug: "commercial-interiors",
    description: "Corporate workspaces, cafes, visual showrooms, and experience centers designed to optimize user paths, brand identity, and long-term durability.",
    backgroundImage: "/images/commercial_hero.png",
  },
  {
    title: "Turnkey Renovation Solutions",
    slug: "turnkey-renovations",
    description: "Complete apartment and villa transformations including masonry re-structuring, plumbing revisions, modular fit-out, and premium detailing.",
    backgroundImage: "/images/turnkey_hero_after.png",
  }
];

const PROJECTS: Project[] = [
  {
    title: "Modernist Villa",
    slug: "modernist-villa",
    featuredImage: "/images/home_hero.png",
    projectType: "Residential",
    content: "A premium open-concept modernist villa design in Bangalore focusing on natural materials, warm beige color palettes, and climate-conscious ventilation panels.",
    projectFields: {
      projecttype: "Residential",
      image1: { node: { sourceUrl: "/images/residential_hero.png" } },
      image2: { node: { sourceUrl: "/images/turnkey_hero_after.png" } },
      image3: { node: { sourceUrl: "/images/home_hero.png" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Residential", slug: "residential" }
      ]
    }
  },
  {
    title: "Vihaan Heart & Super Specialty Hospital",
    slug: "vihaan-heart-super-specialty-hospital",
    featuredImage: "/images/vihaan-hospital-featured.jpg",
    projectType: "Healthcare",
    content: "Vihaan Heart & Super Specialty Hospital was envisioned as a modern healthcare facility that combines advanced medical infrastructure with patient-centric design principles. Spanning over 42,000 square feet, the project focused on creating a welcoming and stress-free environment while maintaining the highest standards of functionality, hygiene, and operational efficiency.<br/><br/>The design strategy emphasized intuitive wayfinding, natural lighting, spacious waiting lounges, premium consultation areas, and highly optimized clinical spaces. Every department was carefully planned to ensure seamless movement of patients, staff, and medical equipment while enhancing the overall healthcare experience.<br/><br/>The project incorporates modern finishes, durable materials, antimicrobial surfaces, and energy-efficient systems to create a healthcare environment that is both aesthetically refined and operationally sustainable.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/vihaan-hospital-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/vihaan-hospital-lobby.jpg" } },
      image3: { node: { sourceUrl: "/images/vihaan-hospital-corridor.jpg" } },
      image4: { node: { sourceUrl: "/images/vihaan-hospital-before.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Indiabulls Corporate Office",
    slug: "indiabulls-corporate-office-delhi",
    featuredImage: "/images/indiabulls-office-featured.jpg",
    projectType: "Corporate Office",
    content: "The Indiabulls Corporate Office project was designed to reflect the company's strong market presence, professional culture, and future-focused business vision. Spanning over 25,000 square feet, the workspace was planned to balance executive sophistication, employee productivity, and collaborative work environments.<br/><br/>The design incorporates premium materials, modern workspace planning, ergonomic solutions, and technology-enabled meeting areas. Open workstations, executive cabins, conference rooms, breakout zones, and client-facing spaces were strategically designed to create an efficient, inspiring, and high-performance workplace.<br/><br/>Special attention was given to brand integration, acoustic comfort, lighting design, and flexible workspace solutions to support evolving business needs while maintaining a premium corporate identity.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/indiabulls-office-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/indiabulls-boardroom.jpg" } },
      image3: { node: { sourceUrl: "/images/indiabulls-workspace.jpg" } },
      image4: { node: { sourceUrl: "/images/indiabulls-office-before.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "SDM Ayurveda College & Hospital",
    slug: "sdm-ayurveda-college-bangalore",
    featuredImage: "/images/sdm-ayurveda-featured.jpg",
    projectType: "Educational & Healthcare Institution",
    content: "SDM Ayurveda College & Hospital was envisioned as a modern educational and healthcare campus that seamlessly blends traditional Ayurvedic values with contemporary architecture and infrastructure. The project focused on creating an environment that supports learning, healing, research, and community engagement.<br/><br/>The design approach emphasized spacious academic blocks, advanced clinical facilities, administrative spaces, student-centric environments, and patient-friendly treatment areas. Natural materials, sustainable design strategies, and efficient space planning were incorporated throughout the campus to reflect the holistic principles of Ayurveda.<br/><br/>The result is a functional, future-ready institution that enhances educational excellence while providing a calm and welcoming healthcare experience for patients and visitors.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/sdm-ayurveda-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/sdm-ayurveda-academic-block.jpg" } },
      image3: { node: { sourceUrl: "/images/sdm-ayurveda-hospital-wing.jpg" } },
      image4: { node: { sourceUrl: "/images/sdm-ayurveda-before.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Amoeba Game Zone – Multi-City Entertainment Centers",
    slug: "amoeba-game-zone-multi-city",
    featuredImage: "/images/amoeba-game-zone-featured.jpg",
    projectType: "Entertainment & Family Recreation Center",
    content: "Amoeba Game Zone is a vibrant family entertainment destination designed to deliver immersive gaming experiences across multiple cities. This multi-location project focused on creating visually dynamic, high-energy environments that appeal to visitors of all age groups while maximizing operational efficiency and customer engagement.<br/><br/>Spanning over 20,000 square feet, the project incorporates arcade gaming zones, bowling alleys, redemption counters, VR experiences, interactive attractions, food courts, party spaces, and family activity areas. The design language combines bold colors, futuristic lighting, themed graphics, and experiential elements to create an exciting atmosphere that encourages longer visitor engagement.<br/><br/>Each location was carefully adapted to its site conditions while maintaining a consistent Amoeba brand identity across Pune, Gurugram, Noida, and Kolkata.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/amoeba-game-zone-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/amoeba-game-zone-arcade.jpg" } },
      image3: { node: { sourceUrl: "/images/amoeba-game-zone-bowling.jpg" } },
      image4: { node: { sourceUrl: "/images/amoeba-game-zone-before.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Aqua Retreat Resort & Wellness Destination",
    slug: "aqua-retreat-falta-west-bengal",
    featuredImage: "/images/aqua-retreat-featured.jpg",
    projectType: "Hospitality & Resort Development",
    content: "Aqua Retreat is a premium hospitality destination designed to offer guests a serene escape from urban life while embracing the natural beauty of Falta, West Bengal. Spread across 20,000 square feet, the project combines contemporary resort aesthetics with nature-inspired design elements to create an immersive relaxation experience.<br/><br/>The development features luxurious guest accommodations, landscaped outdoor spaces, wellness zones, recreational amenities, dining facilities, and waterfront-inspired experiences. The design philosophy focused on blending architecture with the surrounding environment while delivering comfort, elegance, and memorable guest experiences.<br/><br/>Carefully curated materials, open spaces, natural lighting, and seamless indoor-outdoor connections create an atmosphere of tranquility, making Aqua Retreat a destination for leisure, wellness, and rejuvenation.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/aqua-retreat-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/aqua-retreat-resort-view.jpg" } },
      image3: { node: { sourceUrl: "/images/aqua-retreat-wellness-zone.jpg" } },
      image4: { node: { sourceUrl: "/images/aqua-retreat-before.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Teo Lounge & Bar",
    slug: "teo-lounge-bar-punjabi-bagh",
    featuredImage: "/images/teo-lounge-featured.jpg",
    projectType: "Hospitality | Lounge, Bar & Fine Dining Venue",
    content: "Teo Lounge & Bar was conceptualized as a premium nightlife and hospitality destination that combines sophisticated interiors, immersive ambiance, and modern luxury. Spread across 25,000 square feet in the heart of Punjabi Bagh, the venue was designed to deliver a memorable experience through its distinctive atmosphere, curated lighting, and high-end finishes.<br/><br/>The project features multiple seating experiences, a signature bar, VIP lounges, private dining areas, live entertainment zones, and dynamic social spaces. The design language blends contemporary elegance with bold statement elements, creating an environment that seamlessly transitions from an upscale dining destination during the day to a vibrant nightlife venue after sunset.<br/><br/>Every aspect of the project was carefully crafted to maximize guest comfort, operational efficiency, and visual impact while reinforcing the brand's premium identity.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/teo-lounge-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/teo-main-bar.jpg" } },
      image3: { node: { sourceUrl: "/images/teo-vip-lounge.jpg" } },
      image4: { node: { sourceUrl: "/images/teo-lounge-before.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Completed Office Interiors",
    slug: "completed-office-interiors",
    featuredImage: "/images/about_banner.png",
    projectType: "Corporate Workspaces",
    content: "A selection of modern office fit-outs completed with ergonomic desking, custom-made linear lighting profiles, private acoustic focus chambers, and factory-finished executive storage cabinets.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/about_banner.png" } },
      image2: { node: { sourceUrl: "/images/commercial_hero.png" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Luxe Penthouse",
    slug: "luxe-penthouse",
    featuredImage: "/images/residential_hero.png",
    projectType: "Interior",
    content: "High-end residential interior fit-out featuring floor-to-ceiling wardrobes, quartz countertops, and smart lighting grids for a custom urban penthouse.",
    projectFields: {
      projecttype: "Interior",
      image1: { node: { sourceUrl: "/images/residential_hero.png" } },
      image2: { node: { sourceUrl: "/images/home_hero.png" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Turnover", slug: "turnover" }
      ]
    }
  }
];

const SPONSORS = [
  { title: "6d technologies", featuredImage: { node: { sourceUrl: "/logos/6d%20technologies.jpg" } } },
  { title: "Amiga Informatics", featuredImage: { node: { sourceUrl: "/logos/Amiga%20Informatics.jpg" } } },
  { title: "Athira Technologies", featuredImage: { node: { sourceUrl: "/logos/Athira%20Technologies.jpg" } } },
  { title: "Novel Office", featuredImage: { node: { sourceUrl: "/logos/Novel%20Office.jpg" } } },
  { title: "Quickbill", featuredImage: { node: { sourceUrl: "/logos/Quickbill.jpg" } } },
  { title: "adrenalin", featuredImage: { node: { sourceUrl: "/logos/adrenalin.png" } } },
  { title: "amoeba", featuredImage: { node: { sourceUrl: "/logos/amoeba.jpg" } } },
  { title: "askit", featuredImage: { node: { sourceUrl: "/logos/askit.jpg" } } },
  { title: "bbsi", featuredImage: { node: { sourceUrl: "/logos/bbsi.jpg" } } },
  { title: "bharatPe", featuredImage: { node: { sourceUrl: "/logos/bharatPe.png" } } },
  { title: "dm consultancy", featuredImage: { node: { sourceUrl: "/logos/dm%20consultancy.png" } } },
  { title: "funda space", featuredImage: { node: { sourceUrl: "/logos/funda%20space.jpg" } } },
  { title: "indiabull housing finance", featuredImage: { node: { sourceUrl: "/logos/indiabull%20housing%20finance.png" } } },
  { title: "innov", featuredImage: { node: { sourceUrl: "/logos/innov.png" } } },
  { title: "intugine", featuredImage: { node: { sourceUrl: "/logos/intugine.png" } } },
  { title: "madiba", featuredImage: { node: { sourceUrl: "/logos/madiba.jpg" } } },
  { title: "mafoi", featuredImage: { node: { sourceUrl: "/logos/mafoi.png" } } },
  { title: "mech mocha", featuredImage: { node: { sourceUrl: "/logos/mech%20mocha.png" } } },
  { title: "med life", featuredImage: { node: { sourceUrl: "/logos/med%20life.jpg" } } },
  { title: "pioneer builder", featuredImage: { node: { sourceUrl: "/logos/pioneer%20builder.jpg" } } },
  { title: "pocket space", featuredImage: { node: { sourceUrl: "/logos/pocket%20space.png" } } },
  { title: "rainmaker", featuredImage: { node: { sourceUrl: "/logos/rainmaker.png" } } },
  { title: "sany", featuredImage: { node: { sourceUrl: "/logos/sany.png" } } },
  { title: "stellaapps", featuredImage: { node: { sourceUrl: "/logos/stellaapps.jpg" } } },
  { title: "supr daily", featuredImage: { node: { sourceUrl: "/logos/supr%20daily.jpg" } } },
  { title: "thence", featuredImage: { node: { sourceUrl: "/logos/thence.png" } } },
  { title: "trell", featuredImage: { node: { sourceUrl: "/logos/trell.jpg" } } },
  { title: "udaan", featuredImage: { node: { sourceUrl: "/logos/udaan.png" } } },
  { title: "waycool", featuredImage: { node: { sourceUrl: "/logos/waycool.jpg" } } },
];

// ─── API Retrieval Functions (100% Mock / Hardcoded) ───────────────────────────

export async function getHomePage() {
  return {
    title: SITE_SETTINGS.title,
    tagline: "Smart Design. Precision Execution. Timeless Results.",
    heroVideo: SITE_SETTINGS.heroVideo,
  };
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return SITE_SETTINGS;
}

export async function getProjects(): Promise<{ projects: { nodes: Project[] } }> {
  return { projects: { nodes: PROJECTS } };
}

export async function getRecentProjects(count = 4): Promise<Project[]> {
  return PROJECTS.slice(0, count);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return PROJECTS.find(p => p.slug === slug) || PROJECTS[0];
}

export async function getServices(): Promise<Service[]> {
  return SERVICES;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return SERVICES.find(s => s.slug === slug) || SERVICES[0];
}

export async function getSponsors(): Promise<any[]> {
  return SPONSORS;
}