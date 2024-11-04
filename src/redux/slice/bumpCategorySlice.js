import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchDataOfCategoryCurve = createAsyncThunk("categoryCurveSlice/fetchDataOfCategoryCurve", async () => {
  const {data} = await axios.get("http://localhost:8000/dataOfCategoryCurve");

  return data
})

export const categoryCurveSlice = createSlice({
  initialState: [],
  name: "categoryCurveSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataOfCategoryCurve.fulfilled, (state, action) => {
      return action.payload
    })
  }
});
export const {} = categoryCurveSlice.actions;

export default categoryCurveSlice.reducer;