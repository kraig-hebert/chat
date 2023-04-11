import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenu: 'direct-messages',
  activeDirectMessageThread: 'XjsmithX',
  activeFriendsOption: 'all',
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
    friendsOptionSelected(state, action) {
      const option = action.payload;
      state.activeFriendsOption = option;
    },
    userProfileOptionSelected(state) {
      state.curtainSlider.isOpen = true;
    },
    groupCardSettingsSelected(state) {
      state.curtainSlider.isOpen = true;
    },
    menuIconSelected(state, action) {
      const activeMenu = action.payload;
      state.activeMenu = activeMenu;
    },
    userCardDirectMessageIconSelected(state, action) {
      const { username, activeMenu } = action.payload;
      state.activeDirectMessageThread = username;
      state.activeMenu = activeMenu;
    },
  },
});

export const selectActiveMenu = (state) => state.appSettings.activeMenu;
export const selectActiveDirectMessageThread = (state) =>
  state.appSettings.activeDirectMessageThread;
export const selectActiveFriendsOption = (state) =>
  state.appSettings.activeFriendsOption;

export const selectCurtainSliderIsOpen = (state) =>
  state.appSettings.curtainSlider.isOpen;
export const selectCurtainSliderComponent = (state) =>
  state.appSettings.curtainSlider.component;

export const {
  curtainSliderClosed,
  directMessageThreadSelected,
  friendsOptionSelected,
  userProfileOptionSelected,
  groupCardSettingsSelected,
  menuIconSelected,
  userCardDirectMessageIconSelected,
} = appSettings.actions;

export default appSettings.reducer;
