import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import ShopingCart from "./pages/ShoppingCart";

import Footer from "./containers/Footer";
import ButtonToTop from "components/ButtonToTop";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ButtonToTop/>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/product/:id" exact component={Product} />
        <Route path="/cart" exact component={ShopingCart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
