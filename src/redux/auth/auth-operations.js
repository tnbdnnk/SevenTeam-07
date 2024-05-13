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

// export const updateUser = createAsyncThunk(
//   'auth/update',
//   async (userData, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       setToken(persistedToken);
//       const res = await axios.patch('/users/update', userData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (userData, thunkAPI) => {
    try {
      const { data } = await authInstance.patch('users/update', userData, {
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
  async (formData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { token } = auth;
      const response = await sendHelpRequest(formData, token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);