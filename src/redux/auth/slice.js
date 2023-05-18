import { register, login } from './operations';
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
  },
});

export const authReducer = authSlice.reducer;
