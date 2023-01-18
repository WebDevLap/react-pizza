import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    pizzas: [],
    pizzasIsLoading: false,
  },
  reducers: {
    setPizzas: (state, action) => {
      state.pizzas = action.payload;
    },
    setPizzasIsLoading: (state, action) => {
      state.pizzasIsLoading = action.payload
    },
  }
})

export const {setPizzas, setPizzasIsLoading} = appSlice.actions;
export default appSlice.reducer;