import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        isOpen: false,
        title: '',
        isListItemPopup: false,
        listChecked: false,
    },
    reducers: {
        setVisibility: (state, action) => {
            state.isOpen = action.payload;
        },
        setPopupTitle: (state, action) => {
            state.title = action.payload;
        },
        setListChecked: (state, action) => {
            state.listChecked = action.payload;
        },
        setListItemPopup: (state, action) => {
            state.isListItemPopup = action.payload;
        },
    },
});

export const { setVisibility, setPopupTitle, setListChecked, setListItemPopup } = popupSlice.actions;

export const popupIsOpen = state => state.popup.isOpen;
export const popupTitle = state => state.popup.title;
export const isListItemPopup = state => state.popup.isListItemPopup;
export const listIsChecked = state => state.popup.listChecked;

export default popupSlice.reducer;