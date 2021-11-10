import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import PaginaNoEncontrada from "./components/404/PaginaNoEncontrada";
import LandingPage from "./components/index.js";
import Login from "./components/Login/loginComponent.jsx";

function App() {
  return (
    <>
      <section>
        <Switch>
          <Route path="/estore" component={LandingPage} />

          <Route exact path="/" component={Login} />

          <Route component={PaginaNoEncontrada} />
        </Switch>
      </section>
    </>
  );
}

export default App;
