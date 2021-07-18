import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from 'redux-logger';
import rootReducer from "./../reducers";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const middleware = applyMiddleware(thunk);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, middleware);

export const persistor = persistStore(store);
