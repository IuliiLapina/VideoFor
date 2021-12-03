import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import logo from "../images/logo/logo.svg";
import logo_sova from "../images/logo/logo_sova.png";
import trafic from "../images/products/trafic.png";
import beach from "../images/products/beach.png";
import security from "../images/products/security.png";
import monitoring from "../images/products/monitoring.png";
import promo from "../images/promo/promo.png";
import percent_1440px from "../images/advantage-icon/percent-1140px.svg";
import coat_of_arms_1440px from "../images/advantage-icon/coat-of-arms-1440px.svg";
import customization_1440px from "../images/advantage-icon/customization-1440px.svg";
import like_1440px from "../images/advantage-icon/like-1440px.svg";
import module_1440px from "../images/advantage-icon/module-1440px.svg";
import support_1440px from "../images/advantage-icon/support-1440px.svg";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <header className="header">
            <img className="header__logo" src={logo} alt="Логотип 'VideoFor'" />
            <nav className="header__menu">
              <ul className="header__column-links">
                <li className="header__list-item">
                  <Link to="#" className="header__link">
                    Продукты
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link to="#" className="header__link">
                    Преимущества
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link to="#" className="header__link">
                    Услуги
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link to="#" className="header__link">
                    Блог
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link to="#" className="header__link">
                    Партнеры и клиенты
                  </Link>
                </li>
              </ul>
            </nav>
            <ul className="header__language">
              <li className="header__language-item">
                <Link to="#" className="header__language-link">
                  ENG
                </Link>
              </li>
              <li className="header__language-item">
                <Link
                  to="#"
                  className="header__language-link header__language-link_active"
                >
                  RUS
                </Link>
              </li>
            </ul>
          </header>

          <main className="content">
            <section className="promo">
              <h1 className="promo__title">
                Программное обеспечение на основе технологий компьютерного
                зрения и искусственного интеллекта
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

            <section className="products">
              <h2 className="chapter">НАШИ ПРОДУКТЫ</h2>
              <ul className="cards">
                <li className="card">
                  <p className="card__status">Новинка</p>
                  <img
                    className="card__logo"
                    src={logo_sova}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="card__subtitle">
                    Анализ трафика, нарушения правил дорожного движения,
                    регистрация аварий
                  </p>
                  <img
                    className="card__image"
                    src={trafic}
                    alt="Логотип 'VideoFor'"
                  />
                  <button className="button button_card">
                    Подробнее о продукте
                  </button>
                </li>

                <li className="card">
                  <p className="card__status">Новинка</p>
                  <img
                    className="card__logo"
                    src={logo_sova}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="card__subtitle">
                    Отслеживание тонущих, нахождение в запрещенных зонах,
                    автоматизированная трансляция объявлений и вызов спасателей
                  </p>
                  <img
                    className="card__image"
                    src={beach}
                    alt="Логотип 'VideoFor'"
                  />
                  <button className="button button_card">
                    Подробнее о продукте
                  </button>
                </li>

                <li className="card">
                  <p className="card__status">В разработке</p>
                  <img
                    className="card__logo"
                    src={logo_sova}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="card__subtitle">
                    Охрана памятников, общественных пространств и детских
                    площадок Охрана от вандализма и ситуаций, угрожающих
                    здоровью посетителей
                  </p>
                  <img
                    className="card__image"
                    src={security}
                    alt="Логотип 'VideoFor'"
                  />
                  <button className="button button_card">
                    Подробнее о продукте
                  </button>
                </li>

                <li className="card">
                  <p className="card__status">В разработке</p>
                  <img
                    className="card__logo"
                    src={logo_sova}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="card__subtitle">
                    Мониторинг эксплуатации контейнеров твердых бытовых отходов,
                    идентификация нарушений, оценка наполненности
                  </p>
                  <img
                    className="card__image"
                    src={monitoring}
                    alt="Логотип 'VideoFor'"
                  />
                  <button className="button button_card">
                    Подробнее о продукте
                  </button>
                </li>
              </ul>
            </section>

            <section className="advantage">
              <h2 className="chapter">ПРЕИМУЩЕСТВА НАШЕЙ СИСТЕМЫ</h2>
              <ul className="advantage__list">
                <li className="advantage__list-iteam">
                  <img
                    className="advantage__icon"
                    src={percent_1440px}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="advantage__subtitle">
                    Точность работы детекторов
                  </p>
                </li>
                <li className="advantage__list-iteam">
                  <img
                    className="advantage__icon"
                    src={coat_of_arms_1440px}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="advantage__subtitle">
                    Полностью российская разработка
                  </p>
                </li>
                <li className="advantage__list-iteam">
                  <img
                    className="advantage__icon"
                    src={customization_1440px}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="advantage__subtitle">
                    Индивидуальная настройка детекторов
                  </p>
                </li>
                <li className="advantage__list-iteam">
                  <img
                    className="advantage__icon"
                    src={like_1440px}
                    alt="Логотип 'VideoFor'"
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
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="advantage__subtitle">
                    Возможность встраивания модулей в уже существующие системы
                  </p>
                </li>
                <li className="advantage__list-iteam">
                  <img
                    className="advantage__icon"
                    src={support_1440px}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="advantage__subtitle">
                    Бесплатные обновления и техническая поддержка
                  </p>
                </li>
              </ul>
              <button className="button">Связаться с нами</button>
            </section>
          </main>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
