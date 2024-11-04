import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchCity = createAsyncThunk("citySlice/fetchCity", async () => {
  const {data} = await axios.get("http://localhost:8000/city");
  return data
})

export const citySlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      return action.payload
    })
  }
});
export const {} = citySlice.actions;

export default citySlice.reducer;
