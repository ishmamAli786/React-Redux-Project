import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers/indexs.js";

const store = createStore(rootReducer, composeWithDevTools());

export default store;