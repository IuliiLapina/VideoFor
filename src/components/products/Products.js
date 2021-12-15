import React from "react";
import logo_sova from "../../images/logo/logo_sova.png";
import trafic from "../../images/products/trafic.png";
import beach from "../../images/products/beach.png";
import security from "../../images/products/security.png";
import monitoring from "../../images/products/monitoring.png";

function Products() {
  const windowWidtn = window.innerWidth;

  return (
    <section className="products" id="products">
      <h2 className="chapter">НАШИ ПРОДУКТЫ</h2>
      <ul className="cards">
        <li className="card">
          <p className="card__status">Новинка</p>
          <img
            className="card__logo"
            src={logo_sova}
            alt="Логотип 'VideoFor'"
          />
          {windowWidtn <= 768 ? (
            <p className="card__subtitle">
              Подробный и круглосуточный анализ трафика, регистрация нарушений
              правил дорожного движения, аварий
            </p>
          ) : (
            <p className="card__subtitle">
              Подробный и круглосуточный анализ трафика, регистрация нарушений
              правил дорожного движения, аварий
            </p>
          )}
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
          {windowWidtn <= 768 ? (
            <p className="card__subtitle">
              Отслеживание тонущих, оповещение о купающихся в запретных зонах,
              автоматизированная система объявлений
            </p>
          ) : (
            <p className="card__subtitle">
              Отслеживание тонущих, оповещение о купающихся в запретных зонах,
              автоматизированная система объявлений, моментальный вызов
              спасателей
            </p>
          )}
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
          {windowWidtn <= 768 ? (
            <p className="card__subtitle">
              Охрана памятников, общественных пространств, защита от вандализма
              и ситуаций, угрожающих безопасности
            </p>
          ) : (
            <p className="card__subtitle">
              Охрана памятников, общественных пространств, детских площадок,
              защита от вандализма и ситуаций, угрожающих безопасности
            </p>
          )}
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
          {windowWidtn <= 768 ? (
            <p className="card__subtitle">
              Мониторинг эксплуатации контейнеров для ТБО, фиксирование
              нарушений, оценка наполненности
            </p>
          ) : (
            <p className="card__subtitle">
              Мониторинг эксплуатации контейнеров для сортировки твердых бытовых
              отходов, фиксирование нарушений, оценка наполненности, защита от
              вандализма
            </p>
          )}
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
