import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchDataOfYear = createAsyncThunk("dataOfYearSlice/fetchDataOfYear", async () => {
  const {data} = await axios.get("http://localhost:8000/dataOfYear");

  return data
})

export const dataOfYearSlice = createSlice({
  initialState: [],
  name: "dataOfMonthSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataOfYear.fulfilled, (state, action) => {
      return action.payload
    })
  }
});
export const {} = dataOfYearSlice.actions;

export default dataOfYearSlice.reducer;