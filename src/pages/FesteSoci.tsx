const FesteSoci = () => {
  const benefits = [
    {
      title: "Productes de qualitat",
      description:
        "Accés a productes ecològics, de proximitat i de temporada de la màxima qualitat.",
    },
    {
      title: "Participació comunitària",
      description:
        "Formar part d'un projecte col·lectiu amb impacte positiu al barri.",
    },
    {
      title: "Preus justos",
      description:
        "Preus justos tant per a productors com per a les persones sòcies consumidores.",
    },
    {
      title: "Activitats i formacions",
      description:
        "Accés a tallers, xerrades i activitats relacionades amb el consum responsable.",
    },
  ];

  return (
    <div className="font-poppins">
      <div className="bg-primary-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <span className="gradient-text">Fes-te Soci/a</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Uneix-te a La Igualitària i forma part d'una comunitat compromesa
              amb el consum responsable i sostenible.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid  lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Per què fer-te soci/a?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Com a cooperativa de consum, La Igualitària funciona gràcies a la
              participació activa dels seulg:grid-cols-2s socis i sòcies. Formar
              part de la cooperativa et permet:
            </p>
            <div className="mt-8 grid lg:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="font-poppins">
          <div className="flex md:ps-24 lg:ps-72 mt-20 -mb-10">
            {" "}
            <iframe
              width="780"
              height="1400"
              src="https://usem.liberaforms.org/embed/fabrizio"
            ></iframe>
          </div>
        </div> */}
        <div className="mt-16 bg-primary-light p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Procés d'incorporació
          </h2>
          <ol className="space-y-6 mt-8">
            <li className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                  1
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Envia la sol·licitud
                </h3>
                <p className="mt-1 text-gray-600">
                  Omple el formulari anterior amb les teves dades.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                  2
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Reunió informativa
                </h3>
                <p className="mt-1 text-gray-600">
                  T'invitarem a una reunió per explicar-te el funcionament de la
                  cooperativa.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                  3
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Aportació inicial
                </h3>
                <p className="mt-1 text-gray-600">
                  Realitza l'aportació inicial de 100€ al capital social de la
                  cooperativa (retornable si marxes).
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                  4
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Formació inicial
                </h3>
                <p className="mt-1 text-gray-600">
                  Rebràs una formació bàsica sobre el funcionament de la botiga
                  i els torns.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                  5
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Benvingut/da a la cooperativa!
                </h3>
                <p className="mt-1 text-gray-600">
                  Ja formes part de La Igualitària i pots començar a comprar i
                  participar.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FesteSoci;
