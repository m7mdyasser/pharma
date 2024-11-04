import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchCustomers = createAsyncThunk("customerSlice/fetchCustomers", async () => {
  const {data} = await axios.get("https://pharmapro.somee.com/api/User/GetUsersList");

  return data
})

export const customerSlice = createSlice({
  initialState: { users: [] },
  name: "customerSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.users = action.payload; // Modify draft state directly
    });
  }
});
export const {} = customerSlice.actions;

export default customerSlice.reducer;
