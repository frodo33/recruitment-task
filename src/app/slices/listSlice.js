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
        }
    },
});

export const { addItem } = listSlice.actions;

export const singleItems = state => state.list.items;

export default listSlice.reducer;