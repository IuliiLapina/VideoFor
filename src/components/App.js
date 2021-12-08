import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import logo from "../images/logo/logo.svg";
import logo_sova from "../images/logo/logo_sova.png";
import trafic from "../images/products/trafic.png";
import beach from "../images/products/beach.png";
import security from "../images/products/security.png";
import monitoring from "../images/products/monitoring.png";
import promo from "../images/promo/promo.png";
import girl from "../images/promo/girl.png";

import percent_1440px from "../images/advantage-icon/percent-1140px.png";
import coat_of_arms_1440px from "../images/advantage-icon/coat-of-arms-1440px.png";
import customization_1440px from "../images/advantage-icon/customization-1440px.png";
import like_1440px from "../images/advantage-icon/like-1440px.png";
import module_1440px from "../images/advantage-icon/module-1440px.png";
import support_1440px from "../images/advantage-icon/support-1440px.png";

import design from "../images/services/design.png";
import research from "../images/services/research.png";

import megafon from "../images/partners/megafon.png";
import protey from "../images/partners/protey.png";
import rostelecom from "../images/partners/rostelecom.png";
import skolkovo from "../images/partners/skolkovo.png";

import blog_image1 from "../images/blog/blog-image1.png";
import blog_image2 from "../images/blog/blog-image2.png";
import blog_image3 from "../images/blog/blog-image3.png";

import email from "../images/footer/email.svg";
import phone from "../images/footer/phone.svg";
import place from "../images/footer/place.svg";




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
              <button className="button button_advantage">
                Связаться с нами
              </button>
            </section>

            <section className="services">
              <h2 className="chapter">НАШИ УСЛУГИ</h2>
              <ul className="cards">
                <li className="card">
                  <p className="card__status card__status_services">Предложение</p>
                  <img
                    className="card__logo card__logo_services"
                    src={logo}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="card__subtitle card__subtitle_services">
                  Проектирование систем видеоаналитики
                  <br/>
по идивидуальному заказу
                  </p>
                  <img
                    className="card__image"
                    src={design}
                    alt="Логотип 'VideoFor'"
                  />
                  <button className="button button_card button_card-services">
                  Подробнее об услуге
                  </button>
                </li>

                <li className="card">
                  <p className="card__status card__status_services">Предложение</p>
                  <img
                    className="card__logo"
                    src={logo}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="card__subtitle card__subtitle_services">
                  Выполнение научно-исследовательских и опытно-конструкторских работ
по индивидуальному заказу
                  </p>
                  <img
                    className="card__image"
                    src={research}
                    alt="Логотип 'VideoFor'"
                  />
                  <button className="button button_card button_card-services">
                  Подробнее об услуге
                  </button>
                </li>
              </ul>
            </section>

            <section className="info">
              <h2 className="chapter">Запросить подробную информацию</h2>
              <form className="form">
                <div className="form__container">
                  <input className="form__input" type="email" value="E-mail"></input>
                  <button className="button form__button" type="submit">Получить</button>
                </div>
                
                <div className="checkbox__container">
                  <input type="checkbox" className="form__checbox" id="checkbox" checked="checked" />
                  <label className="form__checbox-text" for="checkbox"><span></span>Согласие на обработку персональных данных</label>
                </div>
              </form>
            </section>

            <section className="blog">
              <h2 className="chapter">SMART БЛОГ</h2>
              <ul className="blog__card-list">
                <li className="blog__card">
                  <img
                    className="blog__image"
                    src={blog_image1}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="blog__data">19.11.2021</p>
                  <p className="blog__subtitle">Tenzerflou и еще какие-то умные слова
 заголовок</p>
                </li>
                <li className="blog__card">
                  <img
                    className="blog__image"
                    src={blog_image2}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="blog__data">19.11.2021</p>
                  <p className="blog__subtitle">Tenzerflou и еще какие-то умные слова
 заголовок</p>
                </li>
                <li className="blog__card">
                  <img
                    className="blog__image"
                    src={blog_image3}
                    alt="Логотип 'VideoFor'"
                  />
                  <p className="blog__data">19.11.2021</p>
                  <p className="blog__subtitle">Tenzerflou и еще какие-то умные слова
 заголовок</p>
                </li>
              </ul>
            </section>

            <section className="partners">
              <h2 className="chapter">ПАРТНЕРЫ И КЛИЕНТЫ</h2>
              <ul className="partners__logo-zone">
                <li className="partners__list-item">
                  <a href="https://msk.rt.ru/" className="partners__logo-link">
                    <img className="partners__logo" src={rostelecom}  alt="Логотип Ростелеком"/>
                  </a>
                </li>
                <li className="partners__list-item">
                  <a href="https://spb.megafon.ru/" className="partners__logo-link">
                    <img className="partners__logo" src={megafon}  alt="Логотип Мегафон"/>
                  </a>
                </li>
                <li className="partners__list-item">
                  <a href="https://protei.ru/" className="partners__logo-link">
                    <img className="partners__logo" src={protey}  alt="Логотип Мегафон"/>
                  </a>
                </li>
              </ul>
            </section>
          </main>

          <footer className="footer">
            <div>
            <p className="footer__resident">Резидент</p>

            <img className="footer__logo" src={skolkovo}  alt="Логотип Мегафон"/>

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
                <img className="footer__info-icon" src={email}  alt="Логотип Мегафон"/>
                <p className="footer__info-text">  info@videofor.ru</p>
              </li>
              <li className="footer__link-info">
                <img className="footer__info-icon" src={phone}  alt="Логотип Мегафон"/>
                <p className="footer__info-text">+7 (908) 088-80-08</p>
              </li>
              <li className="footer__link-info">
                <img className="footer__info-icon" src={place}  alt="Логотип Мегафон"/>
                <p className="footer__info-text">г. Санкт-Петербург, 
Константиновский пр. 11, оф. 314</p>
              </li>
            </ul>
            </div>
            <button className="button button_footer">Связаться с нами</button>
            <img className="footer__promo" src={girl}  alt="Логотип Мегафон"/>

          </footer>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
