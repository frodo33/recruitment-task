import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import popupReducer from 'app/slices/popupSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    popup: popupReducer,
  },
});
