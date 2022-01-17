import React from "react";
import { useLocation } from "react-router-dom";

function Info({ title, onSubmitInfoForm }) {
  const location = useLocation();
  const emailRef = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmitInfoForm({
      email: emailRef.current.value,
      topic: location.pathname
    });

    emailRef.current.value = "";
  }

  return (
    <section className={`info ${location.pathname !== "/" ? "info_blog" : ""}`}>
      <h2 className="chapter">{title}</h2>
      <form
        className="form form-info-telegram"
        name="form-info-email"
        onSubmit={handleSubmit}
      >
        <div className="form__container">
          <input
            ref={emailRef}
            id="info-email"
            className="form__input"
            type="email"
            placeholder="E-mail"
            name="email-info"
            required
          ></input>
          <button className="button form__button" type="submit">
            Получить
          </button>
        </div>

        <div className="checkbox__container">
          <input
            id="checkbox"
            type="checkbox"
            className="form__checbox"
            defaultChecked="checked"
            required
          />
          <label className="form__checbox-text" htmlFor="checkbox">
            <span></span>Согласие на обработку персональных данных
          </label>
        </div>
      </form>
    </section>
  );
}

export default Info;
