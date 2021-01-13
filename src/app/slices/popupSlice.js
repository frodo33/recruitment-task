import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        isOpen: false,
    },
    reducers: {
        setVisibility: (state, action) => {
            state.isOpen = action.payload;
        }
    },
});

export const { setVisibility } = popupSlice.actions;

export const popupIsOpen = state => state.popup.isOpen;

export default popupSlice.reducer;