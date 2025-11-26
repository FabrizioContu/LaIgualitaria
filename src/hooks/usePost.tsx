import { useEffect, useState } from "react";
import { getPostBySlug } from "@/lib/wp";

type PostShape = {
  id: number;
  slug: string;
  date: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage: string | null;
  featuredAlt?: string | null;
};

export function usePost(slug?: string | null) {
  const [post, setPost] = useState<PostShape | null>(null);
  const [loading, setLoading] = useState<boolean>(!!slug);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) return;
    let mounted = true;
    setLoading(true);
    setError(null);
    getPostBySlug(slug)
      .then((p) => {
        if (!mounted) return;
        if (!p) {
          setPost(null);
          setError(new Error("Post no encontrado"));
        } else {
          setPost(p as PostShape);
        }
      })
      .catch((e) => {
        if (!mounted) return;
        setError(e instanceof Error ? e : new Error(String(e)));
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [slug]);

  return { post, loading, error };
}
