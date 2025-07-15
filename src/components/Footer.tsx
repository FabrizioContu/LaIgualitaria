import { Link } from "react-router-dom";
import logoText from "../assets/logoTextWhite.webp";

import somLaClau from "../assets/somLaClau.webp";
import logos_peu from "../assets/logos_peu.webp";
const Footer = () => {
  return (
    <footer>
      <section className="bg-pink-600 border-t text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4 xl:col-span-1">
              <img
                src={logoText}
                alt="La Igualitària"
                className="h-14 w-auto mb-4"
              />
              <p className="text-white/90 max-w-xs">
                Cooperativa de consum autogestionada i participativa que ofereix
                productes de proximitat, de temporada i agroecològics al veïnat
                del Poble-sec.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-white/80 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=34931947646"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-phone-icon lucide-phone"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                  <span className="sr-only">WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider ">
                    Links principals
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li>
                      <Link
                        to="/"
                        className="text-base text-white/90 hover:text-white"
                      >
                        Inici
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/qui-som"
                        className="text-base text-white/90 hover:text-white"
                      >
                        Qui Som
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/fer-se-soci"
                        className="text-base text-white/90 hover:text-white"
                      >
                        Fer-se Soci
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-bold uppercase tracking-wide">
                    Més informació
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li>
                      <Link
                        to="/comunitat"
                        className="text-base text-white/90 hover:text-white"
                      >
                        Comunitat
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/proveidors"
                        className="text-base text-white/90 hover:text-white"
                      >
                        Proveïdors
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-white/90 hover:text-white"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Contacte
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="text-base ">Carrer Vallhonrat, 18</li>
                    <li className="text-base ">08004 Barcelona</li>
                    <li className="text-base ">laigualitaria@cooperasec.org</li>
                    <li className="text-base ">+34 931947646</li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Horaris
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="text-base">Dilluns: 16:00 - 20:30</li>
                    <li className="text-base">
                      Dimarts - Divendres: 10:00 - 13:30 / 16:00 - 20:30
                    </li>
                    <li className="text-base">Dissabte: 10:00 - 14:00</li>
                    <li className="text-base ">Diumenge: Tancat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" bg-gradient-to-t  from-pink-800 to-pink-600 grid grid-rows grid-flow-col-3 py-5 ">
          <div className="pb-5 flex justify-center">
            <Link to="/">
              <img
                className="h-12 rounded-lg"
                src={somLaClau}
                alt="Logo SomLaClau"
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="/">
              <img
                className="h-12 rounded-lg bg-white p-1"
                src={logos_peu}
                alt="Logos_peu"
              />
            </Link>
          </div>
          <div className="mt-12 border-t border-white/20 pt-8">
            <p className="text-base text-white/75 xl:text-center">
              &copy; {new Date().getFullYear()} La Igualitària. Tots els drets
              reservats.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
