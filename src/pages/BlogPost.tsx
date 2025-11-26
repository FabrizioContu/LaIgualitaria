import { useParams, Link } from "react-router-dom";
import { usePost } from "../hooks/usePost";

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = usePost(slug ?? null);

  if (loading)
    return <main className="mx-auto max-w-7xl px-6 py-16">Carregant...</main>;
  if (error)
    return (
      <main className="mx-auto max-w-7xl px-6 py-16">
        Error: {error.message}
      </main>
    );
  if (!post)
    return (
      <main className="mx-auto max-w-7xl px-6 py-16">
        Entrada no encontrada
      </main>
    );

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Link to="/blog" className="text-sm text-primary mb-4 inline-block">
        ← Tornar al blog
      </Link>

      <article>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time className="text-sm text-gray-500 block mt-2">
          {new Date(post.date).toLocaleDateString()}
        </time>

        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.featuredAlt ?? post.title}
            className="mt-6 w-full max-h-96 object-cover rounded"
          />
        )}

        <div
          className="prose mt-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}

export default BlogPost;
