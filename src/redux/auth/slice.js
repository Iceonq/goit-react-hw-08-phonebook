const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, emai: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
