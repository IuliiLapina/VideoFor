import React from "react";
import camcorders from "../images/services-pages/camcorders.png";
import drawings from "../images/services-pages/drawings.png";

function ServiceDesignEng({ onContactForm }) {
  return (
    <section className="advantage-page" id="design-eng" lang="en-US">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={camcorders}
          alt="Lots of cameras pointing at people"
        />
        <div className="advantage-page__container-text advantage-page__container-text_services advantage-page__container-text_services-eng">
          <h2 className="advantage-page__title advantage-page__title_big advantage-page__title_services">
            CUSTOMIZED VIDEO ANALYTICS 
            <br/>SYSTEMS DESIGN
          </h2>
          <p className="advantage-page__text advantage-page__text_services ">
            Technological development has helped us to realize the value of
            human life and has given us the tools to make it safe. In cities and
            industries, video analytics is a mandatory attribute. But mistakes
            in the design of such a system can reduce the efficiency of even the
            most advanced technology
          </p>
        </div>
      </div>
      <div className="advantage-page__conteiner-button">
        <button
          className="advantage-page__button advantage-page__button_services advantage-page__button_eng"
          onClick={onContactForm}
        >
          To contact us
        </button>
      </div>
      <div className="advantage-page__container advantage-page__container_right advantage-page__container_right-eng">
        <img
          className="advantage-page__image advantage-page__image_right advantage-page__image_services"
          src={drawings}
          alt="Drawings on the table"
        />
        <div className="advantage-page__container-text advantage-page__container-text_right advantage-page__container-text_services-right">
          <h2 className="advantage-page__title advantage-page__title_right">
            WHAT DO WE OFFER
          </h2>
          <ul className="advantage-page__list advantage-page__list_eng advantage-page__list_services-eng">
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Comprehensive development of a video analytics system project
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Individual selection of parameters depending <br/>on the purpose of
              using the system
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Selection of specifications for the equipment required for the
              project
            </li>

            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Possibility to reuse the existing video surveillance system
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Analysis of requirements for the agro-industrial complex 
              <br/>and system equipment
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Selection of the necessary software modules for video analytics
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Analytics of placement of video cameras
            </li>
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
        We guarantee
      </h2>
      <div className="advantage-page__container advantage-page__container_waste advantage-page__container_center services-design-background-image services-design-background-image_eng advantage-page__container_eng">
        <div className="advantage-page__container-products advantage-page__container-products_beach-eng">
          <p className="advantage-page__text advantage-page__text_product">
            Minimizing the cost of the project, taking into account the goals of
            building the system
          </p>

          <p className="advantage-page__text advantage-page__text_product">
            Analysis of a wide range of risk factors for people and objects
          </p>
        </div>
        <div className="advantage-page__container-products advantage-page__container-products_right advantage-page__container-products_design advantage-page__container-products_eng advantage-page__container-products_beach-eng">
          <p className="advantage-page__text advantage-page__text_product">
            A project that is effective in those parameters that are important
            to you
          </p>

          <p className="advantage-page__text advantage-page__text_product">
            Individual approach to each task
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceDesignEng;
