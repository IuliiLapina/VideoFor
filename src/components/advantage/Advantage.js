import React from "react";
import percent_1440px from "../../images/advantage-icon/percent-1140px.png";
import coat_of_arms_1440px from "../../images/advantage-icon/coat-of-arms-1440px.png";
import customization_1440px from "../../images/advantage-icon/customization-1440px.png";
import like_1440px from "../../images/advantage-icon/like-1440px.png";
import module_1440px from "../../images/advantage-icon/module-1440px.png";
import support_1440px from "../../images/advantage-icon/support-1440px.png";

function Advantage({ onContactForm }) {
  const windowWidtn = window.innerWidth;

  return (
    <section className="advantage" id="advantage">
      <h2 className="chapter">ПРЕИМУЩЕСТВА СОТРУДНИЧЕСТВА С НАМИ</h2>
      {windowWidtn <= 560 ? (
        <ul className="advantage__list">
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={percent_1440px}
              alt="Иконка 90%"
            />
            <p className="advantage__subtitle">Точность работы детекторов</p>
          </li>
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={coat_of_arms_1440px}
              alt="Иконка герб РФ"
            />
              <p className="advantage__subtitle">Российская разработка</p>
          </li>
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={customization_1440px}
              alt="Иконка настройки"
            />
            <p className="advantage__subtitle">
              Индивидуальная настройка детекторов
            </p>
          </li>
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={like_1440px}
              alt="Иконка лайк"
            />
              <p className="advantage__subtitle">
                Разработан с учётом UI/UX технологий
              </p>
          </li>
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={module_1440px}
              alt="Иконка микросхема"
            />
              <p className="advantage__subtitle">
                Встроим в уже установленную систему
              </p>
          </li>
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={support_1440px}
              alt="Иконка лампочка"
            />
              <p className="advantage__subtitle">
              Использование собственных ноу-хау 
              </p>
          </li>
        </ul>
      ) : (
        <ul className="advantage__list">
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={percent_1440px}
              alt="Иконка 90%"
            />
            <p className="advantage__subtitle">Точность работы детекторов</p>
          </li>
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={coat_of_arms_1440px}
              alt="Иконка герф РФ"
            />
              <p className="advantage__subtitle">
                Полностью российская разработка
              </p>
          </li>
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={customization_1440px}
              alt="Иконка настройки"
            />
            <p className="advantage__subtitle">
              Индивидуальная настройка детекторов
            </p>
          </li>
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={like_1440px}
              alt="Иконка лайк"
            />
              <p className="advantage__subtitle">
                Разработан с учетом user intelligence и user experience
                технологий
              </p>
          </li>
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={module_1440px}
              alt="Иконка микросхема"
            />
              <p className="advantage__subtitle">
              Встроим в уже установленную систему
              </p>
          </li>
          <li className="advantage__list-iteam">
            <img
              className="advantage__icon"
              src={support_1440px}
              alt="Иконка лампочка"
            />
              <p className="advantage__subtitle">
              Использование собственных ноу-хау 
              </p>
          </li>
        </ul>
      )}

      <button className="button button_advantage" onClick={onContactForm}>
        Связаться с нами
      </button>
    </section>
  );
}

export default Advantage;
