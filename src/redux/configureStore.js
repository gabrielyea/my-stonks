import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import coins from './slices/coinsSlice';

export default configureStore({
  reducer: {
    coins,
  },
  middleware: [thunk],
});
