import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index.js";

const Cart = (props) => {
  const { cart } = useSelector((obj) => obj);
  const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
  const dispatch = useDispatch();

  const updateCart = (product, op) => {
    let tempProduct = { ...product };
    if (op === "agregar") tempProduct.quantity = 1;
    else tempProduct.quantity = -1;

    dispatch(actions.addCartItem(tempProduct));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.item.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.imageSrc}
                        style={{ height: 50, width: 50 }}
                      />
                    </td>
                    <td>{`$ ${item.price.toLocaleString("es-CL")}`}</td>

                    <td>
                      <div>
                        <span
                          onClick={() =>
                            item.quantity <= 1
                              ? null
                              : updateCart(item, "restar")
                          }
                        >
                          <i className="fa fa-minus" />
                        </span>
                        <input value={item.quantity} disabled />
                        <span onClick={() => updateCart(item, "agregar")}>
                          <i className="fa fa-plus" />
                        </span>
                      </div>
                    </td>

                    <td>{`$ ${item.itemtotal.toLocaleString("es-CL")}`}</td>
                    <td>
                      <span
                        onClick={() => dispatch(actions.removeCartItem(item))}
                      >
                        <i className="fa fa-close" />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <Link to={"/estore"} className="btn btn-success">
            {`Continuar Comprando`}
          </Link>
        </div>
        <div className="col-lg-4 col-md-4 offset-md-2 offset-lg-2">
          <div className="alert alert-warning">
            <h6>Carro Total</h6>
            <ul>
              <li style={{ color: "#000" }}>
                Total :{" "}
                <span>{`$ ${cart.itemPriceTotal.toLocaleString(
                  "es-CL"
                )}`}</span>
              </li>
            </ul>
            {userDetails ? (
              <btn className="btn btn-success">{`Proceder a Pagar`}</btn>
            ) : (
              <NavLink
                className="btn btn-success"
                to={{
                  pathname: "/estore",
                  state: { redirectto: "/estore" },
                }}
              >{`Proceder a Pagar`}</NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
