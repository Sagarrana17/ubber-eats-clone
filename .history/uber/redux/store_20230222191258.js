import { createStore } from "@reduxjs/toolkit";

import reducer from "./reducers/index";

export default function configureStore(initialState) {
  return createStore(reducer, initialState);
 // const store = createStore(reducer, initialState);
  //return store;
}
