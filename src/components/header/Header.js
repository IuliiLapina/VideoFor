/* eslint-disable no-unused-vars */
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../images/logo/logo.png";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  let isEngPage = location.pathname.search(/eng/g);
  let isRuPage = location.pathname.split("/");
  let popped = isRuPage.pop();
  let isRuPagePathname = isRuPage.join("/");

  const [isBurgerMenu, setBurgerMenu] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isMenuOpenSecond, setMenuOpenSecond] = React.useState(false);

  function handleBurgerMenu() {
    isBurgerMenu ? setBurgerMenu(false) : setBurgerMenu(true);
  }

  function handleSubMenuProducts() {
    isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);
  }

  function handleSubMenuProductsSecond() {
    isMenuOpenSecond ? setMenuOpenSecond(false) : setMenuOpenSecond(true);
  }
  return (
    <>
      {isEngPage !== -1 ? (
        <header className="header" lang="en-US">
          <Link className="header__link" to="/eng">
            <img className="header__logo" src={logo} alt="Логотип 'VideoFor'" />
          </Link>
          <nav className="header__menu">
            <input
              id="header__menu-toggle"
              type="checkbox"
              onClick={handleBurgerMenu}
            />
            <label className="header__menu-btn" htmlFor="header__menu-toggle">
              <span className="header__menu-btn-before"></span>
            </label>

            <ul
              className={`header__column-links ${
                isBurgerMenu ? "header__column-links_visible" : ""
              }`}
            >
              <span
                className={`header__arrow_1 ${
                  isMenuOpen ? "header__arrow_1_active" : ""
                }`}
                onClick={handleSubMenuProducts}
              ></span>
              <li className="header__list-item" onClick={handleBurgerMenu}>
                <Link to="/eng#products_eng" className="header__link">
                  Products
                </Link>
              </li>
              {isMenuOpen ? (
                <>
                  <Link
                    to="/smart-city/eng#city-eng"
                    className="header__sub-link"
                    onClick={handleBurgerMenu}
                  >
                    Smart city
                  </Link>
                  <Link
                    to="/smart-beach/eng#beach-eng"
                    className="header__sub-link"
                    onClick={handleBurgerMenu}
                  >
                    Smart beach
                  </Link>
                  <Link
                    to="/smart-space/eng#space-eng"
                    className="header__sub-link"
                    onClick={handleBurgerMenu}
                  >
                    Smart space
                  </Link>
                  <Link
                    to="/smart-waste-sites/eng#waste-sites-eng"
                    className="header__sub-link"
                    onClick={handleBurgerMenu}
                  >
                    Smart Stations For Garbage
                  </Link>
                </>
              ) : (
                ""
              )}
              <li className="header__list-item" onClick={handleBurgerMenu}>
                <Link to="/eng#advantage_eng" className="header__link">
                  Advantages
                </Link>
              </li>
              <span
                className={`header__arrow_2 ${
                  isMenuOpenSecond ? "header__arrow_2_active" : ""
                }`}
                onClick={handleSubMenuProductsSecond}
              ></span>
              <li className="header__list-item" onClick={handleBurgerMenu}>
                <Link to="/eng#services_eng" className="header__link">
                  Services
                </Link>
              </li>
              {isMenuOpenSecond ? (
                <>
                  <Link to="/design-service/eng#design-eng" className="header__sub-link" onClick={handleBurgerMenu}>
                    Customized Video Analistics
                  </Link>
                  <Link to="/r-d-service/eng#r-d-eng" className="header__sub-link" onClick={handleBurgerMenu}>
                    R&amp;D Performance
                  </Link>
                </>
              ) : (
                ""
              )}
              <li className="header__list-item" onClick={handleBurgerMenu}>
                <Link to="/eng#blog_eng" className="header__link">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="header__language">
            <li className="header__language-item">
              <Link
                to="#"
                className="header__language-link header__language-link_active"
              >
                ENG
              </Link>
            </li>
            <li className="header__language-item">
              <Link to={isRuPagePathname} className="header__language-link ">
                RUS
              </Link>
            </li>
          </ul>
        </header>
      ) : (
        <header className="header">
          <Link className="header__link" to="/">
            <img className="header__logo" src={logo} alt="Логотип 'VideoFor'" />
          </Link>
          <nav className="header__menu">
            <input
              id="header__menu-toggle"
              type="checkbox"
              onClick={handleBurgerMenu}
            />
            <label className="header__menu-btn" htmlFor="header__menu-toggle">
              <span className="header__menu-btn-before"></span>
            </label>

            <ul
              className={`header__column-links ${
                isBurgerMenu ? "header__column-links_visible" : ""
              }`}
            >
              <span
                className={`header__arrow_1 ${
                  isMenuOpen ? "header__arrow_1_active" : ""
                }`}
                onClick={handleSubMenuProducts}
              ></span>
              <li className="header__list-item" onClick={handleBurgerMenu}>
                <Link to="/#products" className="header__link">
                  Продукты
                </Link>
              </li>
              {isMenuOpen ? (
                <>
                  <Link
                    to="/smart-city#city"
                    className="header__sub-link"
                    onClick={handleBurgerMenu}
                  >
                    Умный город
                  </Link>
                  <Link
                    to="/smart-beach#beach"
                    className="header__sub-link"
                    onClick={handleBurgerMenu}
                  >
                    Умный пляж
                  </Link>
                  <Link
                    to="/smart-space#space"
                    className="header__sub-link"
                    onClick={handleBurgerMenu}
                  >
                    Умная территория
                  </Link>
                  <Link
                    to="/smart-waste-sites#waste-sites"
                    className="header__sub-link"
                    onClick={handleBurgerMenu}
                  >
                    Умные станции сбора мусора
                  </Link>
                </>
              ) : (
                ""
              )}
              <li className="header__list-item" onClick={handleBurgerMenu}>
                <Link to="/#advantage" className="header__link">
                  Преимущества
                </Link>
              </li>
              <span
                className={`header__arrow_2 ${
                  isMenuOpenSecond ? "header__arrow_2_active" : ""
                }`}
                onClick={handleSubMenuProductsSecond}
              ></span>
              <li className="header__list-item" onClick={handleBurgerMenu}>
                <Link to="/#services" className="header__link">
                  Услуги
                </Link>
              </li>
              {isMenuOpenSecond ? (
                <>
                  <Link to="/design-service#design" className="header__sub-link" onClick={handleBurgerMenu}>
                    Проектирование систем
                  </Link>
                  <Link to="/r-d-service#r-d" className="header__sub-link" onClick={handleBurgerMenu}>
                    Выполнение НИОКР
                  </Link>
                </>
              ) : (
                ""
              )}
              <li className="header__list-item" onClick={handleBurgerMenu}>
                <Link to="/#blog" className="header__link">
                  Блог
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="header__language">
            <li className="header__language-item">
              <Link
                to={`${
                  location.pathname === "/" ? `eng` : `${location.pathname}/eng`
                }`}
                className="header__language-link"
              >
                ENG
              </Link>
            </li>
            <li className="header__language-item">
              <Link
                to="#"
                className="header__language-link header__language-link_active"
              >
                RUS
              </Link>
            </li>
          </ul>
        </header>
      )}
    </>
  );
}

export default Header;
