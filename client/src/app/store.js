import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    appSettings: appSettingsReducer,
  },
});

export default store;
