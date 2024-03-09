import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faInfo,
  faBook,
  faCaretDown,
  faMoneyCheckDollar,
  faPeopleCarryBox,
  faGraduationCap,
  faUserGraduate,
  faNoteSticky,
  faNewspaper,
  faSchool,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-10 justify-center w-full mx-auto shedow bg-primary">
        <div className="container">
          <div className="relative flex items-center justify-start py-4 lg:pl-10">
            <div className="px-4">
              <img
                className="w-auto h-11"
                src="https://www.pens.ac.id/wp-content/uploads/2018/04/Logo_PENS_putih.png"
                alt="Your Company"
              />
            </div>
            {/* Hamburger menu */}
            <div className="absolute inset-y-0 right-0 block mt-5 mr-5 sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:bg-primary hover:text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            {/* Desktop menu */}
            <nav className="justify-between hidden space-x-4 sm:flex rounded-t-non">
              <Link
                to="/"
                href="#"
                className="px-3 py-2 text-base font-medium text-white rounded-md hover:shadow hover:bg-primary hover:text-secondary rounded-t-non"
              >
                <FontAwesomeIcon icon={faHouse} />
                <span className="ml-2"> Home</span>
              </Link>
              <div className="mt-2 dropdown dropdown-hover">
                <span
                  tabIndex={0}
                  role=""
                  className="px-3 py-2 text-base font-medium text-white rounded-md hover:shadow hover:bg-primary hover:text-secondary rounded-t-non"
                >
                  <FontAwesomeIcon icon={faInfo} />
                  <span className="pr-2 ml-2">Informasi</span>
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[2] menu p-2 shadow w-72 bg-white text-primary font-small gap-3 text-base pl-4 rounded-box pt-4"
                >
                  <Link
                    to=""
                    className="p-3 rounded-box hover:bg-primary hover:text-secondary"
                  >
                    <FontAwesomeIcon icon={faBook} />
                    <span className="ml-2"> Akademik</span>
                  </Link>
                  <Link
                    to="*"
                    className="p-3 rounded-box hover:bg-primary hover:text-secondary"
                  >
                    <FontAwesomeIcon icon={faMoneyCheckDollar} />
                    <span className="ml-2"> Beasiswa</span>
                  </Link>
                  <Link
                    to="*"
                    className="p-3 rounded-box hover:bg-primary hover:text-secondary"
                  >
                    <FontAwesomeIcon icon={faPeopleCarryBox} />
                    <span className="ml-2"> Kegitan</span>
                  </Link>
                  <Link
                    to="*"
                    className="p-3 rounded-box hover:bg-primary hover:text-secondary"
                  >
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <span className="ml-2">Mahasiswa</span>
                  </Link>
                  <Link
                    to="/login"
                    className="p-3 rounded-box hover:bg-primary hover:text-secondary"
                  >
                    <FontAwesomeIcon icon={faUserGraduate} />
                    <span className="ml-2">Alumi</span>
                  </Link>
                  <Link
                    to="*"
                    className="p-3 rounded-box hover:bg-primary hover:text-secondary"
                  >
                    <FontAwesomeIcon icon={faNoteSticky} />
                    <span className="ml-2">Katalog PA</span>
                  </Link>
                </ul>
              </div>
              <Link
                to="*"
                href="#"
                className="px-3 py-2 text-base font-medium text-white rounded-md hover:shadow hover:bg-primary hover:text-secondary rounded-t-non"
              >
                <FontAwesomeIcon icon={faNewspaper} />
                <span className="ml-2">Berita</span>
              </Link>
              <Link
                to="*"
                href="#"
                className="px-3 py-2 text-base font-medium text-white rounded-md hover:shadow hover:bg-primary hover:text-secondary rounded-t-non"
              >
                <FontAwesomeIcon icon={faSchool} />
                <span className="ml-2">Tentang</span>
              </Link>
            </nav>
          </div>
          {/* Mobile menu */}
          {isOpen && (
            <div className="sm:hidden">
              <div className="flex flex-col space-y-4 " tabIndex={0}>
                <Link
                  to="/"
                  href="#"
                  className="block px-3 py-2 text-white text-md focus:bg-blue-800 focus:text-secondary "
                >
                  <FontAwesomeIcon icon={faHome} />
                  <span className="ml-2">Home</span>
                </Link>
                <Link
                  to="*"
                  href="#"
                  className="block px-3 py-2 text-white text-md focus:bg-blue-800 focus:text-secondary "
                >
                  <FontAwesomeIcon icon={faBook} />
                  <span className="ml-2">Akademik</span>
                </Link>
                <Link
                  to="*"
                  href="#"
                  className="block px-3 py-2 text-white text-md focus:bg-blue-800 focus:text-secondary"
                >
                  <FontAwesomeIcon icon={faMoneyCheckDollar} />
                  <span className="ml-2">Beasiswa</span>
                </Link>
                <Link
                  to="*"
                  href="#"
                  className="block px-3 py-2 text-white text-md focus:bg-blue-800 focus:text-secondary "
                >
                  <FontAwesomeIcon icon={faPeopleCarryBox} />
                  <span className="ml-2">Kegiatan</span>
                </Link>
                <Link
                  to="*"
                  href="#"
                  className="block px-3 py-2 text-white text-md focus:bg-blue-800 focus:text-secondary "
                >
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <span className="ml-2">Mahasiswa</span>
                </Link>
                <Link
                  to="*"
                  href="#"
                  className="block px-3 py-2 text-white text-md focus:bg-blue-800 focus:text-secondary "
                >
                  <FontAwesomeIcon icon={faUserGraduate} />
                  <span className="ml-2">Alumi</span>
                </Link>
                <Link
                  to="*"
                  href="#"
                  className="block px-3 py-2 text-base text-white focus:bg-blue-800 focus:text-secondary "
                >
                  <FontAwesomeIcon icon={faNoteSticky} />
                  <span className="ml-2">Katalog PA</span>
                </Link>
                <Link
                  to="*"
                  href="#"
                  className="block px-3 py-2 text-white text-md focus:bg-blue-800 focus:text-secondary "
                >
                  <FontAwesomeIcon icon={faNewspaper} />
                  <span className="ml-2">Berita</span>
                </Link>
                <Link
                  to="*"
                  href="#"
                  className="block px-3 py-2 text-white text-md focus:bg-blue-800 focus:text-secondary "
                >
                  <FontAwesomeIcon icon={faSchool} />
                  <span className="ml-2">Tentang</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
