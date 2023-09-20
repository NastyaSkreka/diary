import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './items/itemsSlice';

const store = configureStore({
  reducer: {
    items: itemsSlice,
  },
});

export default store;
