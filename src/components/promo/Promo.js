import React from "react";
import promo from "../../images/promo/promo.png";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Программное обеспечение на основе технологий компьютерного зрения и
        искусственного интеллекта
      </h1>
      <div className="promo__container">
        <img
          className="promo__picture"
          src={promo}
          alt="Арт-изображение 'Нейросети'"
        />
      </div>
      <button className="button">Связаться с нами</button>
    </section>
  );
}

export default Promo;
