import { configureStore } from "@reduxjs/toolkit";
import { ItemReducer } from "./itemReducer";
import { CartReducer } from "./cartReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const reducer = {
  itemReducer: ItemReducer,
  cartReducer: CartReducer,
};

export const MyConfigureStore = () => {
  const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger, thunk),
  });
  return store;
};
