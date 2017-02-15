import{createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import form from "./reducers/formReducer";


export default createStore(combineReducers({math, user, form}),{},applyMiddleware(logger()));