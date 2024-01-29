import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/student/studentSlice";

// create store

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
  devTools: true,
});

export default store;
