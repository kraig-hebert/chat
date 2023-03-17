import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
  allFriends: {},
  pendingFriends: {},
  blockedUsers: {},
};

const userData = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
});

export const selectCurrentUser = (state) => state.userData.currentUser;
export const selectFriends = (state) => state.userData.friends;

export const {} = userData.actions;

export default userData.reducer;
