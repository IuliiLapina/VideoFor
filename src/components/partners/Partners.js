import React from "react";
import megafon from "../../images/partners/megafon.png";
import protey from "../../images/partners/protey.png";
import rostelecom from "../../images/partners/rostelecom.png";

function Promo() {
  return (
    <section className="partners">
      <h2 className="chapter">ПАРТНЕРЫ И КЛИЕНТЫ</h2>
      <ul className="partners__logo-zone">
        <li className="partners__list-item">
          <a href="https://msk.rt.ru/" className="partners__logo-link" target="_blank" rel="noreferrer">
            <img
              className="partners__logo"
              src={rostelecom}
              alt="Логотип Ростелеком"
            />
          </a>
        </li>
        <li className="partners__list-item">
          <a href="https://spb.megafon.ru/" className="partners__logo-link" target="_blank" rel="noreferrer">
            <img
              className="partners__logo"
              src={megafon}
              alt="Логотип Мегафон"
            />
          </a>
        </li>
        <li className="partners__list-item">
          <a href="https://protei.ru/" className="partners__logo-link" target="_blank" rel="noreferrer">
            <img
              className="partners__logo"
              src={protey}
              alt="Логотип Мегафон"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Promo;
