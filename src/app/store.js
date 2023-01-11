import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

// Aquí ya se pueden poner todos los reducers que tengamos
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});
