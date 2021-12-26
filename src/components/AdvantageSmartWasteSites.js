import React from "react";
import full_tank from "../images/advantage-pages/full_tank.png";
import iron_tank from "../images/advantage-pages/iron_tank.png";

function AdvantageSmartSites({ onContactForm }) {
  return (
    <section className="advantage-page">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={full_tank}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text">
          <h2 className="advantage-page__title advantage-page__title_big">
            УМНЫЕ ПЛОЩАДКИ РАЗДЕЛЬНОГО СБОРА МУСОРА И ОТХОДОВ
          </h2>
          <p className="advantage-page__text">
            Вопрос экологии — это один из важнейших и резко нависших над
            человечеством вопросов. Что делать с горами мусора? Как оставить
            потомкам не мусорный полигон, а живую планету? Первый шаг к спасению
            окружающей среды — умные площадки для раздельного сбора мусора и
            отходов
          </p>
        </div>
      </div>
      <button className="advantage-page__button" onClick={onContactForm}>
        Связаться с нами
      </button>

      <div className="advantage-page__container advantage-page__container_right">
        <img
          className="advantage-page__image advantage-page__image_right"
          src={iron_tank}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text advantage-page__container-text_right">
          <h2 className="advantage-page__title advantage-page__title_right">
            ЧТО УМЕЕТ НАША СИСТЕМА
          </h2>
          <ul className="advantage-page__list">
            <li className="advantage-page__list-item">
              Сообщать о наполненности контейнеров
            </li>
            <li className="advantage-page__list-item">
              Оповещать о наилучшем для прибытия спецтранспорта времени
            </li>
            <li className="advantage-page__list-item">
              Фиксировать любые нарушения в эксплуатации станций
            </li>
            <li className="advantage-page__list-item">
              Анализировать и выдавать рекомендации по логистике
            </li>
            <li className="advantage-page__list-item">Защита от вандализма</li>
            <li className="advantage-page__list-item">
              Фиксировать необычную активность
            </li>
            <li className="advantage-page__list-item">Хранить видеоархив</li>
          </ul>
        </div>
      </div>
      <div className="advantage-page__conteiner-button">
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
      <div className="advantage-page__container advantage-page__container_waste advantage-page__container_center smart-waste-sites-background-image">
        <div className="advantage-page__container-products">
          <p className="advantage-page__text advantage-page__text_product">
            Экономия ресурсов и средств за счет логистических рекомендаций
          </p>
          <p className="advantage-page__text advantage-page__text_product">
            Система разработана с учётом
            <br />
            UI/UX технологий
          </p>
        </div>
        <div className="advantage-page__container-products advantage-page__container-products_right">
          <p className="advantage-page__text advantage-page__text_product">
            Возможность встраивания модулей в уже установленные системы
          </p>
          <p className="advantage-page__text advantage-page__text_product">
            Полностью российская разработка
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdvantageSmartSites;
