import { combineReducers } from "redux";
import { productsReducer } from './productsReducer';
import { productDetailsReducer } from './productsDetailsReducer';


export default combineReducers({

    products:productsReducer,
    singleProduct:productDetailsReducer
})
