import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenu: 'direct-messages',
  activeDirectMessageThread: 'jsmith376',
};

const appSettings = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    menuIconSelected(state, action) {
      const activeMenu = action.payload;
      state.activeMenu = activeMenu;
    },
    directMessageThreadSelected(state, action) {
      const userName = action.payload;
      state.activeDirectMessageThread = userName;
    },
  },
});

export const selectActiveMenu = (state) => state.appSettings.activeMenu;
export const selectActiveDirectMessageThread = (state) =>
  state.appSettings.activeDirectMessageThread;

export const { menuIconSelected, directMessageThreadSelected } =
  appSettings.actions;

export default appSettings.reducer;
