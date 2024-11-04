import { createSlice } from '@reduxjs/toolkit';



const archiveSlice = createSlice({
  name: 'archive',
  initialState: [],
  reducers:{
    addArchive: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    removeArchive: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addArchive, removeArchive } = archiveSlice.actions;

export default archiveSlice.reducer;