import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index.js";
import "./productDetailsStyle.scss";

const ProductDetails = (props) => {
  const { cart } = useSelector((obj) => obj);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  console.log(props.location);
  const item = props.location.state;

  const updateCart = (product) => {
    let tmpProduct = { ...product, quantity: parseInt(qty) };
    dispatch(actions.addCartItem(tmpProduct));
    console.log(product, qty);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src={item.imageSrc} />
        </div>
        <div className="product_details_text">
          <div className="col-lg-6">
            <h3>{item.name}</h3>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="product_details_price">
              <div>{`$ ${item.price.toLocaleString("es-CL")}`}</div>
              <p> Aqui va la Descripcion </p>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <button
                className="btn btn-danger"
                onClick={() => updateCart(item)} //respecto a metodo onClick
              >{`Agrgar a Carro`}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
