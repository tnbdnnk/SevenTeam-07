import { createSlice } from '@reduxjs/toolkit';

import {
    signup,
    login,
    current,
    logout,
    updateUser,
    updateTheme,
    sendHelp,
} from './auth-operations';

import { pending, rejected } from '../../shared/functions/redux';

const initialState = {
    user: { name: null, email: null, avatarURL: null, theme: 'dark' },
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
        .addCase(updateUser.fulfilled, (state, { payload }) => {
            state.user.name = payload.user.name;
            state.user.email = payload.user.email;
            state.user.avatarURL = payload.user.avatarURL;
            state.user.password = payload.user.password;
            state.isLogin = true;
            state.isLoading = false;
        })
        .addCase(updateTheme.fulfilled, (state, { payload }) => {
            state.user.theme = payload.theme;
            state.isLogin = true;
            state.isLoading = false;
        })
        .addCase(sendHelp.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        })
        .addCase(sendHelp.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export default authSlice.reducer;
