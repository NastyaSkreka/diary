import { createSlice } from '@reduxjs/toolkit'
import { loadState } from '../../utils/local-storage'

const initialState = loadState() || {
    list: [],
    selectedId: null
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: state.list.length + 1,
        name: action.payload,
        comments: [],
      }
      state.list = [...state.list, newItem]
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload)
      if (state.selectedId === action.payload) state.selectedId = null;
    },
    setSelectedItem: (state, action) => {
      state.selectedId = action.payload
    },
    removeSelectedItem: (state, action) => {
      state.selectedId = null
    },
    addComment: (state, action) => {
      const item = state.list.find((item) => item.id === state.selectedId)
      if (!item) return
      item.comments.push(action.payload)
    },
  },
})

export const {
  addItem,
  deleteItem,
  setSelectedItem,
  removeSelectedItem,
  addComment,
} = itemsSlice.actions
export default itemsSlice.reducer
