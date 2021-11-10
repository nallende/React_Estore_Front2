import React from "react";
import "./404.scss";
import noEncontrado from "../../assets/404.jpg";
import { Link } from "react-router-dom";

const PaginaNoEncontrada = () => {
  return (
    <div className="cont">
      <div className="wrapper">
        <img src={noEncontrado} alt="Pagina No Encontrada" />
        <Link to="/estore"></Link>
        <h3>Pagina No Encontrada!</h3>
      </div>
    </div>
  );
};
export default PaginaNoEncontrada;
