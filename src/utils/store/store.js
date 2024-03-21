import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import coinsReducer from './features/coinsSlice';
import proReducer from './features/proSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    coins: coinsReducer,
    pro: proReducer,
  },
});
