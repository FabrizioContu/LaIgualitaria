import { useState } from "react";
import { Search } from "lucide-react";

const Proveidors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tots" },
    { id: "fruita-verdura", name: "Fruita i Verdura" },
    { id: "pa-forn", name: "Pa i Forn" },
    { id: "lactis", name: "Làctics" },
    { id: "llegums", name: "Llegums i Cereals" },
    { id: "begudes", name: "Begudes" },
    { id: "neteja", name: "Productes de Neteja" },
  ];

  const providers = [
    {
      id: 1,
      name: "Can Perol",
      type: "Horta",
      location: "Baix Llobregat",
      description:
        "Producció hortícola ecològica certificada. Treballen amb varietats locals i de temporada.",
      image:
        "https://c.pxhere.com/photos/bc/ca/grapes_bunch_fruit_person_holding_harvest_ripe_organic-745906.jpg!d",
      categories: ["fruita-verdura"],
    },
    {
      id: 2,
      name: "Forn Integral",
      type: "Pa i pastisseria",
      location: "Barcelona",
      description:
        "Pa artesà elaborat amb farines ecològiques i llevat mare. Especialistes en pa integral i sense gluten.",
      image:
        "https://c.pxhere.com/photos/4d/3e/bread_food_bakery_homemade_loaf_bake_fresh_breakfast-763432.jpg!d",
      categories: ["pa-forn"],
    },
    {
      id: 3,
      name: "La Selvatana",
      type: "Làctics",
      location: "La Selva",
      description:
        "Producció de iogurts i formatges artesans a partir de llet de vaques alimentades amb pastures ecològiques.",
      image:
        "https://c.pxhere.com/photos/12/fc/dairy_milk_cheese_food_gourmet_plate_assortment-658744.jpg!d",
      categories: ["lactis"],
    },
    {
      id: 4,
      name: "Cal Valls",
      type: "Conserves",
      location: "Lleida",
      description:
        "Conserves vegetals ecològiques elaborades amb productes de temporada i sense additius.",
      image:
        "https://c.pxhere.com/photos/d2/83/glass_bank_cucumbers_einwecken_preserving_jar_screw_cap_vegetables-973583.jpg!d",
      categories: ["fruita-verdura"],
    },
    {
      id: 5,
      name: "La Moianesa",
      type: "Llegums i pasta",
      location: "Moià",
      description:
        "Llegums ecològics de varietats locals i pasta artesanal elaborada amb blat dur ecològic.",
      image:
        "https://c.pxhere.com/photos/65/2f/bean_food_kidney_organic_raw_legume_seed_ingredient-915291.jpg!d",
      categories: ["llegums"],
    },
    {
      id: 6,
      name: "Masia El Molí",
      type: "Oli i olives",
      location: "Tarragona",
      description:
        "Oli d'oliva verge extra ecològic i olives arbequines en conserva.",
      image:
        "https://c.pxhere.com/photos/42/e7/olive_oil_italian_cuisine_natural_oil_salad_dressing_cooking_food_fresh-627712.jpg!d",
      categories: ["llegums"],
    },
    {
      id: 7,
      name: "Biocop",
      type: "Productes envasats",
      location: "Barcelona",
      description:
        "Distribució de productes ecològics envasats com arròs, sucre, cafè, te, etc.",
      image:
        "https://c.pxhere.com/photos/20/4e/coffee_beans_coffee_gourmet_coffee_cup_black_coffee-1041275.jpg!d",
      categories: ["llegums", "begudes"],
    },
    {
      id: 8,
      name: "Mel de Can Fel",
      type: "Mel",
      location: "Montseny",
      description:
        "Mel artesanal recollida en zones boscoses del Montseny, lluny de zones de contaminació.",
      image:
        "https://c.pxhere.com/photos/b0/73/baking_bread_breakfast_butter_closeup_delicious_diet_eating-1557493.jpg!d",
      categories: ["llegums"],
    },
    {
      id: 9,
      name: "Biobel",
      type: "Neteja",
      location: "Girona",
      description:
        "Productes de neteja ecològics i biodegradables per a la llar.",
      image:
        "https://c.pxhere.com/images/8c/3f/b3e8bda1237be2f4bcf5a1cbfd1c-1453601.jpg!d",
      categories: ["neteja"],
    },
    {
      id: 10,
      name: "Celler Coop. Gandesa",
      type: "Vi",
      location: "Terra Alta",
      description:
        "Vins ecològics elaborats amb varietats autòctones de la Terra Alta.",
      image:
        "https://c.pxhere.com/photos/8e/28/red_wine_wine_glass_drink_alcohol_beverage_merlot_liquor_cabernet-1124354.jpg!d",
      categories: ["begudes"],
    },
  ];
  const filteredProviders = providers.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || provider.categories.includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="font-poppins">
      <div className="bg-primary-light py-16">
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div className="relative mb-6 md:mb-0 md:w-1/3">
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
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm rounded-full ${
                  activeCategory === category.id
                    ? "bg-primary text-pink-600"
                    : "bg-gray-100 text-primary hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Providers Grid */}
        {filteredProviders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No s'han trobat proveïdors que coincideixin amb la teva cerca.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProviders.map((provider) => (
              <div
                key={provider.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        {provider.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{provider.type}</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-primary">
                      {provider.location}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600">{provider.description}</p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="text-primary hover:text-primary-dark font-medium"
                    >
                      Més informació →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Mapa de proveïdors</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Els nostres proveïdors estan distribuïts principalment per
            Catalunya, minimitzant així la petjada ecològica del transport.
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1495142.2744542317!2d0.721907574645385!3d41.84141008942192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a45bac24b938bf%3A0x5200e7452f9ef790!2sCatalu%C3%B1a!5e0!3m2!1ses!2ses!4v1716305982126!5m2!1ses!2ses"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-primary-light p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ets productor/a i vols col·laborar?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Si ets productor/a agroecològic i estàs interessat/da en col·laborar
            amb La Igualitària, posa't en contacte amb nosaltres.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
          >
            Contacta'ns
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proveidors;
