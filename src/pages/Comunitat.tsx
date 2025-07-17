import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Comunitat = () => {
  const events = [
    {
      id: 1,
      title: "Assemblea mensual",
      date: "26 de maig, 2024",
      time: "18:00 - 20:00",
      location: "Local de La Igualitària",
      description:
        "Assemblea mensual oberta a totes les persones sòcies per prendre decisions sobre el funcionament de la cooperativa.",
    },
    {
      id: 2,
      title: "Taller de fermentats",
      date: "2 de juny, 2024",
      time: "17:00 - 19:00",
      location: "Local de La Igualitària",
      description:
        "Aprèn a fer kombutxa, quefir i altres fermentats. Places limitades, inscripció prèvia necessària.",
    },
    {
      id: 3,
      title: "Visita al productor: Can Perol",
      date: "10 de juny, 2024",
      time: "10:00 - 14:00",
      location: "Can Perol (Baix Llobregat)",
      description:
        "Visitarem els camps de conreu de Can Perol per conèixer de primera mà com es cultiven les verdures que consumim.",
    },
  ];

  const posts = [
    {
      id: 1,
      title: "Èxit en la campanya de tardor",
      date: "15 d'octubre, 2023",
      excerpt:
        "La campanya de tardor ha superat les expectatives amb més de 50 noves persones sòcies.",
      author: "Comissió de Comunicació",
    },
    {
      id: 2,
      title: "Nova col·laboració amb l'escola del barri",
      date: "3 de març, 2024",
      excerpt:
        "Hem iniciat un projecte amb l'escola Poble-sec per apropar l'alimentació saludable als infants.",
      author: "Comissió d'Activitats",
    },
    {
      id: 3,
      title: "Resultats econòmics 2023",
      date: "28 de febrer, 2024",
      excerpt:
        "El tancament econòmic de 2023 mostra un creixement sostingut de la cooperativa.",
      author: "Comissió Econòmica",
    },
  ];

  const team = [
    {
      name: "Laura Martínez",
      role: "Coordinadora",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Miquel Garcia",
      role: "Comissió de Compres",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Clara Puig",
      role: "Comissió Econòmica",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Marc Riera",
      role: "Comissió de Comunicació",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="font-poppins">
      <div className="bg-primary-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <span className="gradient-text">Comunitat</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              La Igualitària és molt més que una botiga. Som una comunitat que
              treballa per construir una alternativa de consum conscient i
              transformador al barri.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="gradient-text">El nostre equip</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Coneix algunes de les persones que fan possible aquest projecte.
            Totes les persones sòcies contribueixen amb el seu temps i
            dedicació.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((person) => (
            <div key={person.name} className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  className="h-40 w-40 rounded-full object-cover"
                  src={person.image}
                  alt={person.name}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm text-primary">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="gradient-text">Propers esdeveniments</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Participa en les nostres activitats i forma part activa de la
              comunitat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      {event.location}
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="text-primary hover:text-primary-dark font-medium"
                    >
                      Inscriu-te →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="gradient-text">Notícies recents</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Mantén-te al dia de les últimes novetats de la cooperativa.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{post.excerpt}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-primary">{post.author}</span>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Llegir més →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Participation Call to Action */}
      <div className="bg-primary-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="gradient-text">Forma part de la comunitat</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            La força de La Igualitària és la seva comunitat. T'animes a
            participar-hi?
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/fer-se-soci"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
            >
              <Users className="h-5 w-5 mr-2" />
              Fes-te soci/a
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comunitat;
