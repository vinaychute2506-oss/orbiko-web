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
    image6?: { node: { sourceUrl: string } };
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
      image5: { node: { sourceUrl: "/images/vihaan-hospital-reel-cover.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Indiabulls Corporate Office",
    slug: "indiabulls-corporate-office",
    featuredImage: "/images/indiabulls-office-featured.jpg",
    projectType: "Corporate Office",
    content: "The Indiabulls Corporate Office project was designed to reflect the company's strong market presence, professional culture, and future-focused business vision. Spanning over 25,000 square feet, the workspace was planned to balance executive sophistication, employee productivity, and collaborative work environments.<br/><br/>The design incorporates premium materials, modern workspace planning, ergonomic solutions, and technology-enabled meeting areas. Open workstations, executive cabins, conference rooms, breakout zones, and client-facing spaces were strategically designed to create an efficient, inspiring, and high-performance workplace.<br/><br/>Special attention was given to brand integration, acoustic comfort, lighting design, and flexible workspace solutions to support evolving business needs while maintaining a premium corporate identity.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/indiabulls-office-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/indiabulls-boardroom.jpg" } },
      image3: { node: { sourceUrl: "/images/indiabulls-workspace.jpg" } },
      image4: { node: { sourceUrl: "/images/indiabulls-office-before.jpg" } },
      image5: { node: { sourceUrl: "/images/indiabulls-office-reel-cover.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "SDM Ayurveda College Bangalore",
    slug: "sdm-ayurveda-college-bangalore",
    featuredImage: "/images/sdm-ayurveda-featured.jpg",
    projectType: "Ayurvedic hospitals",
    content: "SDM Ayurveda College Bangalore was envisioned as a modern educational and healthcare campus that seamlessly blends traditional Ayurvedic values with contemporary architecture and infrastructure. The project focused on creating an environment that supports learning, healing, research, and community engagement.<br/><br/>The design approach emphasized spacious academic blocks, advanced clinical facilities, administrative spaces, student-centric environments, and patient-friendly treatment areas. Natural materials, sustainable design strategies, and efficient space planning were incorporated throughout the campus to reflect the holistic principles of Ayurveda.<br/><br/>The result is a functional, future-ready institution that enhances educational excellence while providing a calm and welcoming healthcare experience for patients and visitors.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/sdm-ayurveda-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/sdm-ayurveda-academic-block.jpg" } },
      image3: { node: { sourceUrl: "/images/sdm-ayurveda-hospital-wing.jpg" } },
      image4: { node: { sourceUrl: "/images/sdm-ayurveda-before.jpg" } },
      image5: { node: { sourceUrl: "/images/sdm-ayurveda-reel-cover.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Amoeba Game Zone Pune, Gurgaon, Noida & Kolkata",
    slug: "amoeba-game-zone-multi-city",
    featuredImage: "/images/amoeba-game-zone-featured.jpg",
    projectType: "Corporate Office",
    content: "Amoeba Game Zone is a vibrant family entertainment destination designed to deliver immersive gaming experiences across Pune, Gurugram, Noida, and Kolkata. This multi-location project focused on creating visually dynamic, high-energy environments that appeal to visitors of all age groups while maximizing operational efficiency and customer engagement.<br/><br/>Spanning over 20,000 square feet, the project incorporates arcade gaming zones, bowling alleys, redemption counters, VR experiences, interactive attractions, food courts, party spaces, and family activity areas. The design language combines bold colors, futuristic lighting, themed graphics, and experiential elements to create an exciting atmosphere that encourages longer visitor engagement.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/amoeba-game-zone-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/amoeba-game-zone-arcade.jpg" } },
      image3: { node: { sourceUrl: "/images/amoeba-game-zone-bowling.jpg" } },
      image4: { node: { sourceUrl: "/images/amoeba-game-zone-before.jpg" } },
      image5: { node: { sourceUrl: "/images/amoeba-game-zone-reel-cover.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Aqua Retreat Falta, WB",
    slug: "aqua-retreat-falta-west-bengal",
    featuredImage: "/images/aqua-retreat-featured.jpg",
    projectType: "Residential",
    content: "Aqua Retreat is a premium hospitality destination designed to offer guests a serene escape from urban life while embracing the natural beauty of Falta, West Bengal. Spread across 20,000 square feet, the project combines contemporary resort aesthetics with nature-inspired design elements to create an immersive relaxation experience.<br/><br/>The development features luxurious guest accommodations, landscaped outdoor spaces, wellness zones, recreational amenities, dining facilities, and waterfront-inspired experiences. The design philosophy focused on blending architecture with the surrounding environment while delivering comfort, elegance, and memorable guest experiences.",
    projectFields: {
      projecttype: "Residential",
      image1: { node: { sourceUrl: "/images/aqua-retreat-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/aqua-retreat-resort-view.jpg" } },
      image3: { node: { sourceUrl: "/images/aqua-retreat-wellness-zone.jpg" } },
      image4: { node: { sourceUrl: "/images/aqua-retreat-before.jpg" } },
      image5: { node: { sourceUrl: "/images/aqua-retreat-reel-cover.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Residential", slug: "residential" }
      ]
    }
  },
  {
    title: "Teo Lounge & Bar",
    slug: "teo-lounge-bar-punjabi-bagh",
    featuredImage: "/images/teo-lounge-featured.jpg",
    projectType: "Residential",
    content: "Teo Lounge & Bar was conceptualized as a premium nightlife and hospitality destination that combines sophisticated interiors, immersive ambiance, and modern luxury. Spread across 25,000 square feet in the heart of Punjabi Bagh, the venue was designed to deliver a memorable experience through its distinctive atmosphere, curated lighting, and high-end finishes.<br/><br/>The project features multiple seating experiences, a signature bar, VIP lounges, private dining areas, live entertainment zones, and dynamic social spaces. Every aspect of the project was carefully crafted to maximize guest comfort, operational efficiency, and visual impact while reinforcing the brand's premium identity.",
    projectFields: {
      projecttype: "Residential",
      image1: { node: { sourceUrl: "/images/teo-lounge-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/teo-main-bar.jpg" } },
      image3: { node: { sourceUrl: "/images/teo-vip-lounge.jpg" } },
      image4: { node: { sourceUrl: "/images/teo-lounge-before.jpg" } },
      image5: { node: { sourceUrl: "/images/teo-lounge-reel-cover.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Intugine Bangalore",
    slug: "intugine-bangalore",
    featuredImage: "/images/intugine-featured.jpg",
    projectType: "Corporate Office",
    content: "Intugine Bangalore is a modern, high-tech corporate workspace designed to foster innovation, collaboration, and employee productivity. Spanning over 1,500 square feet, the interior layout features a sleek contemporary aesthetic with ergonomic desking, custom linear lighting, and integrated private breakout areas.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/intugine-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/intugine-workspace.jpg" } },
      image3: { node: { sourceUrl: "/images/intugine-lobby.jpg" } },
      image4: { node: { sourceUrl: "/images/intugine-before.jpg" } },
      image5: { node: { sourceUrl: "/images/intugine-reel-cover.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Orkus Regenta Lounge & Bar Hotel Pune",
    slug: "orkus-regenta-lounge-bar-pune",
    featuredImage: "/images/orkus-regenta-featured.jpg",
    projectType: "Hospitality",
    content: "The Orkus Regenta Lounge & Bar in Hotel Pune is a premium hospitality project designed to deliver a high-end social and dining experience. Covering 25,000 square feet, the layout balances cozy private seating sections with a dramatic main bar counter, custom architectural screen details, and bespoke lighting fixtures.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/orkus-regenta-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/orkus-regenta-lounge.jpg" } },
      image3: { node: { sourceUrl: "/images/orkus-regenta-bar.jpg" } },
      image4: { node: { sourceUrl: "/images/orkus-regenta-hotel.jpg" } },
      image5: { node: { sourceUrl: "/images/orkus-regenta-before.jpg" } },
      image6: { node: { sourceUrl: "/images/orkus-regenta-reel-cover.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Farmaaish Lounge & Bar Pune",
    slug: "farmaaish-lounge-bar-pune",
    featuredImage: "/images/farmaaish-lounge-featured.jpg",
    projectType: "Hospitality",
    content: "Spanning 6,000 square feet, Farmaaish Lounge & Bar in Pune offers an immersive, nature-connected hospitality vibe. The design combines customized wood claddings, outdoor-grade deck flooring, warm string lighting setups, and dedicated lounge seating layouts optimized for guest dwell time.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/farmaaish-lounge-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/farmaaish-lounge-bar.jpg" } },
      image3: { node: { sourceUrl: "/images/farmaaish-lounge-seating.jpg" } },
      image4: { node: { sourceUrl: "/images/farmaaish-lounge-interior.jpg" } },
      image5: { node: { sourceUrl: "/images/farmaaish-lounge-before.jpg" } },
      image6: { node: { sourceUrl: "/images/farmaaish-lounge-reel-cover.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "My Bar Headquarter Lucknow",
    slug: "my-bar-headquarter-lucknow",
    featuredImage: "/images/my-bar-featured.jpg",
    projectType: "Hospitality",
    content: "My Bar Headquarter in Lucknow is a spacious 15,000 square foot hospitality destination designed with a rustic, high-energy industrial theme. The space incorporates custom metal frameworks, brick wall elements, neon installations, and central bar fixtures designed to maximize guest seating and efficiency.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/my-bar-featured.jpg" } },
      image2: { node: { sourceUrl: "/images/my-bar-lounge.jpg" } },
      image3: { node: { sourceUrl: "/images/my-bar-workspace.jpg" } },
      image4: { node: { sourceUrl: "/images/my-bar-before.jpg" } },
      image5: { node: { sourceUrl: "/images/my-bar-reel-cover.jpg" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
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