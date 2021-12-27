import React from "react";
import design from "../../images/services/design.png";
import research from "../../images/services/research.png";
import logo from "../../images/logo/logo.svg";
import { HashLink as Link } from "react-router-hash-link";

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="chapter">НАШИ УСЛУГИ</h2>
      <ul className="cards">
        <li className="card">
          <p className="card__status card__status_services">Предложение</p>
          <img
            className="card__logo card__logo_services"
            src={logo}
            alt="Логотип 'VideoFor'"
          />
          <p className="card__subtitle card__subtitle_services">
            Проектирование систем видеоаналитики
            <br />
            по индивидуальному заказу
          </p>
          <img className="card__image" src={design} alt="Логотип 'VideoFor'" />
          <Link className="card__link" to="/design-service">
            <button className="button button_card button_card-services">
              Подробнее об услуге
            </button>
          </Link>
        </li>

        <li className="card">
          <p className="card__status card__status_services">Предложение</p>
          <img
            className="card__logo card__logo_services"
            src={logo}
            alt="Логотип 'VideoFor'"
          />
          <p className="card__subtitle card__subtitle_services">
            Выполнение научно-исследовательских и опытно-конструкторских работ
            по индивидуальному заказу
          </p>
          <img
            className="card__image"
            src={research}
            alt="Логотип 'VideoFor'"
          />
          <Link className="card__link" to="/r-d-service">
            <button className="button button_card button_card-services">
              Подробнее об услуге
            </button>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Services;
