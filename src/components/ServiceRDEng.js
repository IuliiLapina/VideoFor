import React from "react";
import desktop from "../images/services-pages/desktop.png";
import code from "../images/services-pages/code.png";

function ServiceRDEng({ onContactForm }) {
  return (
    <section className="advantage-page">
      <div className="advantage-page__container">
        <img
          className="advantage-page__image"
          src={desktop}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text advantage-page__container-text_services-rd">
          <h2 className="advantage-page__title advantage-page__title_big advantage-page__title_services advantage-page__title_services-rd advantage-page__title_services-rd-eng">
            R&amp;D  PERFORMANCE BY INDIVIDUAL ORDER
          </h2>
          <p className="advantage-page__text advantage-page__text_services ">
            We solve fundamentally new problems of computer vision for life and
            business. Our goal is to build state-of-the-art and high-tech
            systems that will reduce costs and improve safety
          </p>
        </div>
      </div>
      <div className="advantage-page__conteiner-button">
        <button className="advantage-page__button advantage-page__button_eng advantage-page__button_under-big-text-eng" onClick={onContactForm}>
          To contact us
        </button>
      </div>

      <div className="advantage-page__container advantage-page__container_right">
        <img
          className="advantage-page__image advantage-page__image_right advantage-page__image_services"
          src={code}
          alt="Логотип 'VideoFor'"
        />
        <div className="advantage-page__container-text advantage-page__container-text_right advantage-page__container-text_services-right-rd">
          <h2 className="advantage-page__title advantage-page__title_right advantage-page__title_right-rd">
            WHAT DO WE OFFER
          </h2>
          <ul className="advantage-page__list advantage-page__list_rd">
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Research and development work is carried out <br/>by high-class
              specialists
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Comprehensive system development according <br/>to individual tasks
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Development of conceptually new and adaptation of existing video
              analytics modules
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Possibility to reuse existing video surveillance systems
            </li>
            <li className="advantage-page__list-item advantage-page__list-item_beach">
              Development of unique solutions
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
      <div className="advantage-page__container advantage-page__container_waste advantage-page__container_center services-rd-background-image ">
        <div className="advantage-page__container-products advantage-page__container-products_eng">
          <p className="advantage-page__text advantage-page__text_product">
            The ability to implement the most ambitious projects
          </p>
          <p className="advantage-page__text advantage-page__text_product">
            Analysis of a wide range of risk factors for people and objects
          </p>
        </div>
        <div className="advantage-page__container-products advantage-page__container-products_right advantage-page__container-products_design advantage-page__container-products_eng">
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

export default ServiceRDEng;
