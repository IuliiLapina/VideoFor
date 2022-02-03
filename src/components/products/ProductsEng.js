import React from "react";
import logo_sova from "../../images/logo/logo_sova.png";
import trafic from "../../images/products/trafic.png";
import beach from "../../images/products/beach.png";
import security from "../../images/products/security.png";
import monitoring from "../../images/products/monitoring.png";
import { HashLink as Link } from "react-router-hash-link";

function ProductsEng() {
  return (
    <section className="products" id="products_eng" lang="en-US">
      <h2 className="chapter">OUR PRODUCTION</h2>
      <ul className="cards">
        <li className="card">
          <p className="card__status">New!!!</p>
          <img
            className="card__logo"
            src={logo_sova}
            alt="'Owl' logo"
          />
          <p className="card__subtitle card__subtitle_eng">
            Detailed 24-hour traffic analysis, registration of traffic
            violations and road accidents
          </p>
          <img className="card__image" src={trafic} alt="Road" />
          <span className="card__under-image_before"></span>
          <p className="card__under-image">
            SMART SITY
          </p>
          <Link className="card__link" to="/smart-city/eng#city-eng">
            <button className="button button_card button_card-eng">DETAILS</button>
          </Link>
        </li>

        <li className="card">
          <p className="card__status">New!!!</p>
          <img
            className="card__logo"
            src={logo_sova}
            alt="'Owl' logo"
          />
          <p className="card__subtitle card__subtitle_eng">
            Tracking of drowning people, notification of swimmers in restricted
            areas, automated announcement system, instant rescue call
          </p>
          <img className="card__image" src={beach} alt="Beach" />
          <span className="card__under-image_before"></span>
          <p className="card__under-image">
            SMART BEACH
          </p>
          <Link className="card__link" to="/smart-beach/eng#beach-eng">
            <button className="button button_card button_card-eng">DETAILS</button>
          </Link>
        </li>

        <li className="card">
          <p className="card__status">In drafting</p>
          <img
            className="card__logo"
            src={logo_sova}
            alt="'Owl' logo"
          />
          <p className="card__subtitle card__subtitle_eng">
            Preservation of monuments, public spaces, playgrounds. Protection
            against vandalism and prevention of dangerous situations
          </p>
          <img
            className="card__image"
            src={security}
            alt="Space"
          />
          <span className="card__under-image_before"></span>
                    <p className="card__under-image">
            SMART SPACE
          </p>
          <Link className="card__link" to="/smart-space/eng#space-eng">
            <button className="button button_card button_card-eng">DETAILS</button>
          </Link>
        </li>

        <li className="card">
          <p className="card__status">In drafting</p>
          <img
            className="card__logo"
            src={logo_sova}
            alt="'Owl' logo"
          />
          <p className="card__subtitle card__subtitle_eng">
            Monitoring the operation of stations for garbage and waste sorting,
            recording violations, assessing the fullness, vandalism defence
          </p>
          <img
            className="card__image"
            src={monitoring}
            alt="Trash can"
          />
          <span className="card__under-image_before"></span>
                    <p className={`card__under-image ${window.innerWidth <= 580 ? '' : 'card__under-image_services'}`}>
            SMART STATIONS FOR GARBAGE <br/>AND WASTE SORTING
          </p>
          <Link className="card__link" to="/smart-waste-sites/eng#waste-sites-eng">
            <button className="button button_card button_card-eng">DETAILS</button>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default ProductsEng;
