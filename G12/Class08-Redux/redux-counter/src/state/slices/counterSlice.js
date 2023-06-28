import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state, action) {
      console.log(action);
      state.value += 1;
    },
    decrement(state, action) {
      if (state.value === 0) return;

      console.log(action);
      state.value -= 1;
    },
    incrementByAmount(state, action) {
      console.log(action);
      state.value += action.payload;
    },
    decrementByAmount(state, action) {
      console.log(action);
      state.value -= action.payload;
    },
  },
});

// Actions need to be exported from the .actions property of the slice so that they can be dispatched from components within the application
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
