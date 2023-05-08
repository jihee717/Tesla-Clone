import { configureStore } from "@reduxjs/toolkit";
//기존 createStore와 비슷하지만 주의할 점은 {reducer: rootReducer}로 만들어서 넣어야함

import carReducer from "../features/car/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
