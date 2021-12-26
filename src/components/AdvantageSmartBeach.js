import React from "react";
import women from "../images/advantage-pages/women.png";
import beach from "../images/advantage-pages/beach.png";

function AdvantageSmartBeach({ onContactForm }) {
  return (
    <section className="advantage-page">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={women}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text">
          <h2 className="advantage-page__title">УМНЫЙ ПЛЯЖ</h2>
          <p className="advantage-page__text">
            Ежегодно в России в водоемах гибнет более четырех тысяч человек.
            Задача системы онлайн-видеоанализа «Умный Пляж» — предупредить и
            предотвратить трагедию
          </p>
        </div>
      </div>
      <button className="advantage-page__button" onClick={onContactForm}>
        Связаться с нами
      </button>

      <div className="advantage-page__container advantage-page__container_right">
        <img
          className="advantage-page__image advantage-page__image_right"
          src={beach}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text advantage-page__container-text_right">
          <h2 className="advantage-page__title advantage-page__title_right">
            ЧТО УМЕЕТ НАША СИСТЕМА
          </h2>
          <ul className="advantage-page__list">
            <li className="advantage-page__list-item">
            Детектировать утопающих людей
            </li>
            <li className="advantage-page__list-item">
            Фиксировать нахождение человека в запрещенной зоне
            </li>
            <li className="advantage-page__list-item">
            Координировать спасателей  и сообщать спецслужбам об угрозах
            </li>
            <li className="advantage-page__list-item">
            Фиксировать и контролировать перемещения разных типов объектов
            </li>
            <li className="advantage-page__list-item">
            Автоматически транслировать голосовые 
            <br/>предупреждения через громкоговорители
            </li>
            <li className="advantage-page__list-item">
            Предупреждать о появлении судов
            </li>
            <li className="advantage-page__list-item">Хранить видеоархив</li>
          </ul>
        </div>
      </div>
      <button
        className="advantage-page__button advantage-page__button_right"
        onClick={onContactForm}
      >
        Связаться с нами
      </button>

      <h2 className="advantage-page__title advantage-page__title_center">
        Преимущества продукта
      </h2>
      <div className="advantage-page__container advantage-page__container_center smart-beach-background-image">
        <div className="advantage-page__container-products">
          <p className="advantage-page__text advantage-page__text_product">
            Полный комплекс технологий, способный обеспечить максимальную
            безопасность
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
            Использование собственных ноу-хау для определения инцидентов
          </p>
        </div>
      </div>
      <p className="advantage-page__text advantage-page__text_center">
        Полностью российская разработка
      </p>
    </section>
  );
}

export default AdvantageSmartBeach;
