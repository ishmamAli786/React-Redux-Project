import {createStore,applyMiddleware} from 'redux';
import rootReducers from '.././reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';



//const store=createStore(rootReducers,window.__REDUX__DEVTOOLS_EXTENSION__ && window.__REDUX__DEVTOOLS_EXTENSION__());
const store=createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)));





// composeWithDevTools(applyMiddleware(...middleware))

export default store;