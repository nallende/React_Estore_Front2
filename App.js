import React from "react";
import "./App.css";
import Header from "./components/Header/HeaderComponent.jsx";
import MainContainer from "./components/MainContainer/MainContainerComponent.jsx";
//Redux con RTK
import { Provider } from "react-redux";
import store from "./redux/store/store.js";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainContainer />
    </Provider>
  );
}

export default App;
