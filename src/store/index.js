import {createStore,applyMiddleware} from 'redux';
import {useReducers} from './Reducer/useReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store=createStore(useReducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;