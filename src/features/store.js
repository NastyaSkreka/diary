import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from './items/itemsSlice'
import { saveState } from '../utils/local-storage';

const store = configureStore({
  reducer: {
    items: itemsSlice,
  },
})

store.subscribe(() => {
    saveState(store.getState().items)
})

export default store
