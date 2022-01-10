import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../images/logo/logo.svg";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  let isEngPage = location.pathname.search(/eng/g);
  let isRuPage = location.pathname.split('/');
  let popped = isRuPage.pop();
  let isRuPagePathname = isRuPage.join('/');
  console.log(isRuPage);
  console.log(popped);
  console.log(isRuPagePathname);


  return (
    <>
      {isEngPage !== -1 ? (
        <header className="header">
          <Link className="header__link" to="/eng">
            <img className="header__logo" src={logo} alt="Логотип 'VideoFor'" />
          </Link>
          <nav className="header__menu">
            <input id="header__menu-toggle" type="checkbox" />
            <label className="header__menu-btn" htmlFor="header__menu-toggle">
              <span className="header__menu-btn-before"></span>
            </label>

            <ul className="header__column-links">
              <li className="header__list-item">
                <Link to="#products" className="header__link">
                Products
                </Link>
              </li>
              <li className="header__list-item">
                <Link to="#advantage" className="header__link">
                Advantages
                </Link>
              </li>
              <li className="header__list-item">
                <Link to="#services" className="header__link">
                Services
                </Link>
              </li>
              <li className="header__list-item">
                <Link to="#blog" className="header__link">
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
              <Link
                to={isRuPagePathname}
                className="header__language-link "
              >
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
            <input id="header__menu-toggle" type="checkbox" />
            <label className="header__menu-btn" htmlFor="header__menu-toggle">
              <span className="header__menu-btn-before"></span>
            </label>

            <ul className="header__column-links">
              <li className="header__list-item">
                <Link to="#products" className="header__link">
                  Продукты
                </Link>
              </li>
              <li className="header__list-item">
                <Link to="#advantage" className="header__link">
                  Преимущества
                </Link>
              </li>
              <li className="header__list-item">
                <Link to="#services" className="header__link">
                  Услуги
                </Link>
              </li>
              <li className="header__list-item">
                <Link to="#blog" className="header__link">
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
