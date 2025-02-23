import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

const store = configureStore({
  reducer: {
    Counter31: counterReducer,
  },
});

export default store;
