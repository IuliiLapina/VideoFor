import React from "react";

function InfoTooltipEng ({ isOpen, onClose, isClear, handleSubmit }) {
  const [isChoicePhone, setIsChoicePhone] = React.useState(false);
  const [isChoiceEmail, setIsChoiceEmail] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  function handlePhone() {
    setIsChoicePhone(true);
  }
  function handleEmail() {
    setIsChoiceEmail(true);
  }
  function chengeCheckbox() {
    setChecked(!checked);
  }

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""} }`}>
      <div className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}
        ></button>

        <h3
          className={`popup__title ${
            isChoicePhone ? "popup__title_disabled" : ""
          } ${isChoiceEmail ? "popup__title_disabled" : ""}`}
        >
          PREFERRED COMMUNICATION METHO
        </h3>

        <div className="popup__contact-container">
          <button
            className={`button_form ${
              isChoicePhone ? "button_form-disabled" : ""
            } ${isChoiceEmail ? "button_form-disabled" : ""}`}
            type="button"
            onClick={handlePhone}
          >
            Phone
          </button>
          <button
            className={`button_form ${
              isChoicePhone ? "button_form-disabled" : ""
            } ${isChoiceEmail ? "button_form-disabled" : ""}`}
            type="button"
            onClick={handleEmail}
          >
            E-mail
          </button>
        </div>

        {isChoicePhone ? (
          <form
            className="popup__form"
            //noValidate
            onSubmit={handleSubmit}
          >
            <input
              className="form__input form__input_popup"
              type="tel"
              placeholder="Phone"
              required
            />
            <input
              className="form__input form__input_popup"
              type="text"
              placeholder="Name"
              required
            />

            <div className="checkbox__container checkbox__container_popup-area">
              <input
                type="checkbox"
                id="checkbox-area"
                className="form__checbox"
                onChange={chengeCheckbox}
              />
              <label
                className="form__checbox-text form__checbox-text_radio"
                for="checkbox-area"
              >
                <span className="checkbox_radio"></span>Leave a comment
              </label>
            </div>
            {checked ? (
              <textarea
                className="form__textarea"
                placeholder="Your comment..."
                cols="40"
              ></textarea>
            ) : (
              ""
            )}

            <input
              type="submit"
              className="button_form button_form-submit"
              value="Call back"
            />

            <div className="checkbox__container checkbox__container_popup">
              <input
                type="checkbox"
                id="checkbox"
                checked="checked"
                className="form__checbox"
              />
              <label
                className="form__checbox-text form__checbox-text_popup"
                for="checkbox"
              >
                <span className="checkbox_form"></span>Consent to the processing of personal data
              </label>
            </div>
          </form>
        ) : (
          ""
        )}

        {isChoiceEmail ? (
          <form
            className="popup__form"
            //noValidate
            onSubmit={handleSubmit}
          >
            <input
              className="form__input form__input_popup"
              type="email"
              placeholder="E-mail"
              required
            />
            <input
              className="form__input form__input_popup"
              type="text"
              placeholder="Name"
              required
            />

            <div className="checkbox__container checkbox__container_popup-area">
              <input
                type="checkbox"
                id="checkbox-area"
                className="form__checbox"
                onChange={chengeCheckbox}
              />
              <label
                className="form__checbox-text form__checbox-text_radio"
                for="checkbox-area"
              >
                <span className="checkbox_radio"></span>Leave a comment
              </label>
            </div>
            {checked ? (
              <textarea
                className="form__textarea"
                placeholder="Your comment..."
                cols="40"
              ></textarea>
            ) : (
              ""
            )}

            <input
              type="submit"
              className="button_form button_form-submit"
              value="Contact"
            />

            <div className="checkbox__container checkbox__container_popup">
              <input
                type="checkbox"
                id="checkbox"
                checked="checked"
                className="form__checbox"
              />
              <label
                className="form__checbox-text form__checbox-text_popup"
                for="checkbox"
              >
                <span className="checkbox_form"></span>Consent to the processing of personal data
              </label>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default InfoTooltipEng;
