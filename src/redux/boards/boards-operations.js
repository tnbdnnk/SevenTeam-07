import { createAsyncThunk } from '@reduxjs/toolkit';

import { authInstance } from '../../api/auth-api.js';

export const getAllBoards = createAsyncThunk(
  'boards/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await authInstance.get('/boards');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchBoard = createAsyncThunk(
  'boards/getById',
  async (id, { rejectWithValue }) => {
    try {
      // const { auth } = getState();
      const { data } = await authInstance.get(`/boards/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// ----------запит Анни
// export const fetchBoard = createAsyncThunk(
//   'boards/getById',
//   async (id, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       const board = await getBoardById(id, auth);
//       console.log('запит Анни getBoardById');
//       return board;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (newBoard, thunkAPI) => {
    try {
      const { data } = await authInstance.post(`/boards`, newBoard);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await authInstance.delete(`/boards/${boardId}`);
      console.log(data.id);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  'boards/editBoard',
  async ({ _id, newBoardData }, thunkAPI) => {
    try {
      const { data } = await authInstance.patch(`/boards/${_id}`, newBoardData);
      console.log('editBoard - ', data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
