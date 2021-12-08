import React from "react";

function Info() {
  return (
    <section className="info">
      <h2 className="chapter">Запросить подробную информацию</h2>
      <form className="form">
        <div className="form__container">
          <input className="form__input" type="email" value="E-mail"></input>
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
