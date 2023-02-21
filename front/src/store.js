import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //Dar un toque para solicitar info
import {composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer } from './reducer/productReducer';

const reducer = combineReducers ({
    productos: productsReducer
})

let initialState = {}

const middleware = [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

