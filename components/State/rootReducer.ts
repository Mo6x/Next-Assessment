// rootReducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "../State/Slice/productsSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
