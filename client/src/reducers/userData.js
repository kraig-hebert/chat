import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { users } from '../data/dummyData';

const initialState = {
  currentUser: {},
  allFriends: {},
  pendingFriends: {},
  blockedUsers: {},
};

export const fetchFriends = createAsyncThunk('userData/fetchFriends', () => {
  const friends = {
    friend: {},
    pending: {},
    blocked: {},
  };
  users.forEach((user) => {
    friends[user.friendStatus][user.id] = user;
  });
  return friends;
});

const userData = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    currentUserLoaded(state, action) {
      const currentUser = action.payload;
      state.currentUser = currentUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFriends.fulfilled, (state, action) => {
      const { friend, pending, blocked } = action.payload;
      state.allFriends = friend;
      state.pendingFriends = pending;
      state.blockedUsers = blocked;
    });
  },
});

export const selectCurrentUser = (state) => state.userData.currentUser;

export const selectAllFriends = (state) => state.userData.allFriends;
export const selectPendingFriends = (state) => state.userData.pendingFriends;
export const selectBlockedUsers = (state) => state.userData.blockedUsers;

export const { currentUserLoaded } = userData.actions;

export default userData.reducer;
