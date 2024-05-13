import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../../api/auth-api.js';

export const getAllColumns = createAsyncThunk(
  'columns/getAll',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await authInstance.get(`/boards/${boardId}/columns`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchColumn = createAsyncThunk(
  'columns/getById',
  async ({ boardId, columnId }, { rejectWithValue }) => {
    try {
      const { data } = await authInstance.get(
        `/boards/${boardId}/columns/${columnId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'columns/add',
  async ({ boardId, newColumn }, thunkAPI) => {
    try {
      const { data } = await authInstance.post(
        `/boards/${boardId}/columns`,
        newColumn
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/edit',
  async ({ boardId, columnId, updatedColumn }, thunkAPI) => {
    try {
      const { data } = await authInstance.patch(
        `/boards/${boardId}/columns/${columnId}`,
        updatedColumn
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/delete',
  async ({ boardId, columnId }, thunkAPI) => {
    try {
      await authInstance.delete(`/boards/${boardId}/columns/${columnId}`);
      return columnId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const selectColumnsByBoardId = (state, boardId) => {
  return state.columns.filter((column) => column.boardId === boardId);
};

export const selectColumnById = (state, columnId) => {
  return state.columns.find((column) => column.id === columnId);
};
