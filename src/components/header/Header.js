import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import logo from "../../images/logo/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип 'VideoFor'" />
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
            <Link to="advantage" className="header__link">
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
          <Link to="#" className="header__language-link">
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
  );
}

export default Header;
