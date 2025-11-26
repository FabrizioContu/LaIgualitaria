import { Link } from "react-router-dom";
import { useLatestPosts } from "@/hooks/useLatestPosts";

function Blog() {
  // pedir muchos posts para "todos" (ajusta perPage si tienes más)
  const { posts, loading, error } = useLatestPosts(100);

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-2xl font-bold">Blog</h1>
        <p className="mt-4 text-red-600">
          Error carregant entrades: {error.message}
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Blog
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Totes les notícies i entrades de la cooperativa.
        </p>
      </header>

      <section className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 9 }).map((_, i) => (
              <article key={i} className="animate-pulse space-y-3">
                <div className="h-44 w-full bg-gray-200 rounded-md" />
                <div className="h-4 bg-gray-200 w-3/4 rounded" />
                <div className="h-3 bg-gray-200 w-full rounded" />
              </article>
            ))
          : posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-lg border bg-white"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src={post.featuredImage ?? "/placeholder.png"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-4 flex-1 flex flex-col">
                  <time className="text-xs text-gray-500">{post.date}</time>

                  <h2 className="mt-2 text-lg font-semibold text-gray-900">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    <span dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  </p>

                  <div className="mt-6">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Llegir més →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
      </section>
    </main>
  );
}

export default Blog;
