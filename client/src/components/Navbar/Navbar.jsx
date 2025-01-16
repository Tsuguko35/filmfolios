import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/Text_Logo.webp";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState("");
  const deviceType = useSelector((state) => state.deviceType.device);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navOpen]);

  return (
    <header className={`p__fixed max__w ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav__container container flex space__between align__center ">
        <div className="logo__container">
          <Link to={"/"}>
            <img className="logo" src={logo} alt="FilmFolio" />
          </Link>
        </div>

        {deviceType && (
          <>
            {deviceType === "desktop" ? (
              <nav>
                <ul className="nav__list flex">
                  <li className="nav__item flex align__center p__relative">
                    Movies <MdOutlineKeyboardArrowDown />
                    <div
                      className={`dropdown__menu flex flex__column p__absolute `}>
                      <Link to={""}>Popular</Link>
                      <Link to={""}>Now Playing</Link>
                      <Link to={""}>Upcoming</Link>
                      <Link to={""}>Top Rated</Link>
                    </div>
                  </li>
                  <li className="nav__item flex align__center p__relative">
                    TV Shows <MdOutlineKeyboardArrowDown />
                    <div
                      className={`dropdown__menu flex flex__column p__absolute `}>
                      <Link to={""}>Popular</Link>
                      <Link to={""}>Airing Today</Link>
                      <Link to={""}>On TV</Link>
                      <Link to={""}>Top Rated</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            ) : (
              <nav className="mobile p__relative">
                {/* Hamburger Button  */}
                <GiHamburgerMenu onClick={() => setNavOpen(true)} />
                <div
                  className={`overlay p__fixed ${navOpen ? "open" : ""}`}
                  onClick={() => setNavOpen(false)}></div>
                <ul
                  className={`nav__list flex flex__column align__center p__fixed ${
                    navOpen ? "open" : ""
                  }`}>
                  {/* Close Button  */}
                  <div className="nav__close flex max__w align__center justify__end">
                    <IoMdClose onClick={() => setNavOpen(false)} />
                  </div>

                  {/* Movie Accordion  */}
                  <li
                    className={`nav__item flex align__center p__relative `}
                    onClick={() =>
                      setAccordionOpen(
                        accordionOpen !== "movies" ? "movies" : ""
                      )
                    }>
                    Movies <MdOutlineKeyboardArrowDown />
                  </li>
                  <div
                    className={`accordion__menu max__w ${
                      accordionOpen === "movies" ? "active" : ""
                    }`}>
                    <div className="max__w flex flex__column">
                      <Link to={""}>Popular</Link>
                      <Link to={""}>Now Playing</Link>
                      <Link to={""}>Upcoming</Link>
                      <Link to={""}>Top Rated</Link>
                    </div>
                  </div>

                  {/* TV Show Accordion  */}
                  <li
                    className="nav__item flex align__center p__relative"
                    onClick={() =>
                      setAccordionOpen(
                        accordionOpen !== "tvshows" ? "tvshows" : ""
                      )
                    }>
                    TV Shows <MdOutlineKeyboardArrowDown />
                  </li>
                  <div
                    className={`accordion__menu max__w ${
                      accordionOpen === "tvshows" ? "active" : ""
                    }`}>
                    <div className="max__w flex flex__column">
                      <Link to={""}>Popular</Link>
                      <Link to={""}>Airing Today</Link>
                      <Link to={""}>On TV</Link>
                      <Link to={""}>Top Rated</Link>
                    </div>
                  </div>
                </ul>
              </nav>
            )}
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
