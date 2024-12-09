import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import reducer from "./reducer";
// import reducer from "../store/reducer/contactUs"
import rootReducer from "./reducer";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;