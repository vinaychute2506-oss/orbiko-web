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
    title: "Vihaan Heart and Super specialty Hospital",
    slug: "vihaan-heart-hospital",
    featuredImage: "/images/commercial_hero.png",
    projectType: "Healthcare",
    content: "A state-of-the-art 42,000 Sq. ft. healthcare facility featuring optimized patient flow layouts, sterile environments, premium wall cladding, and integrated acoustic ceiling configurations to promote patient healing and operational efficiency.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/commercial_hero.png" } },
      image2: { node: { sourceUrl: "/images/commercial_service.png" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Indiabulls, Delhi",
    slug: "indiabulls-delhi",
    featuredImage: "/images/commercial_service.png",
    projectType: "Corporate Office",
    content: "Over 25,000+ Sq. ft. of modern corporate interiors in Delhi. Outfitted with high-density open layout desking, integrated wire-management raceways, smart acoustic partition booths, and custom premium veneer boardrooms.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/commercial_service.png" } },
      image2: { node: { sourceUrl: "/images/about_partner.png" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "SDM Ayurveda College Bangalore",
    slug: "sdm-ayurveda-college",
    featuredImage: "/images/about_partner.png",
    projectType: "Institutional",
    content: "Comprehensive educational and institutional interior design completed for the SDM Ayurveda College in Bangalore. Includes custom wooden lecture theater seating, holistic lobby design, and spacious administrative office configurations.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/about_partner.png" } },
      image2: { node: { sourceUrl: "/images/about_hero.png" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Amoeba Game Zone Pune, Gurgaon, Noida & Kolkata",
    slug: "amoeba-game-zone",
    featuredImage: "/images/turnkey_hero_after.png",
    projectType: "Gaming & Entertainment",
    content: "A multi-city gaming and family entertainment arena spanning over 20,000+ Sq. ft. in each location (Pune, Gurgaon, Noida, Kolkata). Features high-load custom steel partition frames, ambient LED strip channels, and heavy-duty, commercial-grade acoustic ceilings.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/turnkey_hero_after.png" } },
      image2: { node: { sourceUrl: "/images/home_hero.png" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Aqua Retreat Falta, WB",
    slug: "aqua-retreat-falta",
    featuredImage: "/images/home_hero.png",
    projectType: "Leisure & Hospitality",
    content: "A gorgeous 20,000 Sq. ft. tourist resort layout in Falta, West Bengal. Employs outdoor-grade water-resistant wood decking, custom poolside dining frameworks, and a modern welcoming reception lounge.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/home_hero.png" } },
      image2: { node: { sourceUrl: "/images/residential_hero.png" } },
    },
    serviceTypes: {
      nodes: [
        { name: "Commercial", slug: "commercial" }
      ]
    }
  },
  {
    title: "Teo lounge & Bar Punjabi Bagh",
    slug: "teo-lounge-bar",
    featuredImage: "/images/craftsmanship.png",
    projectType: "Hospitality & Bar",
    content: "Spanning 25,000 Sq. ft. of luxury hospitality layout in Punjabi Bagh. Features custom brass liquor display shelving, bespoke velvet lounges, backlit quartz accent pillars, and premium ambient sound-dampening structures.",
    projectFields: {
      projecttype: "Commercial",
      image1: { node: { sourceUrl: "/images/craftsmanship.png" } },
      image2: { node: { sourceUrl: "/images/turnkey_service.png" } },
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