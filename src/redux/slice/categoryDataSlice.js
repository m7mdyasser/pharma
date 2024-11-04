import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategorytData = createAsyncThunk(
  "CategorySlice/fetchCategorytData",
  async () => {
    const { data } = await axios.get(
      "https://pharmapro.somee.com/api/Category/GetCategoryList"
    );
    return data;
  }
);



export const CategorySlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {
    deleteCategory(state, action) {
      state.categories = state.categories.filter(category => category.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategorytData.fulfilled, (state, action) => {
        return action.payload;
      })
  },
});
export const {deleteCategory} = CategorySlice.actions;

export default CategorySlice.reducer;
