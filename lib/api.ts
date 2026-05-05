const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

if (!API_URL) {
  console.warn("NEXT_PUBLIC_WORDPRESS_API_URL is not defined in .env.local");
}

// ─── TypeScript Interfaces ────────────────────────────────────────────────────

export interface Project {
  title: string;
  slug: string;
  featuredImage: string | null;
  projectType?: string | null;
  projectFields?: {
    projecttype?: string;
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

  const data = await fetchGraphQL(query);
  if (!data?.pageBy) return null;

  return {
    title: data.pageBy.title ?? "Orbiko",
    tagline: data.pageBy.homeSettings?.tagline ?? "Defining spaces with precision and soul.",
    heroVideo: data.pageBy.homeSettings?.herovideo?.node?.mediaItemUrl ?? null,
  };
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

  const [settingsData, homeData] = await Promise.all([
    fetchGraphQL(query),
    getHomePage(),
  ]);

  return {
    title: settingsData?.generalSettings?.title ?? "Orbiko",
    description: settingsData?.generalSettings?.description ?? "",
    heroVideo: homeData?.heroVideo ?? null,
  };
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

  return await fetchGraphQL(query);
}

export async function getRecentProjects(count = 4): Promise<Project[]> {
  const data = await getProjects();
  const nodes = data?.projects?.nodes || [];
  return nodes.slice(0, count).map((node: any) => ({
    title: node.title ?? "",
    slug: node.slug ?? "",
    featuredImage: node.featuredImage?.node?.sourceUrl ?? null,
    projectType: node.projectFields?.projecttype ?? "Architecture",
  }));
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

  const data = await fetchGraphQL(query, { slug });
  return data?.project;
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

  const data = await fetchGraphQL(query);
  const nodes = data?.services?.nodes ?? [];
  
  return nodes.map((node: any) => ({
    title: node.title,
    slug: node.slug,
    description: node.content?.replace(/<[^>]*>?/gm, "").slice(0, 160) + "...", // Clean HTML
    backgroundImage: node.featuredImage?.node?.sourceUrl ?? null,
  }));
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

  const data = await fetchGraphQL(query, { slug });
  const node = data?.service;

  if (!node) return null;

  return {
    title: node.title,
    slug: node.slug,
    description: node.content,
    backgroundImage: node.featuredImage?.node?.sourceUrl ?? null,
  };
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

  const data = await fetchGraphQL(query);
  if (!data?.posts?.nodes) return [];

  return data.posts.nodes.map((node: any) => ({
    title: node.title ?? "",
    slug: node.slug ?? "",
    date: new Date(node.date).toLocaleDateString(),
    featuredImage: node.featuredImage?.node?.sourceUrl ?? null,
    category: node.categories?.nodes?.[0]?.name ?? "Article",
  }));
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

  const data = await fetchGraphQL(query, { id: slug });
  if (!data?.post) return null;

  const node = data.post;
  return {
    title: node.title ?? "",
    slug: node.slug ?? "",
    content: node.content ?? null,
    date: new Date(node.date).toLocaleDateString(),
    featuredImage: node.featuredImage?.node?.sourceUrl ?? null,
    categories: node.categories,
  };
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

  const data = await fetchGraphQL(query);
  return data?.sponsors?.nodes ?? [];
}