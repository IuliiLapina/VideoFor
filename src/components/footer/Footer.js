import React from "react";
import girl from "../../images/promo/girl.png";
import skolkovo from "../../images/partners/skolkovo.png";
import email from "../../images/footer/email.svg";
import phone from "../../images/footer/phone.svg";
import place from "../../images/footer/place.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__resident-container">
        <p className="footer__resident">Резидент</p>

        <img className="footer__logo" src={skolkovo} alt="Логотип Мегафон" />
      </div>
      <div className="footer__column">
        <ul className="footer__column-links">
          <li className="footer__link">Транспортная аналитика</li>
          <li className="footer__link">Безопасность на воде</li>
          <li className="footer__link">Безопасная территория</li>
          <li className="footer__link">Эксплуатация контейнеров</li>
        </ul>

        <ul className="footer__column-links">
          <li className="footer__link">Проектирование систем</li>
          <li className="footer__link">Выполнение НИОКР</li>
          <li className="footer__link">Smart блог</li>
        </ul>

        <ul className="footer__column-links-info">
          <li className="footer__link-info">
            <img
              className="footer__info-icon"
              src={email}
              alt="Логотип Мегафон"
            />
            <p className="footer__info-text"> info@videofor.ru</p>
          </li>
          <li className="footer__link-info">
            <img
              className="footer__info-icon"
              src={phone}
              alt="Логотип Мегафон"
            />
            <p className="footer__info-text">+7 (908) 088-80-08</p>
          </li>
          <li className="footer__link-info">
            <img
              className="footer__info-icon"
              src={place}
              alt="Логотип Мегафон"
            />
            <p className="footer__info-text">
              г. Санкт-Петербург, Константиновский пр. 11, оф. 314
            </p>
          </li>
        </ul>
      </div>
      <button className="button button_footer">Связаться с нами</button>
      <img className="footer__promo" src={girl} alt="Логотип Мегафон" />
    </footer>
  );
}

export default Footer;
