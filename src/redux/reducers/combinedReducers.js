import { combineReducers } from "redux";
import { topMenu } from "./topMenu/topMenuReducer";
import { product } from "./product/productActionTypes";
import * as cart from "./cart/cartReducer";
import * as login from "./login/loginReducer";
const rootReducer = combineReducers({
  topMenu,
  product,
  ...cart,
  ...login,
});

export default rootReducer;
