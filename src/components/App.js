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

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <main className="content">
            <Promo />
            <Products />
            <Advantage />
            <Services />
            <Info />
            <Blog />
            <Partners />
          </main>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
