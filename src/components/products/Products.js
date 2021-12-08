import React from "react";
import logo_sova from "../../images/logo/logo_sova.png";
import trafic from "../../images/products/trafic.png";
import beach from "../../images/products/beach.png";
import security from "../../images/products/security.png";
import monitoring from "../../images/products/monitoring.png";

function Products() {
  return (
    <section className="products">
      <h2 className="chapter">НАШИ ПРОДУКТЫ</h2>
      <ul className="cards">
        <li className="card">
          <p className="card__status">Новинка</p>
          <img
            className="card__logo"
            src={logo_sova}
            alt="Логотип 'VideoFor'"
          />
          <p className="card__subtitle">
            Анализ трафика, нарушения правил дорожного движения, регистрация
            аварий
          </p>
          <img className="card__image" src={trafic} alt="Логотип 'VideoFor'" />
          <button className="button button_card">Подробнее о продукте</button>
        </li>

        <li className="card">
          <p className="card__status">Новинка</p>
          <img
            className="card__logo"
            src={logo_sova}
            alt="Логотип 'VideoFor'"
          />
          <p className="card__subtitle">
            Отслеживание тонущих, нахождение в запрещенных зонах,
            автоматизированная трансляция объявлений и вызов спасателей
          </p>
          <img className="card__image" src={beach} alt="Логотип 'VideoFor'" />
          <button className="button button_card">Подробнее о продукте</button>
        </li>

        <li className="card">
          <p className="card__status">В разработке</p>
          <img
            className="card__logo"
            src={logo_sova}
            alt="Логотип 'VideoFor'"
          />
          <p className="card__subtitle">
            Охрана памятников, общественных пространств и детских площадок
            Охрана от вандализма и ситуаций, угрожающих здоровью посетителей
          </p>
          <img
            className="card__image"
            src={security}
            alt="Логотип 'VideoFor'"
          />
          <button className="button button_card">Подробнее о продукте</button>
        </li>

        <li className="card">
          <p className="card__status">В разработке</p>
          <img
            className="card__logo"
            src={logo_sova}
            alt="Логотип 'VideoFor'"
          />
          <p className="card__subtitle">
            Мониторинг эксплуатации контейнеров твердых бытовых отходов,
            идентификация нарушений, оценка наполненности
          </p>
          <img
            className="card__image"
            src={monitoring}
            alt="Логотип 'VideoFor'"
          />
          <button className="button button_card">Подробнее о продукте</button>
        </li>
      </ul>
    </section>
  );
}

export default Products;
