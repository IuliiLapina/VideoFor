import React from "react";
import design from "../../images/services/design.png";
import research from "../../images/services/research.png";
import logo from "../../images/logo/logo.svg";
import { HashLink as Link } from "react-router-hash-link";

function ServicesEng() {
  return (
    <section className="services" id="services">
      <h2 className="chapter">OUR SERVICES</h2>
      <ul className="cards">
        <li className="card card_eng">
          <p className="card__status card__status_services">Offer</p>
          <img
            className="card__logo card__logo_services"
            src={logo}
            alt="Логотип 'VideoFor'"
          />
          <p className="card__subtitle card__subtitle_services card__subtitle_services-eng">
            Design of video analytics systems for an individual order
          </p>
          <img className="card__image" src={design} alt="Логотип 'VideoFor'" />
          <Link className="card__link" to="/design-service">
            <button className="button button_card button_card-eng">
              DETAILS
            </button>
          </Link>
        </li>

        <li className="card card_eng">
          <p className="card__status card__status_services">Offer</p>
          <img
            className="card__logo card__logo_services"
            src={logo}
            alt="Логотип 'VideoFor'"
          />
          <p className="card__subtitle card__subtitle_services card__subtitle_services-eng">
            Research and development work for an individual order
          </p>
          <img
            className="card__image"
            src={research}
            alt="Логотип 'VideoFor'"
          />
          <Link className="card__link" to="/r-d-service">
            <button className="button button_card button_card-eng">
              DETAILS
            </button>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default ServicesEng;