import React from "react";
import { useLocation } from "react-router-dom";

function Info({title}) {
  const location = useLocation();

  return (
    <section className={`info ${location.pathname !== "/" ? 'info_blog' : ''}`}>
      <h2 className="chapter">{title}</h2>
      <form className="form">
        <div className="form__container">
          <input className="form__input" id="info__checkbox" type="email" placeholder="E-mail"></input>
          <button className="button form__button" type="submit">
            Получить
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
            <span></span>Согласие на обработку персональных данных
          </label>
        </div>
      </form>
    </section>
  );
}

export default Info;
