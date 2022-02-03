import React from "react";
import promo from "../../images/promo/promo.png";

function PromoEng({ onContactForm }) {
  return (
    <section className="promo" lang="en-US">
      <h1 className="promo__title">FOR BUSINESS. FOR CITY. FOR YOU.</h1>
      <p className="promo__subtitle">
        Unique solutions and software based on computer vision
        <br />
        and artificial intelligence technologies
      </p>
      <div className="promo__container">
        <img
          className="promo__picture"
          src={promo}
          alt="Art 'Neural Networks'"
        />
      </div>
      <button
        className="button button_eng"
        type="button"
        onClick={onContactForm}
      >
        To contact us
      </button>
    </section>
  );
}

export default PromoEng;
