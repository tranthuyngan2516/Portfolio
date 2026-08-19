import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo } from "../assets";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const { lang, toggleLang } = useLanguage();

  const handleSectionClick = (title, sectionId) => {
    setActive(title);
    setToggle(false);

    if (location.pathname === "/cv") {
      window.location.href = `/#!${sectionId}`;
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
          <h1 className="text-black font-bold text-[18px]">Portfolio</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-14 mt-2">
          <ul className="list-none flex flex-row gap-14">
            {navLinks.map((nav) => {
              if (nav.id === "cv") return null;

              return (
                <li
                  key={nav.id}
                  className={`${
                    active === nav[lang] ? "text-french" : "text-eerieBlack"
                  } hover:text-taupe text-[21px] font-medium font-poppins uppercase tracking-[3px] cursor-pointer nav-links`}
                >
                  <button
                    onClick={() => handleSectionClick(nav[lang], nav.id)}
                    className="w-full text-left"
                  >
                    {nav[lang]}
                  </button>
                </li>
              );
            })}

            {/* Link CV Riêng */}
            <li>
              <Link
                to="/cv"
                className={`text-[21px] font-medium font-poppins uppercase tracking-[3px]
                  bg-gradient-to-r from-french to-taupe bg-clip-text text-transparent
                  hover:text-french transition-all duration-300`}
                onClick={() => setActive("CV")}
              >
                {lang === "en" ? "CV / Resume" : "CV / Hồ sơ"}
              </Link>
            </li>
          </ul>

          {/* Language Toggle Desktop */}
          <div className="flex gap-2 bg-neutral-200 p-1 rounded-full border border-black/5">
            <button
              onClick={() => toggleLang("en")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === "en" ? "bg-black text-white" : "text-black hover:bg-black/5"}`}
            >
              EN
            </button>
            <button
              onClick={() => toggleLang("vi")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === "vi" ? "bg-black text-white" : "text-black hover:bg-black/5"}`}
            >
              VN
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center gap-4">
          {/* Language Toggle Mobile (Always visible) */}
          <div className="flex gap-1 bg-neutral-200 p-1 rounded-full border border-black/5">
            <button
              onClick={() => toggleLang("en")}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === "en" ? "bg-black text-white" : "text-black"}`}
            >
              EN
            </button>
            <button
              onClick={() => toggleLang("vi")}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === "vi" ? "bg-black text-white" : "text-black"}`}
            >
              VN
            </button>
          </div>

          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute top-0 left-0 w-screen h-[100vh] z-10 menu ${
                toggle ? "menu-open" : "menu-close"
              }`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>

              <ul className="list-none flex flex-col -gap-[1rem] items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => {
                  if (nav.id === "cv") return null;

                  return (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav[lang] ? "text-french" : "text-eerieBlack"
                      } text-[88px] font-bold font-poppins uppercase tracking-[1px] cursor-pointer`}
                    >
                      <button
                        onClick={() => handleSectionClick(nav[lang], nav.id)}
                        className="w-full text-left"
                      >
                        {nav[lang]}
                      </button>
                    </li>
                  );
                })}

                {/* CV Mobile Link Riêng */}
                <li className="text-[88px] font-bold font-poppins uppercase tracking-[1px] text-french cursor-pointer">
                  <Link
                    to="/cv"
                    onClick={() => {
                      setToggle(false);
                      setActive("CV");
                    }}
                  >
                    {lang === "en" ? "CV" : "CV"}
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
