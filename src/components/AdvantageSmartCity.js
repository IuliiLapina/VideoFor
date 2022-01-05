import React from "react";
import city_traffic_jam from "../images/advantage-pages/city_traffic_jam.png";
import city_road from "../images/advantage-pages/city_road.png";

function AdvantageSmartCity({ onContactForm }) {
  return (
    <section className="advantage-page">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={city_traffic_jam}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text">
          <h2 className="advantage-page__title">УМНЫЙ ГОРОД</h2>
          <p className="advantage-page__text">
            ДТП и пробки наносят огромный ущерб как городскому пространству, так
            и людям, населяющим его. Система онлайн-видеоанализа «Умный Город»
            была разработана для того, чтобы разрешить существующие проблемы и
            предупредить возникновение новых
          </p>
        </div>
      </div>
      <div className="advantage-page__conteiner-button">
        <button className="advantage-page__button" onClick={onContactForm}>
          Связаться с нами
        </button>
      </div>

      <div className="advantage-page__container advantage-page__container_right">
        <img
          className="advantage-page__image advantage-page__image_right"
          src={city_road}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text advantage-page__container-text_right">
          <h2 className="advantage-page__title advantage-page__title_right">
            ЧТО УМЕЕТ НАША СИСТЕМА
          </h2>
          <ul className="advantage-page__list">
            <li className="advantage-page__list-item">
              Различать типы транспортных средств
            </li>
            <li className="advantage-page__list-item">
              Анализировать загруженность трафика
            </li>
            <li className="advantage-page__list-item">
              Определять дорожные заторы
            </li>
            <li className="advantage-page__list-item">
              Фиксировать нарушения ПДД
            </li>
            <li className="advantage-page__list-item">
              Фиксировать аварии и ДТП
            </li>
            <li className="advantage-page__list-item">
              Собирать транспортную статистику
            </li>
            <li className="advantage-page__list-item">Хранить видеоархив</li>
          </ul>
        </div>
      </div>
      <div className="advantage-page__conteiner-button advantage-page__conteiner-button_left">
        <button
          className="advantage-page__button advantage-page__button_right"
          onClick={onContactForm}
        >
          Связаться с нами
        </button>
      </div>
      <h2 className="advantage-page__title advantage-page__title_center">
        Преимущества продукта
      </h2>
      <div className="advantage-page__container advantage-page__container_center smart-sity-background-image">
        <div className="advantage-page__container-products">
        {window.innerWidth <= 320 ? (<p className="advantage-page__text advantage-page__text_product">
            Полный комплекс технологий, способный 
            обеспечить максимальную безопасность
          </p>) : (<p className="advantage-page__text advantage-page__text_product">
            Полный комплекс технологий, способный 
            <br/>обеспечить максимальную безопасность
          </p>)}
          
          <p className="advantage-page__text advantage-page__text_product">
            Система разработана с учётом
            <br />
            UI/UX технологий
          </p>
        </div>
        <div className="advantage-page__container-products advantage-page__container-products_right">
          <p className="advantage-page__text advantage-page__text_product">
            Возможность встраивания модулей 
            <br/>в уже установленные системы
          </p>

          <p className="advantage-page__text advantage-page__text_product advantage-page__text_product-top">
            Использование собственных ноу-хау 
            <br/>для определения инцидентов
          </p>
        </div>
      </div>
      <p className="advantage-page__text advantage-page__text_center">
        Полностью российская разработка
      </p>
    </section>
  );
}

export default AdvantageSmartCity;
