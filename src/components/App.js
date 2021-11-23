import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import logo from "../images/logo/logo.svg";
import promo from "../images/promo/promo.png";

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
              <h1 className="promo__caption">
                Программное обеспечение на основе технологий компьютерного
                зрения и искусственного интеллекта
              </h1>
              <div className="promo__container">
                <img className="promo__picture" src={promo} alt="Арт-изображение 'Нейросети'"/>
              </div>
              <button className="button">Связаться с нами</button>
            </section>
          </main>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
