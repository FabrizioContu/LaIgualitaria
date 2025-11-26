/* eslint-disable @typescript-eslint/no-explicit-any */

import type { WP_Post } from "@/types/wordpress";

export type ProviderShape = {
  id: number;
  slug: string;
  title: string;
  content: string;  // ← Asegúrate de que es string, no unknown
  excerpt: string;  // ← Asegúrate de que es string, no unknown
  featuredImage: string | null;
  featuredAlt?: string | null;
  acf?: Record<string, any>;
};

export type ProductShape = {
  id: number;
  slug: string;
  title: string;
  content: string;  // ← string
  excerpt: string;  // ← string
  featuredImage: string | null;
  acf?: Record<string, any>;
};

const domain = import.meta.env.VITE_WP_DOMAIN ?? "";
if (!domain) throw new Error("VITE_WP_DOMAIN no definida en .env");
const API_URL = `${domain.replace(/\/$/,'')}/wp-json/wp/v2`;

console.log(API_URL);

// helper fetch seguro
async function fetchJSON(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error fetching ${url}: ${res.status}`);
  return res.json();
}


function extractFeaturedImage(post: any): string | null {
  const embedded = post?._embedded;
  const media = embedded?.["wp:featuredmedia"]?.[0];
  return media?.source_url ?? post?.featured_image_url ?? null;
}


export const getPageBySlug = async (slug: string) => {
  const response = await fetch(`${API_URL}/pages?slug=${slug}&_embed`);
  if (!response.ok) throw new Error("Error fetching page");
  const [data] = await response.json();
  const { title: { rendered: title }, content: { rendered: content } } = data;
  return [title, content];
};

// posts
export const getLatestPost = async ({perPage = 10}:{perPage?:number} ) => {
  const response = await fetch(`${API_URL}/posts?per_page=${perPage}&_embed`);
  if (!response.ok) throw new Error("Error fetching posts");

  const results: WP_Post[] = await response.json();

  return results.map((post) => {
    const { id, title: { rendered: title }, excerpt: { rendered: excerpt }, date, slug } = post;
    const featuredImage = extractFeaturedImage(post);
    return {
      id,
      title,
      excerpt,
      date,
      datetime: new Date(date).toISOString(),
      slug,
      featuredImage,
    };
  });
};

export const getPostBySlug = async (slug: string) => {
  const response = await fetch(`${API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`);
  if (!response.ok) throw new Error("Error fetching post");
  const [post] = await response.json();
  if (!post) return null;


  const media = (post as any)?._embedded?.["wp:featuredmedia"]?.[0] ?? null;
  const featuredImage = media?.source_url ?? null;
  const featuredAlt = media?.alt_text ?? media?.title?.rendered ?? null;

  return {
    id: post.id,
    slug: post.slug,
    date: post.date,
    title: post.title.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt?.rendered ?? "",
    featuredImage,
    featuredAlt,
  } as const;
};

// ---------------- Providers & Products ----------------

function normalizeProvider(p: any): ProviderShape {
  const featured = extractFeaturedImage(p);
  return {
    id: p.id,
    slug: p.slug,
    title: p.title?.rendered ?? "",
    content: p.content?.rendered ?? "",
    excerpt: p.excerpt?.rendered ?? "",
    featuredImage: featured,
    featuredAlt: (p as any)?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ?? p?.featured_image_alt ?? null,
    acf: p.acf ?? {},
  };
}

function normalizeProduct(p: any): ProductShape {
  const featured = extractFeaturedImage(p);
  return {
    id: p.id,
    slug: p.slug,
    title: p.title?.rendered ?? "",
    content: p.content?.rendered ?? "",
    excerpt: p.excerpt?.rendered ?? "",
    featuredImage: featured,
    acf: p.acf ?? {},
  };
}

export const getProviders = async (perPage = 100): Promise<ProviderShape[]> => {
  const url = `${API_URL}/proveidors?per_page=${perPage}&_embed`;
  const results = await fetchJSON(url);
  return (results as any[]).map(normalizeProvider);
};

export const getProviderBySlug = async (slug: string): Promise<ProviderShape | null> => {
  const url = `${API_URL}/proveidors?slug=${encodeURIComponent(slug)}&_embed`;
  const results = await fetchJSON(url);
  const p = results[0];
  if (!p) return null;
  return normalizeProvider(p);
};

export const getProducts = async (perPage = 100): Promise<ProductShape[]> => {
  const url = `${API_URL}/productos?per_page=${perPage}&_embed`;
  const results = await fetchJSON(url);
  return (results as any[]).map(normalizeProduct);
};

export const getProductBySlug = async (slug: string): Promise<ProductShape | null> => {
  const url = `${API_URL}/productos?slug=${encodeURIComponent(slug)}&_embed`;
  const results = await fetchJSON(url);
  const p = results[0];
  if (!p) return null;
  return normalizeProduct(p);
};

export const getProductsByProvider = async (providerId: number): Promise<ProductShape[]> => {
  const products = await getProducts(100);
  return products.filter(p => {
    const prov = p.acf?.proveidor ?? p.acf?.proveidors ?? p.acf?.productor ?? null;
    if (Array.isArray(prov)) return prov.includes(providerId);
    if (typeof prov === "number") return prov === providerId;
    if (typeof prov === "string") return prov === String(providerId);
    return false;
  });
};
