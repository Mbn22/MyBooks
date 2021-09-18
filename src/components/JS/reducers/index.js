import { combineReducers } from "redux";

import BookReducer from "./BookReducer";
import CartReducer from "./CartReducer";
import TotalReducer from "./TotalReducer";

const rootReducers =combineReducers( { book:BookReducer , cart:CartReducer , total : TotalReducer} )

export  default rootReducers;