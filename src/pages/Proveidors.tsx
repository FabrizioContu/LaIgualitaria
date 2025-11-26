import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { useProviders } from "@/hooks/useProviders";
import { Link } from "react-router-dom";

const Proveidors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const { providers, loading, error } = useProviders(50);

  // Construir categorias dinámicamente desde ACF
  const categories = useMemo(() => {
    const map = new Map<string, string>();
    map.set("all", "Tots");
    providers.forEach((p) => {
      const tipus = (p.acf?.tipus ?? "").toString().trim();
      if (tipus) map.set(tipus, tipus);
    });
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  }, [providers]);

  // Filtrar por búsqueda y categoría
  const filteredProviders = useMemo(() => {
    return providers.filter((p) => {
      const matchesSearch = [
        p.title,
        p.excerpt,
        p.content,
        p.acf?.ubicacio ?? "",
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const provTipo = (p.acf?.tipus ?? "").toString();
      const matchesCategory =
        activeCategory === "all" || provTipo === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [providers, searchTerm, activeCategory]);

  if (error) {
    const message = error instanceof Error ? error.message : String(error);
    return (
      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-2xl font-bold">Els nostres proveïdors</h1>
        <p className="mt-4 text-red-600">
          Error carregant proveïdors: {message}
        </p>
      </main>
    );
  }

  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <span className="gradient-text">Els nostres proveïdors</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Treballem amb productors locals i ecològics que comparteixen els
              nostres valors de sostenibilitat i justícia social.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
          <div className="relative flex-1 md:flex-none md:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Cerca proveïdors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-10 w-20 bg-gray-200 rounded-full" />
                ))
              : categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      activeCategory === category.id
                        ? "bg-primary text-primary ring-2 ring-primary"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
          </div>
        </div>

        {/* Providers Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : filteredProviders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No s'han trobat proveïdors que coincideixin amb la teva cerca.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProviders.map((provider) => {
              const excerptHtml = provider.excerpt || "";
              const tipus = provider.acf?.tipus;
              const ubicacio = provider.acf?.ubicacio;
              return (
                <Link
                  key={provider.id}
                  to={`/proveidors/${provider.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Imagen */}
                    <div className="h-48 overflow-hidden bg-gray-200">
                      <img
                        src={provider.featuredImage ?? "/placeholder.png"}
                        alt={provider.featuredAlt ?? provider.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Contenido */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                          {provider.title}
                        </h3>
                      </div>

                      {/* Tipo y Ubicación */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tipus ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {tipus}
                          </span>
                        ) : null}
                        {ubicacio ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {ubicacio}
                          </span>
                        ) : null}
                      </div>

                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        <span
                          dangerouslySetInnerHTML={{ __html: excerptHtml }}
                        />
                      </p>

                      {/* Contacto */}
                      {(provider.acf?.telefon || provider.acf?.email) && (
                        <div className="space-y-1 text-xs text-gray-500 mb-4">
                          {provider.acf?.telefon ? (
                            <p>📞{provider.acf.telefon}</p>
                          ) : null}
                          {provider.acf?.email ? (
                            <p>📧 {provider.acf.email}</p>
                          ) : null}
                        </div>
                      )}

                      {/* Link */}
                      <div className="text-primary font-medium group-hover:underline">
                        Més informació →
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Proveidors;
