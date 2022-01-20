import React from "react";
import girl from "../../images/promo/girl.png";
import skolkovo from "../../images/partners/skolkovo.png";
import email from "../../images/footer/email.svg";
import phone from "../../images/footer/phone.svg";
import place from "../../images/footer/place.svg";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function Footer({ onContactForm }) {
  const location = useLocation();
  let isEngPage = location.pathname.search(/eng/g);
  return (
    <>
      { isEngPage !== -1 ? (
        <footer className="footer">
          <div className="footer__resident-container">
            <p className="footer__resident">Resident</p>
            <img
              className="footer__logo"
              src={skolkovo}
              alt="Логотип Мегафон"
            />
          </div>
          <div className="footer__column">
            <ul className="footer__column-links footer__column-links_eng">
              <li className="footer__link">
                <Link className="footer__link-item" to="/smart-city/eng#city-eng">
                  Smart city
                </Link>
              </li>
              <li className="footer__link">
                <Link className="footer__link-item" to="/smart-beach/eng#beach-eng">
                  Smart beach
                </Link>
              </li>
              <li className="footer__link">
                <Link className="footer__link-item" to="/smart-space/eng#space-eng">
                  Smart space
                </Link>
              </li>
              <li className="footer__link">
                <Link className="footer__link-item" to="/smart-waste-sites/eng#waste-sites-eng">
                  Smart stations for garbage
                </Link>
              </li>
            </ul>

            <ul className="footer__column-links footer__column-links_eng">
              <li className="footer__link">
                <Link className="footer__link-item" to="/design-service/eng#design-eng">
                  System Design
                </Link>
              </li>
              <li className="footer__link">
                <Link className="footer__link-item" to="/r-d-service/eng#r-d-eng">
                  Performing R&amp;D
                </Link>
              </li>
            </ul>

            <ul className="footer__column-links-info footer__column-links-info_eng">
              <li className="footer__link-info">
                <img
                  className="footer__info-icon"
                  src={email}
                  alt="Логотип Мегафон"
                />
                <p className="footer__info-text"> info@videofor.ru</p>
              </li>
              <li className="footer__link-info">
                <img
                  className="footer__info-icon"
                  src={phone}
                  alt="Логотип Мегафон"
                />
                <p className="footer__info-text">+7 (908) 088-80-08</p>
              </li>
              <li className="footer__link-info">
                <img
                  className="footer__info-icon"
                  src={place}
                  alt="Логотип Мегафон"
                />
                <p className="footer__info-text">
                  St. Petersburg, 
                  Konstantinovskiy pr. 11, office 314
                </p>
              </li>
            </ul>
          </div>
          <button
            className={`button  button_footer button_footer-eng ${
              location.pathname !== "/eng" ? "button_disabled" : ""
            }`}
            onClick={onContactForm}
          >
            To contact us
          </button>
          <img className="footer__promo" src={girl} alt="Логотип Мегафон" />
        </footer>
      ) : (
        <footer className="footer">
          <div className="footer__resident-container">
            <p className="footer__resident">Резидент</p>

            <img
              className="footer__logo"
              src={skolkovo}
              alt="Логотип Мегафон"
            />
          </div>
          <div className="footer__column">
            <ul className="footer__column-links">
              <li className="footer__link">
                <Link className="footer__link-item" to="/smart-city#city">
                  Умный город
                </Link>
              </li>
              <li className="footer__link">
                <Link className="footer__link-item" to="/smart-beach#beach">
                  Умный пляж
                </Link>
              </li>
              <li className="footer__link">
                <Link className="footer__link-item" to="/smart-space#space">
                  Умная территория
                </Link>
              </li>
              <li className="footer__link">
                <Link className="footer__link-item" to="/smart-waste-sites#waste-sites">
                  Умные станции сбора мусора
                </Link>
              </li>
            </ul>

            <ul className="footer__column-links">
              <li className="footer__link">
                <Link className="footer__link-item" to="/design-service#design">
                  Проектирование систем
                </Link>
              </li>
              <li className="footer__link">
                <Link className="footer__link-item" to="/r-d-service#r-d">
                  Выполнение НИОКР
                </Link>
              </li>
            </ul>

            <ul className="footer__column-links-info">
              <li className="footer__link-info">
                <img
                  className="footer__info-icon"
                  src={email}
                  alt="Логотип Мегафон"
                />
                <p className="footer__info-text"> info@videofor.ru</p>
              </li>
              <li className="footer__link-info">
                <img
                  className="footer__info-icon"
                  src={phone}
                  alt="Логотип Мегафон"
                />
                <p className="footer__info-text">+7 (908) 088-80-08</p>
              </li>
              <li className="footer__link-info">
                <img
                  className="footer__info-icon"
                  src={place}
                  alt="Логотип Мегафон"
                />
                <p className="footer__info-text">
                  г. Санкт-Петербург, Константиновский пр. 11, оф. 314
                </p>
              </li>
            </ul>
          </div>
          <button
            className={`button button_footer ${
              location.pathname === "/" ? "" : "button_disabled"
            }`}
            onClick={onContactForm}
          >
            Связаться с нами
          </button>
          <img className="footer__promo" src={girl} alt="Логотип Мегафон" />
        </footer>
      )}
    </>
  );
}

export default Footer;
