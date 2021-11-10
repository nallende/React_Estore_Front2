import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import * as actions from "../../redux/actions";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const item = props.location.state;
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = (res) => {
    console.log("onSuccess", res);

    sessionStorage.setItem("userdetails", JSON.stringify(res.profileObj));
    dispatch(actions.login(res.profileObj));
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn && item?.redirectto && <Redirect to={"/estore"} />}
      <div className="d-flex justify-content-center align-items-center">
        <div className="card col-lg-4 col-md-6 col-sm-12">
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <div className="dropdown-divider"></div>
            <div className="form-group">
              <label>Usuario</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" className="form-control" />
            </div>
            <div className="btn btn-success btn-block">{`LOGIN`}</div>
            <div className="dropdown-divider">sino..</div>
            <GoogleLogin
              clientId={
                "998318038706-oi4tnqf91u8lequo1l1e0gaqtfna5cdp.apps.googleusercontent.com"
              }
              buttonText="Ingrese con Google"
              onSuccess={onSuccess}
              className="btn-block"
              theme="dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
