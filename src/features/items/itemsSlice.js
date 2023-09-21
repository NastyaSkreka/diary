import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: { 
    list: [],
    selectedId: null,
},
  reducers: {
    addItem: (state, action) => {
        const newItem = { id: Date.now(), name: action.payload, comments:[]};
        state.list = [...state.list, newItem];
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    setSelectedItem: (state, action) => {
        state.selectedId = action.payload;
    },
    removeSelectedItem: (state, action) => {
        state.selectedId = null;
    },
    addComment: (state, action) => {
        const item = state.list.find((item) => item.id === state.selectedId);
        if (!item) return;
        item.comments.push(action.payload);
    }, 
    setSelectedColor: (state, action) => {
        state.selectedColor = action.payload;
    },
  },
});

export const { addItem, deleteItem, setSelectedItem, removeSelectedItem, addComment, setSelectedColor } = itemsSlice.actions;
export default itemsSlice.reducer;
