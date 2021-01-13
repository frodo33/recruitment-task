import { configureStore } from '@reduxjs/toolkit';
import popupReducer from 'app/slices/popupSlice';
import listReducer from 'app/slices/listSlice';

export default configureStore({
  reducer: {
    popup: popupReducer,
    list: listReducer,
  },
});
