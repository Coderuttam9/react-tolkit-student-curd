import { createSlice } from "@reduxjs/toolkit";
import { createStudent, getStudent } from "../studentApiSlice";

// create studentSlice
const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [],
    isLoding: false,
    isErrored: false,
    messAge: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.isLoding = false;
        state.students = [...state.students, action.payload];
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.isErrored = true;
        state.isErrored = action.error.message;
      })
      .addCase(getStudent.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(getStudent.fulfilled, (state, action) => {
        state.isLoding = false;
        state.students = [...action.payload];
        state.messAge = " student created successfully";
      })
      .addCase(getStudent.rejected, (state) => {
        state.isErrored = true;
        state.messAge = " student rejected";
      });
  },
});

// export slectTor
export const selectStudent = (state) => state.student;

// export action
// export const {} = studentSlice.action;

// expoert slice
export default studentSlice.reducer;
