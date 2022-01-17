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

import AdvantageSmartCity from "./advantege-page/AdvantageSmartCity";
import AdvantageSmartBeach from "./advantege-page/AdvantageSmartBeach";
import AdvantageSmartSpace from "./advantege-page/AdvantageSmartSpace";
import AdvantageSmartWasteSites from "./advantege-page/AdvantageSmartWasteSites";
import ServiceDesign from "./ServiceDesign";
import ServiceRD from "./ServiceRD";

import PromoEng from "./promo/PromoEng";
import ProductsEng from "./products/ProductsEng";
import AdvantageEng from "./advantage/AdvantageEng";
import ServicesEng from "./services/ServicesEng";
import InfoEng from "./info/InfoEng";
import BlogEng from "./blog/BlogEng";
import PartnersEng from "./partners/PartnersEng";

import AdvantageSmartCityEng from "./advantege-page/AdvantageSmartCityEng";
import AdvantageSmartBeachEng from "./advantege-page/AdvantageSmartBeachEng";
import AdvantageSmartSpaceEng from "./advantege-page/AdvantageSmartSpaceEng";
import AdvantageSmartWasteSitesEng from "./advantege-page/AdvantageSmartWasteSitesEng";
import ServiceDesignEng from "./ServiceDesignEng";
import ServiceRDEng from "./ServiceRDEng";

import { TelegramApi } from "../utils/Api.js";

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

  //запросить информацию по email - сообщение в телеграмм
  function handleSubmitInfoForm(info) {
    TelegramApi.sendMessageInfoEmail(info)
      .then(closeAllPopups())
      .then(console.log(info))
      .catch((err) => console.log(err));
  }

  //форма "свяжитесь со мной"- сообщение в телеграмм

  function handleSubmitContactForm(info) {
    TelegramApi.sendMessageContactPhoneEng(info)
      .then(closeAllPopups())
      .catch((err) => console.log(err));
  }
  /*

     //форма "свяжитесь со мной"- сообщение в телеграмм
     function handleSubmitContactForm(info) {
      const json = JSON.stringify({
        name: info.name,
        phone: info.phone,
        email: info.email,
        comment: info.comment,
        topic: info.topic
      });
      TelegramApi.sendMessageContactPhoneEng(json)
        .then(console.log(info))
        .catch((err) => console.log(err));
    }
  */

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
            <Info
              title={"Запросить подробную информацию"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
            <Blog />
            <Partners />
          </main>
        </Route>

        <Route path="/eng">
          <main className="content">
            <PromoEng onContactForm={handleInfoTooltipPopupOpen} />
            <ProductsEng />
            <AdvantageEng onContactForm={handleInfoTooltipPopupOpen} />
            <ServicesEng />
            <InfoEng
              title={"Request detailed information"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
            <BlogEng />
            <PartnersEng />
          </main>
        </Route>

        <Route path="/blog-beach">
          <main className="content">
            <BlogBeach />
            <Info
              title={"Получать новые публикации"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route path="/blog-recycle">
          <main className="content">
            <BlogRecycle />
            <Info
              title={"Получать новые публикации"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route path="/blog-traffic">
          <main className="content">
            <BlogTraffic />
            <Info
              title={"Получать новые публикации"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route exact path="/smart-city">
          <main className="content">
            <AdvantageSmartCity onContactForm={handleInfoTooltipPopupOpen} />
            <Info
              title={"Запросить подробную информацию"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route path="/smart-city/eng">
          <main className="content">
            <AdvantageSmartCityEng onContactForm={handleInfoTooltipPopupOpen} />
            <InfoEng
              title={"Request detailed information"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route exact path="/smart-beach">
          <main className="content">
            <AdvantageSmartBeach onContactForm={handleInfoTooltipPopupOpen} />
            <Info
              title={"Запросить подробную информацию"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route path="/smart-beach/eng">
          <main className="content">
            <AdvantageSmartBeachEng
              onContactForm={handleInfoTooltipPopupOpen}
            />
            <InfoEng
              title={"Request detailed information"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route exact path="/smart-space">
          <main className="content">
            <AdvantageSmartSpace onContactForm={handleInfoTooltipPopupOpen} />
            <Info
              title={"Запросить подробную информацию"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route path="/smart-space/eng">
          <main className="content">
            <AdvantageSmartSpaceEng
              onContactForm={handleInfoTooltipPopupOpen}
            />
            <InfoEng
              title={"Request detailed information"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route exact path="/smart-waste-sites">
          <main className="content">
            <AdvantageSmartWasteSites
              onContactForm={handleInfoTooltipPopupOpen}
            />
            <Info
              title={"Запросить подробную информацию"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route path="/smart-waste-sites/eng">
          <main className="content">
            <AdvantageSmartWasteSitesEng
              onContactForm={handleInfoTooltipPopupOpen}
            />
            <InfoEng
              title={"Request detailed information"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route exact path="/design-service">
          <main className="content">
            <ServiceDesign onContactForm={handleInfoTooltipPopupOpen} />
            <Info
              title={"Запросить подробную информацию"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route path="/design-service/eng">
          <main className="content">
            <ServiceDesignEng onContactForm={handleInfoTooltipPopupOpen} />
            <InfoEng
              title={"Request detailed information"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route exact path="/r-d-service">
          <main className="content">
            <ServiceRD onContactForm={handleInfoTooltipPopupOpen} />
            <Info
              title={"Запросить подробную информацию"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>

        <Route path="/r-d-service/eng">
          <main className="content">
            <ServiceRDEng onContactForm={handleInfoTooltipPopupOpen} />
            <InfoEng
              title={"Request detailed information"}
              onSubmitInfoForm={handleSubmitInfoForm}
            />
          </main>
        </Route>
      </Switch>
      <Footer onContactForm={handleInfoTooltipPopupOpen} />

      <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        onClose={closeAllPopups}
        handleSubmit={closeAllPopups}
        onSubmitContactForm={handleSubmitContactForm}
      />
    </div>
  );
}

export default App;
