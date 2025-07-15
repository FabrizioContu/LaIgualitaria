import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoCircle from "../assets/logoCircle.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inici", href: "/" },
    { name: "Qui Som", href: "/qui-som" },
    { name: "Fer-se Soci", href: "/fer-se-soci" },
    { name: "Comunitat", href: "/comunitat" },
    { name: "Proveïdors", href: "/proveidors" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gray-50 shadow-sm" role="banner">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-3"
              aria-label="La Igualitària - Pàgina d'inici"
            >
              <img
                src={logoCircle}
                alt="Logotip de La Igualitària"
                className="h-12 w-16"
              />
              <span className="text-2xl font-semibold font-cocotte text-[color:#508BBA]">
                La Igualitària
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6 ">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? "text-pink-600 font-semibold"
                    : "text-[color:#508BBA] hover:text-primary focus:text-primary font-semibold"
                } px-3 py-2 text-sm font-glass-antigua transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/fer-se-soci"
              className="ml-4 inline-flex items-center rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-600-dark focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 transition-colors"
            >
              Uneix-te
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">
                {isMenuOpen ? "Tanca el menú" : "Obre el menú"}
              </span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? "bg-primary-light text-primary font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  } block px-3 py-2 rounded-md text-base font-glass-antigua focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/fer-se-soci"
                className="block w-full mt-4 text-center rounded-md bg-pink-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-600-dark focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Uneix-te
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
