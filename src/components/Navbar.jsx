// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

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
          <h1 className="text-black">Portfolio</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => {
            // --- SỬA Ở ĐÂY: Bỏ qua nếu là 'cv' để không bị trùng ---
            if (nav.id === "cv") return null;

            return (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-french" : "text-eerieBlack"
                } hover:text-taupe text-[21px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
              >
                <button
                  onClick={() => handleSectionClick(nav.title, nav.id)}
                  className="w-full text-left"
                >
                  {nav.title}
                </button>
              </li>
            );
          })}

          {/* Link CV Riêng (Giữ lại cái này để chuyển trang) */}
          <li>
            <Link
              to="/cv"
              className={`text-[21px] font-medium font-mova uppercase tracking-[3px]
                bg-gradient-to-r from-french to-taupe bg-clip-text text-transparent
                hover:text-french transition-all duration-300`}
              onClick={() => setActive("CV")}
            >
              CV / Resume
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
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
                  // --- SỬA Ở ĐÂY: Bỏ qua 'cv' trong menu mobile luôn ---
                  if (nav.id === "cv") return null;

                  return (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-french" : "text-eerieBlack"
                      } text-[88px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer`}
                    >
                      <button
                        onClick={() => handleSectionClick(nav.title, nav.id)}
                        className="w-full text-left"
                      >
                        {nav.title}
                      </button>
                    </li>
                  );
                })}

                {/* CV Mobile Link Riêng */}
                <li className="text-[88px] font-bold font-arenq uppercase tracking-[1px] text-french cursor-pointer">
                  <Link
                    to="/cv"
                    onClick={() => {
                      setToggle(false);
                      setActive("CV");
                    }}
                  >
                    CV / Resume
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