import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/HeaderComponent";
import ProductDetails from "./Product/productDetails.jsx";
import Cart from "./cart/cartComponent";
import MainContainer from "./MainContainer/MainContainerComponent.jsx";

const LandingPage = () => {
  return (
    <>
      <Header />
      <section className="main-container">
        <Switch>
          <Route exact path="/estore" component={MainContainer} />
          <Route
            exact
            path="/estore/productdetails"
            component={ProductDetails}
          />
          <Route exact path="/estore/vercarro" component={Cart} />
        </Switch>
      </section>
    </>
  );
};

export default LandingPage;
