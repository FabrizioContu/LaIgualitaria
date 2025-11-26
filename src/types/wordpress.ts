export interface WP_Rendered {
  rendered: string;
}

export interface WP_Post {

  _embedded: [];
  featuredImage: string | null;
  id: number;
  slug: string;
  date: string;
  datetime: string;
  title: WP_Rendered;
  content: WP_Rendered;
  excerpt: WP_Rendered;
}

export type WP_Page = WP_Post;

export interface WP_Proveedor {
  id: number;
  slug: string;
  title: WP_Rendered;
  acf?: Record<string, unknown>;
}

export interface WP_Producto {
  id: number;
  slug: string;
  title: WP_Rendered;
  content: WP_Rendered;
  acf?: Record<string, unknown>;
}


