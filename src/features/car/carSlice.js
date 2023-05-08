import { createSlice } from "@reduxjs/toolkit"; //reducer함수와 action creator를 포함한 객체, 이를 사용하면 초기값과  action  creator와 reducer가 한번에 생성됨

const initialState = {
  cars: ["Model S", "Model Y", "Model 3", "Model X"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
