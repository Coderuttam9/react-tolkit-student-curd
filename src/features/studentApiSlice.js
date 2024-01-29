import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get data from api
export const getStudent = createAsyncThunk("student / getStudent", async () => {
  try {
    const response = await axios.get("http://localhost:3000/student");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

// create studnet
export const createStudent = createAsyncThunk(
  "studnet / createStudent",
  async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/student", data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
