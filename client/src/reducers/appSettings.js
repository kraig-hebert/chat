import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const appSettings = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export const {} = appSettings.actions;

export default appSettings.reducer;
