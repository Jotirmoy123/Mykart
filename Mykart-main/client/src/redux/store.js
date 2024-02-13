// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { cartReducer } from './reducers/cartReducer';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';

// const reducer = combineReducers({
//     cart: cartReducer,
//     getProducts: getProductReducer,
//     getProductDetails: getProductDetailsReducer
// })


const middleware = [
    thunk,
];
const compose = composeWithDevTools(applyMiddleware(...middleware))
const store = configureStore({
    reducer:{
        cart: cartReducer,
        getProductDetails: getProductDetailsReducer,
        getProducts: getProductReducer,
    },
    compose,
}
    // reducer:{
    //     cart: cartReducer,
    // getProducts: getProductReducer,
    // getProductDetails: getProductDetailsReducer
    // }, 
    // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;