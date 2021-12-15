import React from "react";
import promo from "../../images/promo/promo.png";

function Promo({onContactForm}) {
  
  return (
    <section className="promo">
      <h1 className="promo__title">
        ДЛЯ БИЗНЕСА, ГОРОДА И ДЛЯ ВАС
      </h1>
      <p className="promo__subtitle">Уникальные решения и программное обеспечение на основе 
технологий компьютерного зрения и искусственного интеллекта</p>
      <div className="promo__container">
        <img
          className="promo__picture"
          src={promo}
          alt="Арт-изображение 'Нейросети'"
        />
      </div>
      <button className="button" type="button" onClick={onContactForm}>Связаться с нами</button>
    </section>
  );
}

export default Promo;
