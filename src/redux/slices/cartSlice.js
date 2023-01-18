import { createSlice } from '@reduxjs/toolkit';

function totalPriceCalculator(state) {
  state.totalPrice = state.pizzasInCart.reduce((sum, item) => (sum += item.count * item.price), 0);
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    pizzasInCart: [],
    totalPrice: 0,
    markText: '',
  },
  reducers: {
    addPizzasInCart: (state, action) => {
      const findItem = state.pizzasInCart.find((obj) => {
        if (obj.id !== action.payload.id) return false;
        if (obj.size !== action.payload.size) return false;
        if (obj.type !== action.payload.type) return false;
        return obj;
      });

      if (findItem) {
        if (findItem.count > 98) return;
        findItem.count++;
      } else {
        state.pizzasInCart.push({
          ...action.payload,
          count: 1,
        });
      }
      totalPriceCalculator(state);
    },
    removePizzasInCart: (state, action) => {
      state.pizzasInCart.map((item) => {
        if (item.id !== action.payload.id) return;
        if (item.size !== action.payload.size) return;
        if (item.type !== action.payload.type) return;
        state.pizzasInCart.splice(state.pizzasInCart.indexOf(item), 1);

        totalPriceCalculator(state);
      });
    },
    removePizzasCount: (state, action) => {
      state.pizzasInCart.map((item) => {
        if (item.count < 1) return;
        if (item.id !== action.payload.id) return;
        if (item.size !== action.payload.size) return;
        if (item.type !== action.payload.type) return;
        item.count--;

        totalPriceCalculator(state);
      });
    },
    onCountChange: (state, action) => {
      state.pizzasInCart.map((item) => {
        if (item.id !== action.payload.id) return;
        if (item.size !== action.payload.size) return;
        if (item.type !== action.payload.type) return;
        if(action.payload.value > 99) return
        item.count = Number(action.payload.value);
      });
      totalPriceCalculator(state);
    },
    clearItems: (state) => {
      state.pizzasInCart = [];
      state.totalPrice = 0;
    },
    setMarkText: (state, action) => {
      state.markText = action.payload;
    }
  },
});

export const {
  addPizzasInCart,
  setTotalPrice,
  removePizzasCount,
  addPizzasCount,
  onCountChange,
  removePizzasInCart,
  clearItems,
  setMarkText,
} = cartSlice.actions;

export default cartSlice.reducer;
