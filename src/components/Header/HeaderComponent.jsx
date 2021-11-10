import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TopMenu from "../TopMenu/topmenuComponent";
import "./headerStyle.scss";

const Header = () => {
  const { cart } = useSelector((obj) => obj);
  const userdetails = JSON.parse(sessionStorage.getItem("userdetails"));
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <font>Escalabs Store</font>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="input-group mt-3">
                <div className="input-group-prepend">
                  <select className="form-control btn btn-success dropdown-toggle">
                    <option>Moda</option>
                    <option>Femenino</option>
                    <option>Hombre</option>
                    <option>Juvenil</option>
                  </select>
                </div>

                <input type="text" className="form-control" />

                <div className="input-group-append">
                  <button className="btn btn-success">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                {!userdetails ? (
                  <div className="header__right__auth">
                    <a href="#">Registrarse</a>
                    <a href="/">Ingresar</a>
                  </div>
                ) : (
                  <div className="header__right__auth">
                    <img
                      src={userdetails.imageUrl}
                      style={{ width: 30, borderRadius: 50 }}
                    />
                    <a href="javascript:void(0)">{` Bienvenido ${userdetails.name}`}</a>
                  </div>
                )}

                <ul className="header_right_widget">
                  <li>
                    <i className="fa fa-heart"></i>{" "}
                  </li>
                  <li>
                    {" "}
                    {/* //largo del obj. carro da cantida de items */}
                    <Link to={"/estore/vercarro"}>
                      <i className="fa fa-shopping-cart">
                        {cart.item.length > 0 && (
                          <div className="iconoCarro">{cart.item.length}</div>
                        )}
                      </i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <TopMenu />
    </>
  );
};

export default Header;
