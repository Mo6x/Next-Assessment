import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../State/rootReducer";



const store = configureStore({
  reducer: rootReducer,
  // other store configurations...
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;








