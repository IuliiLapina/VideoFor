import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип 'VideoFor'" />
      <nav className="header__menu">
        <ul className="header__column-links">
          <li className="header__list-item">
            <Link to="#" className="header__link">
              Продукты
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="#" className="header__link">
              Преимущества
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="#" className="header__link">
              Услуги
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="#" className="header__link">
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
