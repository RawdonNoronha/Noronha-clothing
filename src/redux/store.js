import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const middlewares = [logger];

//process.env is an eviroment variable it will know if the app is working in production or not
if(process.env.NODE_ENV === 'development')
{
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);