import React from "react";
import { Link } from "react-router-dom";
import { getTopMenu } from "../../redux/actions/topMenu/topMenuActions.js";
import { connect } from "react-redux";
//import { topMenuSlice } from "../../redux/TopMenuSlice.js";
import "../TopMenu/topMenuStyles.scss";

//const menu = ["Inicio", "Femeinino", "Hombre", "Juvenil", "Mas Vendidos"];
const TopMenu = (props) => {
  return (
    <>
      <header className="menuHeader">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <nav className="menu">
                <ul>
                  {props.state.topMenu.map((item, index) => (
                    <li key={index}>
                      <Link to="/estore">{item}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMenu: dispatch(getTopMenu()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
