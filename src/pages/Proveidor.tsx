import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useProvider } from "../hooks/useProviders";
import { Spinner } from "@/components/ui/Spinner";

export const Proveidor = () => {
  const { slug } = useParams<{ slug: string }>();
  const { provider, loading, error } = useProvider(slug ?? null);

  // Scroll to top cuando cambia el slug
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const ubicacion = provider?.acf?.ubicacion ?? "";
  const web = provider?.acf?.web ?? "";
  const email = provider?.acf?.email ?? "";
  const telefono = provider?.acf?.telefono ?? "";
  const descripcion = provider?.acf?.descripcion ?? "";

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16">
        Error: {error instanceof Error ? error.message : String(error)}
      </div>
    );
  }
  if (!provider) {
    return <div>Proveïdor no encontrado</div>;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Link to="/proveidors" className="text-sm text-primary mb-4 inline-block">
        ← Tornar als proveïdors
      </Link>
      <article>
        <h1>{provider.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4 py-6">
          {ubicacion ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {ubicacion}
            </span>
          ) : null}

          {web ? (
            <a href={web} target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-200 text-gray-800 hover:bg-green-300">
                🌐 {web}
              </span>
            </a>
          ) : null}
          {email ? (
            <a href={`mailto:${email}`}>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-200 text-gray-800 hover:bg-yellow-300">
                📧 {email}
              </span>
            </a>
          ) : null}
          {telefono ? (
            <a href={`tel:${telefono}`}>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-200 text-gray-800 hover:bg-blue-300">
                📞 {telefono}
              </span>
            </a>
          ) : null}
        </div>
        {provider.featuredImage && (
          <img
            src={provider.featuredImage}
            alt={provider.featuredAlt ?? provider.title}
            className="mt-6 w-full max-h-96 object-cover rounded"
          />
        )}
        <div
          className="prose mt-6"
          dangerouslySetInnerHTML={{ __html: String(descripcion) }}
        />
      </article>
    </main>
  );
};
