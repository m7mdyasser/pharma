import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchDataOfMonth = createAsyncThunk("dataOfMonthSlice/fetchDataOfMonth", async () => {
  const {data} = await axios.get("http://localhost:8000/dataOfMonth");

  return data
})

export const dataOfMonthSlice = createSlice({
  initialState: [],
  name: "dataOfMonthSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataOfMonth.fulfilled, (state, action) => {
      return action.payload
    })
  }
});
export const {} = dataOfMonthSlice.actions;

export default dataOfMonthSlice.reducer;