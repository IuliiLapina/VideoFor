import React from "react";
import house from "../images/advantage-pages/house.png";
import place from "../images/advantage-pages/place.png";

function AdvantageSmartSpace({ onContactForm }) {
  return (
    <section className="advantage-page">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={house}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text">
          <h2 className="advantage-page__title">УМНОЕ ПРОСТРАНСТВО</h2>
          <p className="advantage-page__text">
            Безопасность в общественных местах — это приоритет для любого
            города. Чем больше собирается людей в одном месте, тем большему
            риску они подвергаются. Общественные места без охраны и
            видеонаблюдения становятся местом вспышек преступной активности.
            Система онлайн-видеоанализа «Умное пространство» — залог
            безопасности посетителей общественных мест
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
          src={place}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text advantage-page__container-text_right">
          <h2 className="advantage-page__title advantage-page__title_right">
            ЧТО УМЕЕТ НАША СИСТЕМА
          </h2>
          <ul className="advantage-page__list">
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Следить за детьми и сообщать, если кто-то остался без присмотра
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Фиксировать и контролировать перемещения разных типов объектов
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Анализировать загруженность общественного пространства
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Предупреждать о возможных нарушениях
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Фиксировать необычную активность
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Посылать тревожный сигнал в случае
              <br />
              обнаружения бесхозного предмета
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
      <div className="advantage-page__container advantage-page__container_center smart-space-background-image">
        <div className="advantage-page__container-products">
          <p className="advantage-page__text advantage-page__text_product">
            Минимизирует риск возникновения
            <br /> опасных ситуаций
          </p>
          <p className="advantage-page__text advantage-page__text_product">
            Система разработана с учётом
            <br />
            UI/UX технологий
          </p>
        </div>
        <div className="advantage-page__container-products advantage-page__container-products_right">
          <p className="advantage-page__text advantage-page__text_product">
            Возможность встраивания модулей
            <br />в уже установленные системы
          </p>

          <p className="advantage-page__text advantage-page__text_product">
            Полный комплекс технологий, способный
            <br />
            обеспечить максимальную безопасность
          </p>
        </div>
      </div>
      <p className="advantage-page__text advantage-page__text_center">
        Полностью российская разработка
      </p>
    </section>
  );
}

export default AdvantageSmartSpace;
