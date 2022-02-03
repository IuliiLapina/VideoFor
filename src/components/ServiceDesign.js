import React from "react";
import camcorders from "../images/services-pages/camcorders.png";
import drawings from "../images/services-pages/drawings.png";

function ServiceDesign({ onContactForm }) {
  return (
    <section className="advantage-page" id="design">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={camcorders}
          alt="Много камер напровлено на людей"
        />
        <div className="advantage-page__container-text advantage-page__container-text_services">
          <h2 className="advantage-page__title advantage-page__title_big advantage-page__title_services">
            ПРОЕКТИРОВАНИЕ СИСТЕМ ВИДЕОАНАЛИТИКИ ПО ИНДИВИДУАЛЬНОМУ ЗАКАЗУ
          </h2>
          <p className="advantage-page__text advantage-page__text_services ">
            Развитие технологий помогло нам осознать ценность человеческой жизни
            и дало инструмент для того, чтобы ее обезопасить. В городах и на
            производствах система видеоаналитики — это обязательный атрибут. Но
            ошибки при проектировании такой системы могут снизить эффективность
            даже самой прогрессивной технологии
          </p>
        </div>
      </div>
      <div className="advantage-page__conteiner-button">
        <button
          className="advantage-page__button advantage-page__button_services"
          onClick={onContactForm}
        >
          Связаться с нами
        </button>
      </div>
      <div className="advantage-page__container advantage-page__container_right">
        <img
          className="advantage-page__image advantage-page__image_right advantage-page__image_services"
          src={drawings}
          alt="Чертежи на столе"
        />
        <div className="advantage-page__container-text advantage-page__container-text_right advantage-page__container-text_services-right">
          <h2 className="advantage-page__title advantage-page__title_right">
            ЧТО МЫ ПРЕДЛАГАЕМ
          </h2>
          <ul className="advantage-page__list">
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Всесторонняя разработка проекта системы видеоаналитики
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Индивидуальный подбор параметров в зависимости от целей
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Подбор спецификаций необходимого для проекта оборудования
            </li>

            {window.innerWidth <= 768 ? (
              <li className="advantage-page__list-item advantage-page__list-item_beach">
                Предусмотрена возможность <br />
                переиспользования существующей системы
              </li>
            ) : (
              <li className="advantage-page__list-item advantage-page__list-item_beach">
                Предусмотрена возможность переиспользования существующей
                <br />
                системы видеонаблюдения
              </li>
            )}

            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Разбор требований к АПК и оборудованию
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Подбор необходимых программных модулей видеоаналитики
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Аналитика размещения видеокамер
            </li>
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
        Мы гарантируем
      </h2>
      <div className="advantage-page__container advantage-page__container_waste advantage-page__container_center services-design-background-image">
        <div className="advantage-page__container-products">
          {window.innerWidth <= 475 ? (
            <p className="advantage-page__text advantage-page__text_product">
              Минимизация стоимости проекта <br />с учётом целей построения{" "}
              <br />
              системы
            </p>
          ) : (
            <p className="advantage-page__text advantage-page__text_product">
              Минимизация стоимости проекта с учётом целей построения системы
            </p>
          )}

          {window.innerWidth <= 475 ? (
            <p className="advantage-page__text advantage-page__text_product">
              Анализ обширного комплекса
              <br />
              факторов риска для людей и
              <br />
              объектов
            </p>
          ) : (
            <p className="advantage-page__text advantage-page__text_product">
              Анализ обширного комплекса факторов риска для людей и объектов
            </p>
          )}
        </div>
        <div className="advantage-page__container-products advantage-page__container-products_right advantage-page__container-products_design">
          {window.innerWidth <= 475 ? (
            <p className="advantage-page__text advantage-page__text_product">
              Проект, эффективный по тем параметрам, которые важны <br />
              именно вам
            </p>
          ) : (
            <p className="advantage-page__text advantage-page__text_product">
              Проект, эффективный по тем параметрам, которые важны именно вам
            </p>
          )}
          <p className="advantage-page__text advantage-page__text_product">
            Индивидуальный подход к каждому объекту
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceDesign;
