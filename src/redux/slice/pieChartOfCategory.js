import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchDataOfCategory = createAsyncThunk("dataOfCategorySlice/fetchDataOfCategory", async () => {
  const {data} = await axios.get("http://localhost:8000/dataOfCategory");

  return data
})

export const dataOfCategorySlice = createSlice({
  initialState: [],
  name: "dataOfCategorySlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataOfCategory.fulfilled, (state, action) => {
      return action.payload
    })
  }
});
export const {} = dataOfCategorySlice.actions;

export default dataOfCategorySlice.reducer;