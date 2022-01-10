import React from "react";
import { useLocation } from "react-router-dom";

function InfoEng ({ title }) {
  const location = useLocation();

  return (
    <section className={`info ${location.pathname !== "/eng" ? 'info_eng' : ''}`}>
      <h2 className="chapter">{title}</h2>
      <form className="form">
        <div className="form__container form__container_eng">
          <input
            className="form__input form__input_eng"
            id="info__checkbox"
            type="email"
            placeholder="E-mail"
          ></input>
          <button
            className="button form__button form__button_eng"
            type="submit"
          >
            GET
          </button>
        </div>

        <div className="checkbox__container">
          <input
            type="checkbox"
            className="form__checbox"
            id="checkbox"
            checked="checked"
          />
          <label className="form__checbox-text form__checbox-text_eng" for="checkbox">
            <span></span>Consent to the processing of personal data
          </label>
        </div>
      </form>
    </section>
  );
}

export default InfoEng;
