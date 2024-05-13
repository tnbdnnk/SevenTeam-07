import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { setToken } from '../../api/auth-api';

import {
  signupRequest,
  loginRequest,
  currentRequest,
  logoutRequest,
  sendHelpRequest,
  authInstance,

  // sendUpdateRequest,
} from '../../api/auth-api';

export const signup = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signupRequest(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginRequest(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await currentRequest(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateProfile',
  async (body, thunkAPI) => {
    try {
      const { data } = await authInstance.patch('users/update', body, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTheme = createAsyncThunk(
  'users/updateTheme',
  async (theme, thunkAPI) => {
    try {
      const { data } = await authInstance.patch('users/theme', theme);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendHelp = createAsyncThunk(
  'auth/sendHelp',
  async (data, { rejectWithValue }) => {
    try {
      const response = await sendHelpRequest(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
