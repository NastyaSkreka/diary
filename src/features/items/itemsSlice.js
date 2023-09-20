import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: { 
    list: []
},
  reducers: {
    addItem: (state, action) => {
        const newItem = { id: Date.now(), name: action.payload };
        state.list = [...state.list, newItem];
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
