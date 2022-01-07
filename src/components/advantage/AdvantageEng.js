import React from "react";
import percent_1440px from "../../images/advantage-icon/percent-1140px.png";
import coat_of_arms_1440px from "../../images/advantage-icon/coat-of-arms-1440px.png";
import customization_1440px from "../../images/advantage-icon/customization-1440px.png";
import like_1440px from "../../images/advantage-icon/like-1440px.png";
import module_1440px from "../../images/advantage-icon/module-1440px.png";
import support_1440px from "../../images/advantage-icon/support-1440px.png";

function Advantage({ onContactForm }) {
  const windowWidtn = window.innerWidth;

  return (
    <section className="advantage" id="advantage">
      <h2 className="chapter">OUR ADVANTAGES</h2>
      <ul className="advantage__list advantage__list_eng">
        <li className="advantage__list-iteam">
          <img
            className="advantage__icon"
            src={percent_1440px}
            alt="Логотип 'VideoFor'"
          />
          <p className="advantage__subtitle">The accuracy of the detectors</p>
        </li>
        <li className="advantage__list-iteam">
          <img
            className="advantage__icon"
            src={coat_of_arms_1440px}
            alt="Логотип 'VideoFor'"
          />
          <p className="advantage__subtitle">Completely Russian development</p>
        </li>
        <li className="advantage__list-iteam">
          <img
            className="advantage__icon"
            src={customization_1440px}
            alt="Логотип 'VideoFor'"
          />
          <p className="advantage__subtitle">
            Initial customization of the detectors
          </p>
        </li>
        <li className="advantage__list-iteam">
          <img
            className="advantage__icon"
            src={like_1440px}
            alt="Логотип 'VideoFor'"
          />
          <p className="advantage__subtitle">
            Developed with a view to UI/UX technologies
          </p>
        </li>
        <li className="advantage__list-iteam">
          <img
            className="advantage__icon"
            src={module_1440px}
            alt="Логотип 'VideoFor'"
          />
          <p className="advantage__subtitle">
            Ability to embed into an already installed system
          </p>
        </li>
        <li className="advantage__list-iteam">
          <img
            className="advantage__icon"
            src={support_1440px}
            alt="Логотип 'VideoFor'"
          />
          <p className="advantage__subtitle">Use of our own know how</p>
        </li>
      </ul>

      <button
        className="button button_eng button_advantage"
        onClick={onContactForm}
      >
        To contact us
      </button>
    </section>
  );
}

export default Advantage;
