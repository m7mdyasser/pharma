import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchOrders = createAsyncThunk(
  "orderSlice/fetchOrders",
  async () => {
    const { data } = await axios.get("https://pharmapro.somee.com/api/Order/OrdersList");
    return data;
  }
);
export const orderSlice = createSlice({
  initialState: [],
  name: "orderSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      return action.payload
    })
  }
});
export const {} = orderSlice.actions;

export default orderSlice.reducer;