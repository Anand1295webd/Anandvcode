import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from

export default createStore(RootReducer,applyMiddleware(thunk));
