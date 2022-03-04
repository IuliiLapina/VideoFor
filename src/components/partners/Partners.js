import React from "react";
import megafon from "../../images/partners/megafon.png";
import protey from "../../images/partners/protey.png";
import rostelecom from "../../images/partners/rostelecom.png";
import skolkovo from "../../images/partners/skolkovo_ru.png";
import fond from "../../images/partners/fond_ru.png";

function Partners() {
  return (
    <section className="partners">
      <h2 className="chapter">ПАРТНЕРЫ И КЛИЕНТЫ</h2>
      <ul className="partners__logo-zone">
        <li className="partners__list-item">
          <a
            href="https://msk.rt.ru/"
            className="partners__logo-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="partners__logo"
              src={rostelecom}
              alt="Логотип Ростелеком"
            />
          </a>
        </li>
        <li className="partners__list-item">
          <a
            href="https://spb.megafon.ru/"
            className="partners__logo-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="partners__logo"
              src={megafon}
              alt="Логотип Мегафон"
            />
          </a>
        </li>
        <li className="partners__list-item">
          <a
            href="https://protei.ru/"
            className="partners__logo-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="partners__logo"
              src={protey}
              alt="Логотип Протей IT-Инжиниринг"
            />
          </a>
        </li>
      </ul>

      <h2 className="chapter chapter_second">
        Грантовую поддержку наших исследований осуществляют
      </h2>
      <ul className="support__logo-zone">
        <li className="support__list-item">
          <a
            href="https://sk.ru/"
            className="support__logo-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="support__logo"
              src={skolkovo}
              alt="Логотип Сколково"
            />
          </a>
        </li>
        <li className="support__list-item">
          <a
            href="https://fasie.ru/"
            className="support__logo-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="support__logo support__logo_fond"
              src={fond}
              alt="Логотип Фонд Бортника"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Partners;
