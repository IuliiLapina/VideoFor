import React from "react";

function InfoTooltip({ isOpen, onClose, handleSubmit, onEmail, onPhone }) {
  const [isChoicePhone, setIsChoicePhone] = React.useState(false);
  const [isChoiceEmail, setIsChoiceEmail] = React.useState(false);

  function handlePhone() {
    setIsChoicePhone(true);
  }

  function handleEmail() {
    setIsChoiceEmail(true);
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
          ПРЕДПОЧИТАЕМЫЙ СПОСОБ СВЯЗИ
        </h3>
        <div className="popup__contact-container">
          <button
            className={`button button_form ${
              isChoicePhone ? "button_form-disabled" : ""
            } ${isChoiceEmail ? "button_form-disabled" : ""}`}
            type="button"
            onClick={handlePhone}
          >
            Телефон
          </button>
          <button
            className={`button button_form ${
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
              placeholder="Телефон"
              required
            />
            <input
              className="form__input form__input_popup"
              type="text"
              placeholder="Имя"
              required
            />

            <div className="checkbox__container checkbox__container_popup-area">
              <input type="checkbox" id="checkbox" className="form__checbox" />
              <label className="form__checbox-text" for="checkbox">
                <span className="checkbox_radio"></span>Оставить комментарий
              </label>
            </div>

            <input
              type="submit"
              className="button button_form button_form-submit"
              value="Перезвонить"
            />

            <div className="checkbox__container checkbox__container_popup">
              <input type="checkbox" id="checkbox" checked="checked" className="form__checbox" />
              <label className="form__checbox-text form__checbox-text_popup" for="checkbox">
                <span className="checkbox_form"></span>Согласие на обработку персональных данных
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
              placeholder="Имя"
              required
            />

            <div className="checkbox__container checkbox__container_popup-area">
              <input type="checkbox" id="checkbox" className="checkbox_radio" />
              <label className="form__checbox-text" for="checkbox">
                <span></span>Оставить комментарий
              </label>
            </div>

            <input
              type="submit"
              className="button button_form button_form-submit"
              value="Связаться"
            />

            <div className="checkbox__container checkbox__container_popup">
              <input type="checkbox" id="checkbox" checked="checked" className="form__checbox" />
              <label className="form__checbox-text form__checbox-text_popup" for="checkbox">
                <span className="checkbox_form"></span>Согласие на обработку персональных данных
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

export default InfoTooltip;
