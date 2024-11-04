import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const userId = window.localStorage.getItem("userIDLog")


export const fetchHistoryOrder = createAsyncThunk(
  "HistoryOrderSlice/fetchHistoryOrdert",
  async () => {
    const { data } = await axios.get(
      `https://pharmapro.somee.com/api/Order/GetOrdersHistory?userId=${userId}`
    );
    return data;
  }
);



export const HistoryOrderSlice = createSlice({
  initialState: [],
  name: "HistoryOrder",
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistoryOrder.fulfilled, (state, action) => {
        return action.payload;
      })
  },
});
export const {deleteCategory} = HistoryOrderSlice.actions;

export default HistoryOrderSlice.reducer;
