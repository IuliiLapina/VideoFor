import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./header/Header";
import Promo from "./promo/Promo";
import Products from "./products/Products";
import Advantage from "./advantage/Advantage";
import Services from "./services/Services";
import Info from "./info/Info";
import Blog from "./blog/Blog";
import Partners from "./partners/Partners";
import Footer from "./footer/Footer";
import InfoTooltip from "./infoTooltip/InfoTooltip";

import BlogBeach from "./BlogArticle/BlogBeach.js";
import BlogRecycle from "./BlogArticle/BlogRecycle";
import BlogTraffic from "./BlogArticle/BlogTraffic";
import AdvantageSmartCity from "./AdvantageSmartCity";

function App() {
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] =
    React.useState(false);

  //Обработчики открытия попапов
  function handleInfoTooltipPopupOpen() {
    setInfoTooltipPopupOpen(true);
  }

  //Обработчик закрытия попапов
  function closeAllPopups() {
    setInfoTooltipPopupOpen(false);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <main className="content">
            <Promo onContactForm={handleInfoTooltipPopupOpen} />
            <Products />
            <Advantage onContactForm={handleInfoTooltipPopupOpen} />
            <Services />
            <Info title={"Запросить подробную информацию"}/>
            <Blog />
            <Partners />
          </main>
          <Footer onContactForm={handleInfoTooltipPopupOpen} />
        </Route>

        <Route path="/blog-beach">
          <Header />
          <main className="content">
            <BlogBeach />
            <Info title={"Получать новые публикации"}/>
          </main>
          <Footer onContactForm={handleInfoTooltipPopupOpen} />
        </Route>

        <Route path="/blog-recycle">
          <Header />
          <main className="content">
            <BlogRecycle />
            <Info title={"Получать новые публикации"}/>
          </main>
          <Footer onContactForm={handleInfoTooltipPopupOpen} />
        </Route>

        <Route path="/blog-traffic">
          <Header />
          <main className="content">
            <BlogTraffic />
            <Info title={"Получать новые публикации"}/>
          </main>
          <Footer onContactForm={handleInfoTooltipPopupOpen} />
        </Route>

        <Route path="/smart-city">
          <Header />
          <main className="content">
            <AdvantageSmartCity onContactForm={handleInfoTooltipPopupOpen}/>
            <Info title={"Запросить подробную информацию"}/>
          </main>
          <Footer onContactForm={handleInfoTooltipPopupOpen} />
        </Route>

      </Switch>
      <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        onClose={closeAllPopups}
        handleSubmit={closeAllPopups}
      />
    </div>
  );
}

export default App;
