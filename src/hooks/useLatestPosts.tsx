import { useEffect, useState, useCallback } from "react";
import { getLatestPost } from "@/lib/wp";

type LatestPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  datetime: string;
  slug: string;
  featuredImage: string | null;
};

export function useLatestPosts(perPage = 3) {
  const [posts, setPosts] = useState<LatestPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data: LatestPost[] = await getLatestPost({ perPage });
      setPosts(data);
    } catch (e: unknown) {
      // Normalize unknown to Error
      setError(e instanceof Error ? e : new Error(String(e)));
    } finally {
      setLoading(false);
    }
  }, [perPage]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, loading, error, refresh: fetchPosts };
}
