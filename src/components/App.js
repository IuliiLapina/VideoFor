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
import AdvantageSmartBeach from "./AdvantageSmartBeach";
import AdvantageSmartSpace from "./AdvantageSmartSpace";
import AdvantageSmartWasteSites from "./AdvantageSmartWasteSites";
import ServiceDesign from "./ServiceDesign";
import ServiceRD from "./ServiceRD";

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
      <Header />

      <Switch>
        <Route exact path="/">
          <main className="content">
            <Promo onContactForm={handleInfoTooltipPopupOpen} />
            <Products />
            <Advantage onContactForm={handleInfoTooltipPopupOpen} />
            <Services />
            <Info title={"Запросить подробную информацию"}/>
            <Blog />
            <Partners />
          </main>
        </Route>

        <Route path="/blog-beach">
          <main className="content">
            <BlogBeach />
            <Info title={"Получать новые публикации"}/>
          </main>
        </Route>

        <Route path="/blog-recycle">
          <main className="content">
            <BlogRecycle />
            <Info title={"Получать новые публикации"}/>
          </main>
        </Route>

        <Route path="/blog-traffic">
          <main className="content">
            <BlogTraffic />
            <Info title={"Получать новые публикации"}/>
          </main>
        </Route>

        <Route path="/smart-city">
          <main className="content">
            <AdvantageSmartCity onContactForm={handleInfoTooltipPopupOpen}/>
            <Info title={"Запросить подробную информацию"}/>
          </main>
        </Route>

        <Route path="/smart-beach">
          <main className="content">
            <AdvantageSmartBeach onContactForm={handleInfoTooltipPopupOpen}/>
            <Info title={"Запросить подробную информацию"}/>
          </main>
        </Route>

        <Route path="/smart-space">
          <main className="content">
            <AdvantageSmartSpace onContactForm={handleInfoTooltipPopupOpen}/>
            <Info title={"Запросить подробную информацию"}/>
          </main>
        </Route>

        <Route path="/smart-waste-sites">
          <main className="content">
            <AdvantageSmartWasteSites onContactForm={handleInfoTooltipPopupOpen}/>
            <Info title={"Запросить подробную информацию"}/>
          </main>
        </Route>

        <Route path="/design-service">
          <main className="content">
            <ServiceDesign onContactForm={handleInfoTooltipPopupOpen}/>
            <Info title={"Запросить подробную информацию"}/>
          </main>
        </Route>

        <Route path="/r-d-service">
          <main className="content">
            <ServiceRD onContactForm={handleInfoTooltipPopupOpen}/>
            <Info title={"Запросить подробную информацию"}/>
          </main>
        </Route>

      </Switch>
      <Footer onContactForm={handleInfoTooltipPopupOpen} />

      <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        onClose={closeAllPopups}
        handleSubmit={closeAllPopups}
      />
    </div>
  );
}

export default App;
