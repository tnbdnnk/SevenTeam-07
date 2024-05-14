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
      const { data } = await authInstance.get(`/boards/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
      thunkAPI.dispatch(fetchBoard(_id));
      console.log('editBoard - ', data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// MODAL addColumn:
export const addColumn = createAsyncThunk(
  'boards/columns/add',
  async ({ _id, title }, thunkAPI) => {
    try {
      const { data } = await authInstance.post(`/columns/${_id}`, { title });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// MODAL addCards:
export const addCard = createAsyncThunk(
  'boards/cards/add',
  async ({ _id, newCard }, thunkAPI) => {
    try {
      const { data } = await authInstance.post(`/cards/${_id}`, newCard);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'boards/cards/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await authInstance.delete(`/cards/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'boards/columns/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await authInstance.delete(`/columns/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
