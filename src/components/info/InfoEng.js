import React from "react";
import { useLocation } from "react-router-dom";

function InfoEng({ title, onSubmitInfoForm }) {
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
    <section
      className={`info ${location.pathname !== "/eng" ? "info_eng" : ""}`}
    >
      <h2 className="chapter">{title}</h2>
      <form className="form" name="form-info-email" onSubmit={handleSubmit}>
        <div className="form__container form__container_eng">
          <input
            ref={emailRef}
            id="info-email-eng"
            className="form__input form__input_eng"
            type="email"
            placeholder="E-mail"
            required
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
            defaultChecked="checked"
            required
          />
          <label
            className="form__checbox-text form__checbox-text_eng"
            htmlFor="checkbox"
          >
            <span></span>Consent to the processing of personal data
          </label>
        </div>
      </form>
    </section>
  );
}

export default InfoEng;
