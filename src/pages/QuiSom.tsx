import { Link } from "react-router-dom";
import quiSomImage from "../assets/quiSomImage.webp";
import { getPageBySlug } from "@/lib/wp";

const [title, content] = await getPageBySlug("qui-som");
function QuiSom() {
  const values = [
    {
      title: "Cooperació",
      description:
        "Treballem conjuntament per assolir objectius comuns, posant el bé col·lectiu per sobre de l'individual.",
    },
    {
      title: "Sostenibilitat",
      description:
        "Apostem per un model de consum respectuós amb el medi ambient i que garanteix la viabilitat del projecte a llarg termini.",
    },
    {
      title: "Transparència",
      description:
        "Tots els processos de decisió i gestió són oberts i accessibles per a totes les persones sòcies.",
    },
    {
      title: "Proximitat",
      description:
        "Prioritzem els productes locals per reduir l'impacte ambiental i donar suport a l'economia local.",
    },
    {
      title: "Participació",
      description:
        "Fomentem la implicació de totes les persones sòcies en la presa de decisions i la gestió del projecte.",
    },
    {
      title: "Compromís Social",
      description:
        "Treballem per construir un model econòmic i social més just i equitatiu.",
    },
  ];

  return (
    <div className="font-poppins">
      <div className="bg-primary-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className="text-4xl font-bold text-gray-900 sm:text-5xl"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl"></h1>
            <p
              className="mt-4 text-lg font-glass-antigua text-gray-600 max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-left space-y-6">
            <h2 className="text-3xl font-cocotte text-gray-900">
              La Igualitària
            </h2>
            <p className="text-lg text-gray-600">
              La Igualitària va ser el nom que va rebre el primer projecte de
              menjador comunitari de l'Ateneu La Base, al barri de Poble Sec,
              l'any 2014. El projecte va patir diversos canvis al llarg dels
              anys fins que es va convertir en el que és ara el Menjador de La
              Base.
            </p>
            <p className="text-lg text-gray-600">
              Avui, 10 anys després, altres veïnes del barri de l'entorn de
              Cooperasec recuperem el nom per crear l'economat del barri: La
              Igualitària.
            </p>
            <p className="text-lg text-gray-600">
              Actualment, La Igualitària és una cooperativa de consum
              autogestionada i participativa que ofereix productes de
              proximitat, de temporada i agroecològics al veïnat del Poble-sec.
              Estem ubicats al carrer Vallhonrat número 18.
            </p>
            <div className="mt-8">
              <Link
                to="/fer-se-soci"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Uneix-te a nosaltres
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              src={quiSomImage}
              alt="Qui som"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="gradient-text font-cocotte">
                Els nostres valors
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-glass-antigua">
              Aquests són els principis que guien el nostre projecte i la nostra
              manera de fer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-cocotte text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-cocotte text-gray-900">
            <span className="gradient-text">Com funcionem</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-glass-antigua">
            La Igualitària es regeix per un model de gestió horitzontal i
            participatiu.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="mb-10 lg:mb-0">
            <h3 className="text-2xl font-cocotte text-gray-900 mb-4">
              Assemblees
            </h3>
            <p className="text-gray-600 mb-4">
              Ens organitzem en assemblees mensuals on totes les persones sòcies
              poden participar en la presa de decisions sobre el funcionament de
              la cooperativa.
            </p>
            <h3 className="text-2xl font-cocotte text-gray-900 mb-4 mt-8">
              Comissions de treball
            </h3>
            <p className="text-gray-600 mb-4">
              El treball es distribueix en diferents comissions temàtiques on
              les persones sòcies participen segons els seus interessos i
              disponibilitat:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Comissió de Compres i Producte</li>
              <li>Comissió de Comunicació</li>
              <li>Comissió d'Activitats i Formació</li>
              <li>Comissió Econòmica</li>
              <li>Comissió de Local i Manteniment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-cocotte text-gray-900 mb-4">
              Participació
            </h3>
            <p className="text-gray-600 mb-4">
              Cada persona sòcia dedica un mínim de 3 hores al mes a tasques de
              la cooperativa, ja sigui en alguna de les comissions o en els
              torns de botiga.
            </p>
            <h3 className="text-2xl font-cocotte text-gray-900 mb-4 mt-8">
              Model econòmic
            </h3>
            <p className="text-gray-600 mb-4">
              El model econòmic es basa en l'aportació d'una quota mensual per
              part de les persones sòcies, més el marge sobre els productes que
              comprem.
            </p>
            <p className="text-gray-600">
              Aquest model ens permet mantenir l'autonomia del projecte i oferir
              productes de qualitat a preus justos tant per a les persones
              productores com per a les consumidores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuiSom;
