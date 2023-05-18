import { register, login, refeshUser, logout } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      // state.isRefreshing = false;
    },
    [register.pending](state, action) {
      // state.isRefreshing = true;
    },
    [register.rejected](state, action) {
      state.error = action.payload;
      // state.isRefreshing = false;
    },

    [login.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      // state.isRefreshing = false;
    },
    [login.pending](state, action) {
      // state.isRefreshing = true;
    },
    [login.rejected](state, action) {
      state.error = action.payload;
      // state.isRefreshing = false;
    },
    [refeshUser.pending](state, action) {
      state.isRefreshing = true;
    },
    [refeshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refeshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [logout.pending](state, action) {},
    [logout.fulfilled](state, action) {
      state.isLoggedIn = false;
      state.isRefreshing = true;
    },
    [logout.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
