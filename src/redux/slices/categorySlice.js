import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categoryCount: 0,
  },
  reducers: {
    setCategoryCount(state, action) {
      state.categoryCount = Number(action.payload);
    }
  },
});

export const { setCategoryCount } = categorySlice.actions;
export default categorySlice.reducer;
