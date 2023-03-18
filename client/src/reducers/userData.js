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
  reducers: {
    currentUserLoaded(state, action) {
      const currentUser = action.payload;
      state.currentUser = currentUser;
    },
  },
});

export const selectCurrentUser = (state) => state.userData.currentUser;

export const { currentUserLoaded } = userData.actions;

export default userData.reducer;
