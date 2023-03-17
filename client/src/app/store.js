import { configureStore } from '@reduxjs/toolkit';
import appSettings from '../reducers/appSettings';
import userData from '../reducers/userData';

export const store = configureStore({
  reducer: {
    appSettings,
    userData,
  },
});

export default store;
