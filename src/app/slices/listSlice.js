import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
    name: 'list',
    initialState: {
        title: 'People',
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeItem: (state, action) => {
            state.items = [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1)]
        }
    },
});

export const { addItem, removeItem } = listSlice.actions;

export const singleItems = state => state.list.items;

export default listSlice.reducer;