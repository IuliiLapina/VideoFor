import React from "react";
import desktop from "../images/services-pages/desktop.png";
import code from "../images/services-pages/code.png";

function ServiceRD({ onContactForm }) {
  return (
    <section className="advantage-page">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={desktop}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text advantage-page__container-text_services">
          <h2 className="advantage-page__title advantage-page__title_big">
            ВЫПОЛНЕНИЕ НИОКР ПО ИНДИВИДУАЛЬНОМУ ЗАКАЗУ
          </h2>
          <p className="advantage-page__text advantage-page__text_services ">
            Мы решаем принципиально новые задачи компьютерного зрения для жизни
            и бизнеса. Наша цель — построение новейших и высокотехнологичных
            систем, которые позволят снизить расходы и повысить уровень
            безопасности
          </p>
        </div>
      </div>
      <button className="advantage-page__button" onClick={onContactForm}>
        Связаться с нами
      </button>

      <div className="advantage-page__container advantage-page__container_right">
        <img
          className="advantage-page__image advantage-page__image_right"
          src={code}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text advantage-page__container-text_right">
          <h2 className="advantage-page__title advantage-page__title_right">
            ЧТО МЫ ПРЕДЛАГАЕМ
          </h2>
          <ul className="advantage-page__list">
            <li className="advantage-page__list-item">
              Научно-исследовательские и опытно-конструкторские работы <br />
              выполняются специалистами высокого класса
            </li>
            <li className="advantage-page__list-item">
              Всесторонняя разработка системы сообразно с индивидуальными <br />{" "}
              задачами
            </li>
            <li className="advantage-page__list-item">
              Разработка концептуально новых и адаптация существующих <br />
              модулей видеоаналитики
            </li>
            <li className="advantage-page__list-item">
              Предусмотрена возможность переиспользования <br />
              существующих систем видеонаблюдения
            </li>
            <li className="advantage-page__list-item">
              Разработка уникальных решений
            </li>
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
        Мы гарантируем
      </h2>
      <div className="advantage-page__container advantage-page__container_waste advantage-page__container_center services-rd-background-image">
        <div className="advantage-page__container-products">
          <p className="advantage-page__text advantage-page__text_product">
            Анализ обширного комплекса факторов риска для людей и объектов
          </p>
          <p className="advantage-page__text advantage-page__text_product">
            Возможность реализации самых амбициозных проектов
          </p>
        </div>
        <div className="advantage-page__container-products advantage-page__container-products_right">
          <p className="advantage-page__text advantage-page__text_product">
            Проект, эффективный по тем параметрам, которые важны именно вам
          </p>
          <p className="advantage-page__text advantage-page__text_product">
            Индивидуальный подход к каждой задаче
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceRD;
