import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  signupRequest,
  loginRequest,
  currentRequest,
  logoutRequest,
  sendHelpRequest,
  setToken,
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
  'auth/update',
  async (userData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(persistedToken);
      const res = await axios.patch('/user', userData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTheme = createAsyncThunk(
  'auth',
  async (userTheme, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(persistedToken);
      const payload = {
        theme: userTheme,
      };
      const res = await axios.patch('/user/theme', payload);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const sendHelp = createAsyncThunk(
//   'auth/help',
//   async (formData, { getState, rejectWithValue }) => {
//     try {
//       const { auth } = getState();
//       const token = auth.token;
//       setToken(token);
      
//       const response = await axios.post("/users/help", formData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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