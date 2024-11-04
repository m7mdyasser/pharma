import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPharmacistData = createAsyncThunk(
  "pharmacistSlice/fetchPharmacistData",
  async () => {
    const { data } = await axios.get("https://pharmapro.somee.com/api/User/GetAllPharmacist");
    return data;
  }
);

export const pharmacistSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPharmacistData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = pharmacistSlice.actions;

export default pharmacistSlice.reducer;
