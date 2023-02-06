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
      <nav className="flex items-center justify-between flex-wrap bg-white dark:bg-gray-900 p-6">
        <div className="flex items-center flex-shrink-0 text-black dark:text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Home</span>
        </div>

        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-black dark:text-white border-black dark:border-white hover:text-white hover:border-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              className="fill-current h-3 w-3"
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
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white hover:text-white mr-4"
            >
              Services
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white hover:text-white mr-4"
            >
              About
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white hover:text-white"
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
                  className={`toggle__dot absolute inset-y-0 mt-2 left-0${
                    currentTheme === "dark" ? " transform translate-x-full" : ""
                  }`}
                >
                  {mounted &&
                    (currentTheme === "dark" ? (
                      <MdLightMode
                        className="
                        text-2xl cursor-pointer 
                        hover:text-amber-500
            "
                        onClick={() => setTheme("light")}
                      />
                    ) : (
                      <BsFillMoonFill
                        className="text-2xl cursor-pointer 
                hover:text-amber-500"
                        onClick={() => setTheme("dark")}
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
