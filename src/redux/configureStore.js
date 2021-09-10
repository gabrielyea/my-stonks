import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import coins from './slices/coinsSlice';
import history from './slices/historySlice';

export default configureStore({
  reducer: {
    coins,
    history,
  },
  middleware: [thunk],
});
