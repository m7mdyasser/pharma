import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchDataOfHomeRate = createAsyncThunk("dataOfHomeRateSlice/fetchDataOfHomeRate", async () => {
  const {data} = await axios.get("http://localhost:8000/home");

  return data
})

export const dataOfHomeRateSlice = createSlice({
  initialState: [],
  name: "dataOfMonthSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataOfHomeRate.fulfilled, (state, action) => {
      return action.payload
    })
  }
});
export const {} = dataOfHomeRateSlice.actions;

export default dataOfHomeRateSlice.reducer;