const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// ─── Dummy Data for Demo Mode ──────────────────────────────────────────────────
const DUMMY_DATA = {
  settings: {
    title: "Orbiko",
    description: "Premium Architecture & Interior Design Studio",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-architect-working-on-a-blueprint-4112-large.mp4",
  },
  home: {
    title: "Orbiko",
    tagline: "Defining spaces with precision and soul.",
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
      title: "Architectural Design",
      slug: "architectural-design",
      description: "Comprehensive architectural services from concept to completion, ensuring structural integrity and aesthetic excellence.",
      backgroundImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Interior Styling",
      slug: "interior-styling",
      description: "Curating bespoke interiors that reflect personality and purpose, utilizing premium materials and artisanal finishes.",
      backgroundImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Urban Planning",
      slug: "urban-planning",
      description: "Designing sustainable and functional urban environments that enhance community living and connectivity.",
      backgroundImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200",
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
    { title: "Sponsor 1", featuredImage: { node: { sourceUrl: "https://via.placeholder.com/200x100?text=Sponsor+1" } } },
    { title: "Sponsor 2", featuredImage: { node: { sourceUrl: "https://via.placeholder.com/200x100?text=Sponsor+2" } } },
    { title: "Sponsor 3", featuredImage: { node: { sourceUrl: "https://via.placeholder.com/200x100?text=Sponsor+3" } } },
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