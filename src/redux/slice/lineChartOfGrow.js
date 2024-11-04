import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchDataOfGrow = createAsyncThunk("growSlice/fetchDataOfGrow", async () => {
  const {data} = await axios.get("http://localhost:8000/dataOfGrow");

  return data
})

export const growSlice = createSlice({
  initialState: [],
  name: "growSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataOfGrow.fulfilled, (state, action) => {
      return action.payload
    })
  }
});
export const {} = growSlice.actions;

export default growSlice.reducer;