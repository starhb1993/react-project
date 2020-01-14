
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import promise from "redux-promise"

import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk, promise));     // 改造 store.dispacth  

export default store;

