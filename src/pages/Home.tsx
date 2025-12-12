import Participa from "../components/Participa";
import heroImage2 from "../assets/heroImage3.png";
import Comptador from "@/components/Comptador";
import { useLatestPosts } from "@/hooks/useLatestPosts";
import { getPageBySlug } from "@/lib/wp";
import { Link } from "react-router-dom";

const [title, content] = await getPageBySlug("/la-igualitaria");
function Home() {
  const { posts, loading } = useLatestPosts(3);

  return (
    <>
      <section className="relative overflow-hidden bg-blue-50">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block">Benvinguts a </span>
                <span
                  className="block"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></span>
              </h1>
              <div
                className="mt-6 max-w-lg text-xl text-gray-600"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className=" sm:h-72 md:h-96 lg:w-auto lg:h-full ratio-16/9 object-cover"
            src={heroImage2}
            alt="La Igualitària"
          />
        </div>
      </section>

      <section>
        <Comptador />
      </section>

      <section>
        <Participa />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="gradient-text">Des del nostre Blog</span>
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Mantén-te al dia amb les últimes notícies i esdeveniments de la
              nostra cooperativa.
            </p>
          </div>

          <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <article key={i} className="animate-pulse">
                    <div className="h-48 w-full bg-gray-200 rounded-lg" />
                    <div className="mt-4 h-4 bg-gray-200 w-3/4 rounded" />
                    <div className="mt-2 h-3 bg-gray-200 w-full rounded" />
                  </article>
                ))
              : posts.map((post) => (
                  <article
                    key={post.id}
                    className="flex max-w-xl flex-col items-start justify-between"
                  >
                    <div className="w-full overflow-hidden rounded-lg">
                      <img
                        src={post.featuredImage ?? "/placeholder.png"}
                        alt={post.title}
                        className="h-48 w-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>

                    <div className="flex items-center gap-x-4 text-xs mt-4">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors">
                          <span className="absolute inset-0" />
                          {post.title}
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                          {/* excerpt viene en HTML; si lo insertas como HTML, sanitiza antes */}
                          <span
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                          />
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/blog"
              className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors hover:scale-110 hover:transition"
            >
              Veure totes les entrades <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
