import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    modalWindow: false,
    headerSearchInputCopy: '',
    headerSearchInput: '',
  },
  reducers: {
    setModalWindow: (state, action) => {
      state.modalWindow = action.payload;
    },
    setHeaderSearchInputCopy: (state, action) => {
      state.headerSearchInputCopy = action.payload;
    },
    setHeaderSearchInput: (state, action) => {
      state.headerSearchInput = action.payload;
    }
  },
});

export const { setModalWindow, setHeaderSearchInputCopy, setHeaderSearchInput} = headerSlice.actions;
export default headerSlice.reducer;
