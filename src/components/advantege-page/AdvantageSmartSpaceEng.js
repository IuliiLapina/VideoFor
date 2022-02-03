import React from "react";
import house from "../../images/advantage-pages/house.png";
import place from "../../images/advantage-pages/place.png";

function AdvantageSmartSpaceEng({ onContactForm }) {
  return (
    <section className="advantage-page" id="space-eng" lang="en-US">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={house}
          alt="Space with people"
        />
        <div className="advantage-page__container-text advantage-page__container-text_big-heaght ">
          <h2 className="advantage-page__title">SMART SPACE</h2>
          <p className="advantage-page__text advantage-page__text">
            Public safety is a priority for any city. The more people gather in
            one place, the more risk they are exposed to. Public places without
            security and video surveillance become the site of outbreaks of
            criminal activity. Online video analysis system "Smart Space" is a
            guarantee of the safety of people in public places.
          </p>
        </div>
      </div>
      <div className="advantage-page__conteiner-button">
        <button
          className="advantage-page__button advantage-page__button_under-big-text advantage-page__button_eng"
          onClick={onContactForm}
        >
          To contact us
        </button>
      </div>
      <div className="advantage-page__container advantage-page__container_right advantage-page__container_right-eng">
        <img
          className="advantage-page__image advantage-page__image_right advantage-page__image_smart-space"
          src={place}
          alt="Square with people"
        />
        <div className="advantage-page__container-text advantage-page__container-text_right advantage-page__container-text_smart-space">
          <h2 className="advantage-page__title advantage-page__title_right">
            WHAT DOES OUR SYSTEM DO
          </h2>
          <ul className="advantage-page__list advantage-page__list_eng">
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Monitor the children and report if someone is left unattended
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Record and control the movements of different types of objects
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Analyze the congestion of public space
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Warn about possible violations
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Record unusual activity
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Send an alarm if an orphan item is found
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
      <div className="advantage-page__container advantage-page__container_center smart-space-background-image smart-space-background-image_eng">
        <div className="advantage-page__container-products advantage-page__container-products_eng advantage-page__container-products_beach-eng">
          {window.innerWidth <= 970 ? (
            <p className="advantage-page__text advantage-page__text_product">
              Minimize the risk
              <br />
              of dangerous situations
            </p>
          ) : (
            <p className="advantage-page__text advantage-page__text_product">
              Minimize the risk of dangerous situations
            </p>
          )}
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
        <div className="advantage-page__container-products advantage-page__container-products_right advantage-page__container-products_eng advantage-page__container-products_beach-eng">
          <p className="advantage-page__text advantage-page__text_product">
            The ability to integrate modules into already installed systems
          </p>
          
          {window.innerWidth <= 760 ? (
            <p className="advantage-page__text advantage-page__text_product">
            A full range of technologies capable of providing max safety
          </p>
          ) : (
            <p className="advantage-page__text advantage-page__text_product">
            A full range of technologies capable of providing maximum safety
          </p>
          )}
        </div>
      </div>
      <p className="advantage-page__text advantage-page__text_center">
        Completely Russian development
      </p>
    </section>
  );
}

export default AdvantageSmartSpaceEng;
