import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;