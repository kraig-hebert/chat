import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenu: 'direct-messages',
  activeDirectMessageThread: 'XjsmithX',
  curtainSlider: {
    isOpen: false,
    component: '',
  },
};

const appSettings = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    curtainSliderClosed(state) {
      state.curtainSlider.isOpen = false;
    },
    directMessageThreadSelected(state, action) {
      const userName = action.payload;
      state.activeDirectMessageThread = userName;
    },
    groupCardSettingsSelected(state) {
      state.curtainSlider.isOpen = true;
    },
    menuIconSelected(state, action) {
      const activeMenu = action.payload;
      state.activeMenu = activeMenu;
    },
  },
});

export const selectActiveMenu = (state) => state.appSettings.activeMenu;
export const selectActiveDirectMessageThread = (state) =>
  state.appSettings.activeDirectMessageThread;

export const selectCurtainSliderIsOpen = (state) =>
  state.appSettings.curtainSlider.isOpen;
export const selectCurtainSliderComponent = (state) =>
  state.appSettings.curtainSlider.component;

export const {
  curtainSliderClosed,
  directMessageThreadSelected,
  groupCardSettingsSelected,
  menuIconSelected,
} = appSettings.actions;

export default appSettings.reducer;
