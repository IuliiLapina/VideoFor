import React from "react";
import city_traffic_jam from "../../images/advantage-pages/city_traffic_jam.png";
import city_road from "../../images/advantage-pages/city_road.png";

function AdvantageSmartCityEng({ onContactForm }) {
  return (
    <section className="advantage-page">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={city_traffic_jam}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text advantage-page__container-text_litle">
          <h2 className="advantage-page__title">SMART CITY</h2>
          <p className="advantage-page__text">
            Traffic accidents and traffic jams cause enormous damage to both the
            urban space and the people inhabiting it. The online video analysis
            system "Smart City" was developed in order to solve existing
            problems and prevent the emergence of new ones
          </p>
        </div>
      </div>
      <div className="advantage-page__conteiner-button">
        <button
          className="advantage-page__button advantage-page__button_eng"
          onClick={onContactForm}
        >
          To contact us
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
            WHAT DOES OUR SYSTEM DO
          </h2>
          <ul className="advantage-page__list">
            <li className="advantage-page__list-item">
              Distinguish between vehicle types
            </li>
            <li className="advantage-page__list-item">
              Analyze traffic congestion
            </li>
            <li className="advantage-page__list-item">
              Identify traffic congestion
            </li>
            <li className="advantage-page__list-item">
              Detection traffic violations
            </li>
            <li className="advantage-page__list-item">
              Record traffic violations and road accidents
            </li>
            <li className="advantage-page__list-item">
              Collect transport statistics
            </li>
            <li className="advantage-page__list-item">Keep video archive</li>
          </ul>
        </div>
      </div>
      <div className="advantage-page__conteiner-button advantage-page__conteiner-button_left">
        <button
          className="advantage-page__button advantage-page__button_right advantage-page__button_eng"
          onClick={onContactForm}
        >
          To contact us
        </button>
      </div>

      <h2 className="advantage-page__title advantage-page__title_center">
        Product benefits
      </h2>
      <div className="advantage-page__container advantage-page__container_center smart-sity-background-image advantage-page__container_eng">
        <div className="advantage-page__container-products advantage-page__container-products_eng">
          <p className="advantage-page__text advantage-page__text_product">
            A full range of technologies capable of providing maximum safety
          </p>
          {window.innerWidth <= 970 ? (
            <p className="advantage-page__text advantage-page__text_product">
              The system is developed taking <br />
              into account UI / UX technologies
            </p>
          ) : (
            <p className="advantage-page__text advantage-page__text_product">
              The system is developed taking into account
              <br />
              UI / UX technologies
            </p>
          )}
        </div>
        <div className="advantage-page__container-products advantage-page__container-products_right advantage-page__container-products_eng">
          <p className="advantage-page__text advantage-page__text_product">
            The ability to integrate modules into already installed systems
          </p>

          <p className="advantage-page__text advantage-page__text_product advantage-page__text_product-top">
            Use of our own know how
          </p>
        </div>
      </div>
      <p className="advantage-page__text advantage-page__text_center">
        Completely Russian development
      </p>
    </section>
  );
}

export default AdvantageSmartCityEng;
