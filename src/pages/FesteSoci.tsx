import ButtonFesteSocia from "@/components/ButtonFesteSocia";

const FesteSoci = () => {
  return (
    <div className="font-poppins">
      <div className="bg-primary-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <span className="gradient-text">
                Suma’t al consum que canvia el món!
              </span>
            </h1>
            <h4 className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto prose">
              La Igualitària – Economat cooperatiu del Poble-sec som una botiga
              cooperativa on podràs adquirir els productes quotidians reduint
              impacte ambiental i garantint preus justos en tota la cadena de
              producció.
            </h4>
            <h4 className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto prose">
              Som una cooperativa de consum impulsada pel teixit veïnal del
              Poble-sec, un projecte autogestionat i participatiu que fomenta el
              comerç de productes locals, de temporada i ecològics.
            </h4>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-primary-light p-8 rounded-lg mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 mx-auto text-center">
          Fes-te sòcia de La Igualitària – Economat cooperatiu del Poble-sec
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
                Rebràs una formació bàsica sobre el funcionament de la botiga i
                els torns.
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
      <div className="mt-12 text-center pb-24">
        <ButtonFesteSocia />
      </div>
    </div>
  );
};

export default FesteSoci;
