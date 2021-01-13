import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import popupReducer from 'app/slices/popupSlice';
import listReducer from 'app/slices/listSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    popup: popupReducer,
    list: listReducer,
  },
});
