import React from "react";
import women from "../../images/advantage-pages/women.png";
import beach from "../../images/advantage-pages/beach.png";

function AdvantageSmartBeachEng({ onContactForm }) {
  return (
    <section className="advantage-page" id="beach-eng" lang="en-US">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={women}
          alt="Woman in the water"
        />
        <div className="advantage-page__container-text advantage-page__container-text_litle advantage-page__container-text_litle-eng">
          <h2 className="advantage-page__title">SMART BEACH</h2>
          <p className="advantage-page__text">
            More than four thousand people die in water in Russia every year.
            The task of the online video analysis system "Smart Beach" is to
            prevent and prevent a tragedy
          </p>
        </div>
      </div>
      <div className="advantage-page__conteiner-button">
        <button className="advantage-page__button advantage-page__button_eng" onClick={onContactForm}>
          To contact us
        </button>
      </div>
      <div className="advantage-page__container advantage-page__container_right">
        <img
          className="advantage-page__image advantage-page__image_right advantage-page__image_right-eng"
          src={beach}
          alt="Beach, top view"
        />
        <div className="advantage-page__container-text advantage-page__container-text_right">
          <h2 className="advantage-page__title advantage-page__title_right advantage-page__title_right-eng">
            WHAT DOES OUR SYSTEM DO
          </h2>
          <ul className="advantage-page__list advantage-page__list_eng">
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Detect drowning people
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Record the presence of a person in a prohibited area
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Coordinate rescuers and report abort the threats to special
              services
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Record and control movements of different types of objects
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Automatically broadcast voice alerts through speakers
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Warn when ships arrive
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Keep video archive
            </li>
          </ul>
        </div>
      </div>
      <div className="advantage-page__conteiner-button advantage-page__conteiner-button_left">
        <button
          className="advantage-page__button advantage-page__button_right advantage-page__button_right-eng advantage-page__button_eng"
          onClick={onContactForm}
        >
          To contact us
        </button>
      </div>

      <h2 className="advantage-page__title advantage-page__title_center">
        Product benefits
      </h2>
      <div className="advantage-page__container advantage-page__container_center smart-beach-background-image smart-beach-background-image_eng">
        <div className="advantage-page__container-products advantage-page__container-products_eng advantage-page__container-products_beach-eng">
          <p className="advantage-page__text advantage-page__text_product">
            A full range of technologies capable of providing maximum safety
          </p>
          {window.innerWidth <= 970 ? (
          <p className="advantage-page__text advantage-page__text_product">
            The system is developed taking <br/>into account 
            UI / UX technologies
          </p>) : (
          <p className="advantage-page__text advantage-page__text_product">
            The system is developed taking into account 
            <br/>UI / UX technologies
          </p>)}
        </div>
        <div className="advantage-page__container-products advantage-page__container-products_right advantage-page__container-products_eng advantage-page__container-products_beach-eng">
          <p className="advantage-page__text advantage-page__text_product">
            The system analyzes a complex of risk factors for people on water
            bodies
          </p>
          <p className="advantage-page__text advantage-page__text_product ">
            The ability to integrate modules into already installed systems
          </p>
        </div>
      </div>
      <p className="advantage-page__text advantage-page__text_center">
        Completely Russian development
      </p>
    </section>
  );
}

export default AdvantageSmartBeachEng;
