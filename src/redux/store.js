import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './slices/categorySlice';
import sortSlice from './slices/sortSlice';
import appSlice from './slices/AppSlice';
import headerSlice from './slices/headerSlice';
import cartSlice from './slices/cartSlice';

export default configureStore({
  reducer: {
    category: categorySlice,
    sort: sortSlice,
    app: appSlice,
    header: headerSlice,
    sort: sortSlice,
    cart: cartSlice,
  },
});
