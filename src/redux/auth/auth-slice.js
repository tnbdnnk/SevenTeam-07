import { createSlice } from '@reduxjs/toolkit';

import {
  signup,
  login,
  current,
  logout,
  updateUser,
  updateTheme,
} from './auth-operations';

import { pending, rejected } from '../../shared/functions/redux';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, pending)
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signup.rejected, rejected)
      .addCase(login.pending, pending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, rejected)
      .addCase(current.pending, pending)
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(current.rejected, (state) => {
        state.isLoading = false;
        state.token = '';
      })
      .addCase(logout.pending, pending)
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isLogin = false;
        state.user = {};
        state.token = '';
      })
      .addCase(logout.rejected, rejected)
      .addCase(updateUser.pending, pending)
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.avatarURL = action.payload.avatarURL;
        state.user.password = action.payload.password;
        state.isLogin = true;
        state.isLoading = false;
      })
      .addCase(updateTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
        state.isLogin = true;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
