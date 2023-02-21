import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenu: 'direct-messages',
};

const appSettings = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    menuIconSelected(state, action) {
      const activeMenu = action.payload;
      state.activeMenu = activeMenu;
    },
  },
});

export const selectActiveMenu = (state) => state.appSettings.activeMenu;

export const { menuIconSelected } = appSettings.actions;

export default appSettings.reducer;
