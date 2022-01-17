import React from "react";
import { useLocation } from "react-router-dom";

function ContactForm({ isOpen, onClose, onSubmitContactForm }) {
  const [isChoicePhone, setIsChoicePhone] = React.useState(false);
  const [isChoiceEmail, setIsChoiceEmail] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [comment, setComment] = React.useState('');

  const location = useLocation();
  let isEngPage = location.pathname.search(/eng/g);
  const topic = location.pathname;
/*
  const emailRef = React.useRef("");
  const phoneRef = React.useRef("");
  const nameRef = React.useRef("");
  const commentRef = React.useRef("");
  function handleSubmit(e) {
    e.preventDefault();

    onSubmitContactForm({
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      name: nameRef.current.value,
      comment: commentRef.current.value,
      topic: location.pathname,
    });

    phoneRef.current.value = "";
    emailRef.current.value = "";
    nameRef.current.value = "";
    commentRef.current.value = "";
    setIsChoicePhone(false);
    setIsChoiceEmail(false);
  }
*/

function handleSubmit(e) {
  e.preventDefault();

  onSubmitContactForm({
    email,
    phone,
    name,
    comment,
    topic
  });

  setIsChoicePhone(false);
  setIsChoiceEmail(false);
}

  function handlePhone() {
    setIsChoicePhone(true);
  }
  function handleEmail() {
    setIsChoiceEmail(true);
  }
  function chengeCheckbox() {
    setChecked(!checked);
  }

  function handleChangeName(e) {
    setName(e.target.value)
  }
  function handleChangePhone(e) {
    setPhone(e.target.value)
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }
  function handleChangeComment(e) {
    setComment(e.target.value)
  }

  function handleCloseBtnClick() {
    onClose()
    setIsChoicePhone(false);
    setIsChoiceEmail(false);
  }

  return (
    <>
      {isEngPage !== -1 ? (
        <div className={`popup ${isOpen ? "popup_opened" : ""} }`}>
          <div className="popup__container">
            <button
              className="popup__close-btn"
              type="button"
              onClick={handleCloseBtnClick}
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
              <form className="popup__form" onSubmit={handleSubmit}>
                <input
            //      ref={phoneRef}
                  id="contact-phone"
                  className="form__input form__input_popup"
                  type="tel"
                  placeholder="Phone"
                  onChange={handleChangePhone}
                  required
                />
                <input
            //      ref={nameRef}
                  id="contact-name"
                  className="form__input form__input_popup"
                  type="text"
                  placeholder="Name"
                  onChange={handleChangeName}
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
                    htmlFor="checkbox-area"
                  >
                    <span className="checkbox_radio"></span>Leave a comment
                  </label>
                </div>
                {checked ? (
                  <textarea
                //    ref={commentRef}
                    onChange={handleChangeComment}
                    id="contact-comment"
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
                    defaultChecked="checked"
                    required
                    className="form__checbox"
                  />
                  <label
                    className="form__checbox-text form__checbox-text_popup"
                    htmlFor="checkbox"
                  >
                    <span className="checkbox_form"></span>Consent to the
                    processing of personal data
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
             //     ref={emailRef}
                  className="form__input form__input_popup"
                  type="email"
                  placeholder="E-mail"
                  onChange={handleChangeEmail}
                  required
                />
                <input
             //     ref={nameRef}
                  className="form__input form__input_popup"
                  type="text"
                  placeholder="Name"
                  onChange={handleChangeName}
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
                    htmlFor="checkbox-area"
                  >
                    <span className="checkbox_radio"></span>Leave a comment
                  </label>
                </div>
                {checked ? (
                  <textarea
              //      ref={commentRef}
                    onChange={handleChangeComment}
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
                    defaultChecked="checked"
                    required
                    className="form__checbox"
                  />
                  <label
                    className="form__checbox-text form__checbox-text_popup"
                    htmlFor="checkbox"
                  >
                    <span className="checkbox_form"></span>Consent to the
                    processing of personal data
                  </label>
                </div>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div className={`popup ${isOpen ? "popup_opened" : ""} }`}>
          <div className="popup__container">
            <button
              className="popup__close-btn"
              type="button"
              onClick={handleCloseBtnClick}
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
                className={`button_form ${
                  isChoicePhone ? "button_form-disabled" : ""
                } ${isChoiceEmail ? "button_form-disabled" : ""}`}
                type="button"
                onClick={handlePhone}
              >
                Телефон
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
                onSubmit={handleSubmit}
              >
                <input
              //    ref={phoneRef}
                  className="form__input form__input_popup"
                  type="tel"
                  placeholder="Телефон"
                  onChange={handleChangePhone}
                  required
                />
                <input
            //      ref={nameRef}
                  className="form__input form__input_popup"
                  type="text"
                  placeholder="Имя"
                  onChange={handleChangeName}
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
                    htmlFor="checkbox-area"
                  >
                    <span className="checkbox_radio"></span>Оставить комментарий
                  </label>
                </div>
                {checked ? (
                  <textarea
           //         ref={commentRef}
                    onChange={handleChangeComment}
                    className="form__textarea"
                    placeholder="Ваш комментарий..."
                    cols="40"
                  ></textarea>
                ) : (
                  ""
                )}

                <input
                  type="submit"
                  className="button_form button_form-submit"
                  value="Перезвонить"
                />

                <div className="checkbox__container checkbox__container_popup">
                  <input
                    type="checkbox"
                    id="checkbox"
                    defaultChecked="checked"
                    required
                    className="form__checbox"
                  />
                  <label
                    className="form__checbox-text form__checbox-text_popup"
                    htmlFor="checkbox"
                  >
                    <span className="checkbox_form"></span>Согласие на обработку
                    персональных данных
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
            //      ref={emailRef}
                  className="form__input form__input_popup"
                  type="email"
                  placeholder="E-mail"
                  onChange={handleChangeEmail}
                  required
                />
                <input
             //     ref={nameRef}
                  className="form__input form__input_popup"
                  type="text"
                  placeholder="Имя"
                  onChange={handleChangeName}
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
                    htmlFor="checkbox-area"
                  >
                    <span className="checkbox_radio"></span>Оставить комментарий
                  </label>
                </div>
                {checked ? (
                  <textarea
           //         ref={commentRef}
                   onChange={handleChangeComment}
                    className="form__textarea"
                    placeholder="Ваш комментарий..."
                    cols="40"
                  ></textarea>
                ) : (
                  ""
                )}

                <input
                  type="submit"
                  className="button_form button_form-submit"
                  value="Связаться"
                />

                <div className="checkbox__container checkbox__container_popup">
                  <input
                    type="checkbox"
                    id="checkbox"
                    defaultChecked="checked"
                    required
                    className="form__checbox"
                  />
                  <label
                    className="form__checbox-text form__checbox-text_popup"
                    htmlFor="checkbox"
                  >
                    <span className="checkbox_form"></span>Согласие на обработку
                    персональных данных
                  </label>
                </div>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
