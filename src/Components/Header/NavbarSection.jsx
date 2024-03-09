import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const navigation = [
  { name: "Home", href: "#", current: true },
  {
    name: "Informasi",
    href: "#",
    current: false,
    dropdownItems: [
      { name: "Akademik", href: "#" },
      { name: "Beasiswa", href: "#" },
      { name: "Kegiatan", href: "#" },
      { name: "Mahasiswa", href: "#" },
      { name: "Katalog PA", href: "#" },
    ],
  },
  { name: "Akademik", href: "#", current: false },
  { name: "Beasiswa", href: "#", current: false },
  { name: "Kegiatan", href: "#", current: false },
  { name: "Mahasiswa", href: "#", current: false },
  { name: "Katalog PA", href: "#", current: false },
  { name: "Berita", href: "#", current: false },
  { name: "About", href: "#", current: false },
];

const allowedMenus = ["Home", "Informasi", "Berita", "About"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const filteredNavigation = navigation.filter((item) =>
    allowedMenus.includes(item.name)
  );

  return (
    <>
      <header>
        <div className="container-fuild">
          <Disclosure as="nav" className="w-full bg-primary">
            {({ open }) => (
              <>
                <div className="px-2 mx-auto sm:px-6 lg:px-8">
                  <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button
                        className="relative inline-flex items-center justify-center p-2 text-white rounded-md hover:bg-primary-nav hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-nav"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block w-6 h-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block w-6 h-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                      <div className="flex items-center flex-shrink-0">
                        <img
                          className="w-auto h-10"
                          src="https://www.pens.ac.id/wp-content/uploads/2018/04/Logo_PENS_putih.png"
                          alt="Your Company"
                        />
                      </div>
                      <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                          {filteredNavigation.map((item) => (
                            <div key={item.name} className="relative">
                              {/* Ensure Disclosure.Button wraps around the menu item */}
                              <Disclosure.Button
                                as="a"
                                href={item.href}
                                onClick={() =>
                                  setIsOpen(
                                    item.name === "Informasi" && !isOpen
                                  )
                                }
                                className={classNames(
                                  item.current
                                    ? "bg-primary-nav text-white"
                                    : "text-white hover:bg-primary hover:text-secondary",
                                  "rounded-md px-3 py-2 font-medium text-xl"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </Disclosure.Button>
                              {/* Add Disclosure.Panel after Disclosure.Button */}
                              {item.name === "Informasi" && isOpen && (
                                <>
                                  <Disclosure.Panel className="absolute z-10 w-48 mt-2 bg-white rounded-md shadow-lg">
                                    <div className="py-1">
                                      {item.dropdownItems.map(
                                        (dropdownItem) => (
                                          <a
                                            key={dropdownItem.name}
                                            href={dropdownItem.href}
                                            className="block px-4 py-2 text-sm text-primary hover:bg-gray-100 text-2lg"
                                          >
                                            {dropdownItem.name}
                                          </a>
                                        )
                                      )}
                                    </div>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-white text-primary-nav"
                            : "text-white hover:bg-primary hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </header>
    </>
  );
};

export default NavbarSection;
