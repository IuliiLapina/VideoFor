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
            <Promo 
              onContactForm={handleInfoTooltipPopupOpen}/>
            <Products />
            <Advantage 
              onContactForm={handleInfoTooltipPopupOpen}/>
            <Services />
            <Info />
            <Blog />
            <Partners />
          </main>
          <Footer 
            onContactForm={handleInfoTooltipPopupOpen}/>
        </Route>
      </Switch>
      <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
        />
    </div>
  );
}

export default App;
