import React from "react";
import design from "../../images/services/design.png";
import research from "../../images/services/research.png";
import logo from "../../images/logo/logo.png";
import { HashLink as Link } from "react-router-hash-link";

function ServicesEng() {
  return (
    <section className="services" id="services_eng" lang="en-US">
      <h2 className="chapter">OUR SERVICES</h2>
      <ul className="cards">
        <li className="card card_eng">
          <p className="card__status card__status_services">Offer</p>
          <img
            className="card__logo card__logo_services"
            src={logo}
            alt="'VideoFor' logo"
          />
          <p className="card__subtitle card__subtitle_services card__subtitle_services-eng">
            Design of video analytics systems for an individual order
          </p>
          <img className="card__image" src={design} alt="Art design" />
          <span className="card__under-image_before-services-eng"></span>

          <p className="card__under-image card__under-image_services-eng">
           CUSTOMIZED VIDEO ANALISTICS <br/> BY INDIVIDUAL ORDER
          </p>
          <Link className="card__link" to="/design-service/eng#design-eng">
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
            alt="'VideoFor' logo"
          />
          <p className="card__subtitle card__subtitle_services card__subtitle_services-eng">
            Research and development work for an individual order
          </p>
          <img
            className="card__image"
            src={research}
            alt="Art research"
          />
          <span className="card__under-image_before-services-eng"></span>

                    <p className="card__under-image card__under-image_services-eng">
            R&amp;D PERFOMANCE <br/> BY INDIVIDUAL ORDER
          </p>
          <Link className="card__link" to="/r-d-service/eng#r-d-eng">
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
