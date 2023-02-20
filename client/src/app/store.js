import { configureStore } from '@reduxjs/toolkit';
import appSettings from '../reducers/appSettings';

export const store = configureStore({
  reducer: {
    appSettings: appSettings,
  },
});

export default store;
