import { createSlice } from '@reduxjs/toolkit';



const productCartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers:{
    addItem: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const { addItem, removeItem, clearCart } = productCartSlice.actions;

export default productCartSlice.reducer;