import React from "react";
import full_tank from "../../images/advantage-pages/full_tank.png";
import iron_tank from "../../images/advantage-pages/iron_tank.png";

function AdvantageSmartSitesEng({ onContactForm }) {
  return (
    <section className="advantage-page" id="waste-sites-eng">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={full_tank}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text  advantage-page__container-text_big-heaght">
          <h2 className="advantage-page__title advantage-page__title_big">
            SMART STATIONS 
            <br/>FOR GARBAGE AND WASTE SORTING
          </h2>
          <p className="advantage-page__text advantage-page__subtitle_waste">
            The question of the environment is one of the most important and
            stark questions facing mankind. What should we do with mountains of
            rubbish? How to leave the descendants not a garbage landfill, but a
            living green planet? The first step to saving the environment -
            smart stations for garbage and waste sorting
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
          className="advantage-page__image advantage-page__image_right advantage-page__image_right-eng"
          src={iron_tank}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text advantage-page__container-text_right advantage-page__container-text_smart-space">
          <h2 className="advantage-page__title advantage-page__title_right advantage-page__title_right-eng">
            WHAT DOES OUR SYSTEM DO
          </h2>
          <ul className="advantage-page__list advantage-page__list_eng">
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Notify about the fullness of containers
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Notify about the best time for the arrival of special vehicles
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Record any violations in the operation of stations
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Analyze issue recommendations for logistics
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Protection against vandalism
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Record unusual activity
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Keep video archive
            </li>
          </ul>
        </div>
      </div>
      <div className="advantage-page__conteiner-button advantage-page__conteiner-button_left">
        <button
          className="advantage-page__button advantage-page__button_right advantage-page__button_eng "
          onClick={onContactForm}
        >
          To contact us
        </button>
      </div>
      <h2 className="advantage-page__title advantage-page__title_center">
        Product benefits
      </h2>
      <div className="advantage-page__container advantage-page__container_waste advantage-page__container_center smart-waste-sites-background-image smart-waste-sites-background-image_eng advantage-page__container_eng">
        <div className="advantage-page__container-products advantage-page__container-products_eng advantage-page__container-products_beach-eng">
          <p className="advantage-page__text advantage-page__text_product">
            Saving resources and costs due to logistics recommendations
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
        <div className="advantage-page__container-products advantage-page__container-products_right advantage-page__container-products_eng advantage-page__container-products_beach-eng">
          <p className="advantage-page__text advantage-page__text_product ">
            The ability to integrate modules into already installed systems
          </p>
          <p className="advantage-page__text advantage-page__text_product">
            Completely Russian development
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdvantageSmartSitesEng;
