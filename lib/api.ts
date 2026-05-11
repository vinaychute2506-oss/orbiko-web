const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// ─── Dummy Data for Demo Mode ──────────────────────────────────────────────────
const DUMMY_DATA = {
  settings: {
    title: "Orbiko Interiors",
    description: "Premium Interior Solutions",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-architect-working-on-a-blueprint-4112-large.mp4",
  },
  home: {
    title: "Orbiko Interiors",
    tagline: "Smart Design. Precision Execution. Timeless Results.",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-architect-working-on-a-blueprint-4112-large.mp4",
  },
  projects: [
    {
      title: "Modernist Villa",
      slug: "modernist-villa",
      featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      projectType: "Residential",
      content: "A stunning modernist villa focused on open spaces and natural light.",
      projectFields: {
        projecttype: "Residential",
        image1: { node: { sourceUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" } },
        image2: { node: { sourceUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" } },
      },
    },
    {
      title: "Corporate Oasis",
      slug: "corporate-oasis",
      featuredImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      projectType: "Commercial",
      content: "Redefining the workplace with biophilic design elements.",
      projectFields: {
        projecttype: "Commercial",
      }
    },
    {
      title: "Luxe Penthouse",
      slug: "luxe-penthouse",
      featuredImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      projectType: "Interior",
      content: "High-end interior design for a luxury penthouse in the heart of the city.",
      projectFields: {
        projecttype: "Interior",
      }
    }
  ],
  services: [
    {
      title: "Residential Interiors",
      slug: "residential-interiors",
      description: "Modern home interiors designed with smart layouts, premium finishes, seamless storage solutions, and factory-level precision detailing.",
      backgroundImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Commercial Interiors",
      slug: "commercial-interiors",
      description: "Office, café, showroom, and workspace interiors designed to enhance productivity, customer experience, and brand identity.",
      backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Turnkey Renovation Solutions",
      slug: "turnkey-renovations",
      description: "Upgrade outdated spaces with modern layouts, premium finishes, improved functionality, and seamless end-to-end execution.",
      backgroundImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    }
  ],
  posts: [
    {
      title: "The Future of Sustainable Design",
      slug: "future-sustainable-design",
      date: "May 10, 2025",
      featuredImage: "https://images.unsplash.com/photo-1518005020473-eb89d38f2923?auto=format&fit=crop&q=80&w=1200",
      category: "Sustainability",
      content: "Exploring how green architecture is shaping our cities for a better tomorrow.",
    },
    {
      title: "Minimalism in Modern Homes",
      slug: "minimalism-modern-homes",
      date: "June 15, 2025",
      featuredImage: "https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=1200",
      category: "Trends",
      content: "Less is more: why minimalism continues to dominate interior design trends.",
    }
  ],
  sponsors: [
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
  ]
};

// ─── TypeScript Interfaces ────────────────────────────────────────────────────

export interface Project {
  title: string;
  slug: string;
  featuredImage: string | null;
  projectType?: string | null;
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

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  featuredImage: string | null;
  excerpt?: string | null;
  content?: string | null;
  category?: string;
  categories?: {
    nodes: {
      name: string;
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

// ─── Utils ──────────────────────────────────────────────────────────────────

async function fetchGraphQL(query: string, variables?: Record<string, unknown>) {
  if (!API_URL) return null;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    if (json.errors) {
      console.error("GraphQL Query Error:", json.errors[0]?.message);
      return json.data ?? null;
    }

    return json.data ?? null;
  } catch (error) {
    console.error("GraphQL Connection Error:", error);
    return null;
  }
}

// ─── Homepage & Site Settings ────────────────────────────────────────────────

export async function getHomePage() {
  const query = `
    query GetHomePage {
      pageBy(uri: "home") {
        title
        homeSettings {
          tagline
          herovideo {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query);
    if (!data?.pageBy) throw new Error("No data");

    return {
      title: data.pageBy.title ?? DUMMY_DATA.home.title,
      tagline: data.pageBy.homeSettings?.tagline ?? DUMMY_DATA.home.tagline,
      heroVideo: data.pageBy.homeSettings?.herovideo?.node?.mediaItemUrl ?? DUMMY_DATA.home.heroVideo,
    };
  } catch {
    return DUMMY_DATA.home;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const query = `
    query GetSiteSettings {
      generalSettings {
        title
        description
      }
    }
  `;

  try {
    const [settingsData, homeData] = await Promise.all([
      fetchGraphQL(query),
      getHomePage(),
    ]);

    return {
      title: settingsData?.generalSettings?.title ?? DUMMY_DATA.settings.title,
      description: settingsData?.generalSettings?.description ?? DUMMY_DATA.settings.description,
      heroVideo: homeData?.heroVideo ?? DUMMY_DATA.settings.heroVideo,
    };
  } catch {
    return DUMMY_DATA.settings;
  }
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export async function getProjects(): Promise<any> {
  const query = `
    query GetProjects {
      projects(first: 50) {
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          projectFields {
            projecttype
          }
          serviceTypes {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query);
    if (!data?.projects) throw new Error("No projects");
    return data;
  } catch {
    return { projects: { nodes: DUMMY_DATA.projects } };
  }
}

export async function getRecentProjects(count = 4): Promise<Project[]> {
  try {
    const data = await getProjects();
    const nodes = data?.projects?.nodes || [];
    if (nodes.length === 0) return DUMMY_DATA.projects.slice(0, count);
    
    return nodes.slice(0, count).map((node: any) => ({
      title: node.title ?? "",
      slug: node.slug ?? "",
      featuredImage: node.featuredImage?.node?.sourceUrl ?? null,
      projectType: node.projectFields?.projecttype ?? "Architecture",
    }));
  } catch {
    return DUMMY_DATA.projects.slice(0, count);
  }
}

export async function getProjectBySlug(slug: string): Promise<any | null> {
  const query = `
    query GetProjectBySlug($slug: ID!) {
      project(id: $slug, idType: SLUG) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        projectFields {
          projecttype
          image1 { node { sourceUrl } }
          image2 { node { sourceUrl } }
          image3 { node { sourceUrl } }
          image4 { node { sourceUrl } }
          image5 { node { sourceUrl } }
        }
        serviceTypes {
          nodes {
            name
            slug
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query, { slug });
    if (!data?.project) throw new Error("Not found");
    return data.project;
  } catch {
    return DUMMY_DATA.projects.find(p => p.slug === slug) || DUMMY_DATA.projects[0];
  }
}

// ─── Services ─────────────────────────────────────────────────────────────────

export async function getServices(): Promise<Service[]> {
  const query = `
    query GetServices {
      services(first: 10) {
        nodes {
          title
          slug
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query);
    const nodes = data?.services?.nodes ?? [];
    if (nodes.length === 0) throw new Error("No services");
    
    return nodes.map((node: any) => ({
      title: node.title,
      slug: node.slug,
      description: node.content?.replace(/<[^>]*>?/gm, "").slice(0, 160) + "...",
      backgroundImage: node.featuredImage?.node?.sourceUrl ?? null,
    }));
  } catch {
    return DUMMY_DATA.services;
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const query = `
    query GetServiceBySlug($slug: ID!) {
      service(id: $slug, idType: SLUG) {
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query, { slug });
    const node = data?.service;
    if (!node) throw new Error("Not found");

    return {
      title: node.title,
      slug: node.slug,
      description: node.content,
      backgroundImage: node.featuredImage?.node?.sourceUrl ?? null,
    };
  } catch {
    return DUMMY_DATA.services.find(s => s.slug === slug) || DUMMY_DATA.services[0];
  }
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export async function getPosts(): Promise<BlogPost[]> {
  const query = `
    query AllPosts {
      posts(first: 20) {
        nodes {
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query);
    if (!data?.posts?.nodes || data.posts.nodes.length === 0) throw new Error("No posts");

    return data.posts.nodes.map((node: any) => ({
      title: node.title ?? "",
      slug: node.slug ?? "",
      date: new Date(node.date).toLocaleDateString(),
      featuredImage: node.featuredImage?.node?.sourceUrl ?? null,
      category: node.categories?.nodes?.[0]?.name ?? "Article",
    }));
  } catch {
    return DUMMY_DATA.posts;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `
    query PostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        slug
        content
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query, { id: slug });
    if (!data?.post) throw new Error("Not found");

    const node = data.post;
    return {
      title: node.title ?? "",
      slug: node.slug ?? "",
      content: node.content ?? null,
      date: new Date(node.date).toLocaleDateString(),
      featuredImage: node.featuredImage?.node?.sourceUrl ?? null,
      categories: node.categories,
    };
  } catch {
    return DUMMY_DATA.posts.find(p => p.slug === slug) || DUMMY_DATA.posts[0];
  }
}

// ─── Sponsors ─────────────────────────────────────────────────────────────────

export async function getSponsors(): Promise<any[]> {
  const query = `
    query GetSponsors {
      sponsors(first: 20) {
        nodes {
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query);
    if (!data?.sponsors?.nodes || data.sponsors.nodes.length === 0) throw new Error("No sponsors");
    return data.sponsors.nodes;
  } catch {
    return DUMMY_DATA.sponsors;
  }
}