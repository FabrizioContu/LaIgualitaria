// ...existing code...
import { useEffect, useState, useCallback } from "react";
import { getProviders, getProviderBySlug } from "../lib/wp";
import type { ProviderShape } from "../lib/wp";

export function useProviders(perPage = 100) {
  const [providers, setProviders] = useState<ProviderShape[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProviders(perPage);
      setProviders(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setError(e instanceof Error ? e : new Error(String(e)));
    } finally {
      setLoading(false);
    }
  }, [perPage]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { providers, loading, error, refresh: fetch };
}

export function useProvider(slug?: string | null) {
  const [provider, setProvider] = useState<ProviderShape | null>(null);
  const [loading, setLoading] = useState<boolean>(!!slug);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) return;
    let mounted = true;
    setLoading(true);
    getProviderBySlug(slug)
      .then((p) => {
        if (!mounted) return;
        setProvider(p);
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

  return { provider, loading, error };
}
