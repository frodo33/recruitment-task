import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        isOpen: false,
        title: '',
    },
    reducers: {
        setVisibility: (state, action) => {
            state.isOpen = action.payload;
        },
        setPopupTitle: (state, action) => {
            state.title = action.payload;
        },
    },
});

export const { setVisibility, setPopupTitle } = popupSlice.actions;

export const popupIsOpen = state => state.popup.isOpen;
export const popupTitle = state => state.popup.title;

export default popupSlice.reducer;