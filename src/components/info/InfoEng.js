import React from "react";
import { useLocation } from "react-router-dom";

function Info({ title }) {
  const location = useLocation();

  return (
    <section className="info">
      <h2 className="chapter">{title}</h2>
      <form className="form">
        <div className="form__container form__container_eng">
          <input
            className="form__input"
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
          <label className="form__checbox-text" for="checkbox">
            <span></span>Consent to the processing of personal data
          </label>
        </div>
      </form>
    </section>
  );
}

export default Info;
