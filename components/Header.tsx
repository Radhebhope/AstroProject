import React from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="">
      {/* Navigation for light mode and dark mode */}
      {/* Toggle Service, About and Contact on menu click  */}
      <nav className="flex flex-wrap items-center justify-between p-6 bg-white dark:bg-gray-900">
        <div className="flex items-center flex-shrink-0 mr-6 text-black dark:text-white">
          <span className="text-xl font-semibold tracking-tight">Home</span>
        </div>

        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 text-black border border-black rounded dark:text-white dark:border-white hover:text-white hover:border-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="#services"
              className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0 dark:text-white hover:text-white"
            >
              Services
            </a>
            <a
              href="#about"
              className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0 dark:text-white hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              className="block mt-4 text-black lg:inline-block lg:mt-0 dark:text-white hover:text-white"
            >
              Contact
            </a>
          </div>
          <div>
            {/* Dark Mode Switch */}
            <label className="flex items-center cursor-pointer">
              <div
                className={`relative${
                  mounted ? " transition-colors duration-500 ease-in-out" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={currentTheme === "dark"}
                  onChange={() =>
                    setTheme(currentTheme === "light" ? "dark" : "light")
                  }
                />
                <div
                  className={`toggle__line w-10 h-6 mt-2 bg-gray-400 rounded-full shadow-inner${
                    currentTheme === "dark" ? " transform bg-black" : ""
                  }`}
                />
                <div
                  className={`toggle__dot absolute text-stone-100 inset-y-0 mt-2 left-0${
                    currentTheme === "dark"
                      ? ""
                      : " transform translate-x-3/4 m-[1px]"
                  }`}
                >
                  {mounted &&
                    (currentTheme === "dark" ? (
                      <BsFillMoonFill
                        className="text-2xl cursor-pointer hover:text-amber-500"
                        onClick={() => setTheme("dark")}
                      />
                    ) : (
                      <MdLightMode
                        className="text-2xl cursor-pointer hover:text-amber-500"
                        onClick={() => setTheme("light")}
                      />
                    ))}
                </div>
              </div>
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
