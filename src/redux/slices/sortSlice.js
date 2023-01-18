import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    sortItemsCount: 0,
    isSortPopupOpen: false,
    sortItems: [
      { name: 'популярности(ASK)', sortBy: '-rating' },
      { name: 'популярности(DESK)', sortBy: 'rating' },
      { name: 'цене(ASK)', sortBy: '-price' },
      { name: 'цене(DESK)', sortBy: 'price' },
      { name: 'алфавиту(ASK)', sortBy: '-title' },
      { name: 'алфавиту(DESK)', sortBy: 'title' },
    ],
  },
  reducers: {
    setSortItemsCount(state, action) {
      state.sortItemsCount = Number(action.payload);
    },
    setIsSortPopupOpen(state, action) {
      state.isSortPopupOpen = action.payload;
    },
  },
});

export const { setSortItemsCount, setIsSortPopupOpen} = sortSlice.actions;
export default sortSlice.reducer;
