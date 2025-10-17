import Participa from "../components/Participa";
import heroImage2 from "../assets/heroImage3.png";
import Comptador from "@/components/Comptador";

const posts = [
  {
    id: 1,
    title: "Nous productes de temporada disponibles",
    image:
      "https://c.pxhere.com/photos/bc/ca/grapes_bunch_fruit_person_holding_harvest_ripe_organic-745906.jpg!d",
    href: "#",
    description:
      "Hem incorporat nous productes de temporada al nostre catàleg. Vine a descobrir les fruites i verdures més fresques i de proximitat.",
    date: "16 de març de 2024",
    datetime: "2024-03-16",
    category: { title: "Novetats", href: "#" },
    author: {
      name: "Marta Garcia",
      role: "Comissió de Producte",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Nova col·laboració amb agricultors locals",
    image:
      "https://c.pxhere.com/images/32/1b/6d3a791503d8ec9e723ae8ac3299-1571887.jpg!d",
    href: "#",
    description:
      "Hem començat una nova col·laboració amb agricultors del Baix Llobregat per oferir productes encara més locals i frescos.",
    date: "2 de maig de 2024",
    datetime: "2024-05-02",
    category: { title: "Col·laboracions", href: "#" },
    author: {
      name: "Jordi Puig",
      role: "Coordinador",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Taller d'agricultura urbana",
    image:
      "https://c.pxhere.com/photos/2d/77/vegetables_garden_harvest_organic_green_gardening_lettuce_summer-722088.jpg!d",
    href: "#",
    description:
      "El proper dissabte organitzem un taller per aprendre a cultivar les teves pròpies hortalisses en espais urbans reduïts.",
    date: "10 de maig de 2024",
    datetime: "2024-05-10",
    category: { title: "Esdeveniments", href: "#" },
    author: {
      name: "Lluïsa Martí",
      role: "Comissió d'Activitats",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-blue-50">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block">Benvinguts a</span>
                <span className="block gradient-text">La Igualitària</span>
              </h1>
              <p className="mt-6 max-w-lg text-xl text-gray-600">
                Cooperativa de consum autogestionada i participativa que ofereix
                productes de proximitat, de temporada i agroecològics al veïnat
                del Poble-sec.
              </p>
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
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="w-full overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt=""
                    className="h-48 w-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="flex items-center gap-x-4 text-xs mt-4">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="#"
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
