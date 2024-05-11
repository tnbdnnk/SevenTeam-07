import { createAsyncThunk } from '@reduxjs/toolkit';

// треба використовувати цей імпорт
// import { authInstance } from '../../api/auth-api.js';

// поки не працює використовую свій токен
// Замінити потім всі axiosInstance  на authInstance
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://project-seventeam07.onrender.com/api',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2YxZGE2Njg4Nzg2YTc4YjJmYmVhNyIsImlhdCI6MTcxNTQxMjQzMSwiZXhwIjoxNzE1NTg1MjMxfQ.2f8ZX-538iodnuFHaFtapU2wC1EOYW7KJtmH5f1E9cQ`,
  },
});

export const getAllBoards = createAsyncThunk(
  'boards/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get('/boards');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const getBoardById = createAsyncThunk(
//   'boards/getById',
//   async (boardId, thunkAPI) => {
//     try {
//       const { data } = await axiosInstance.get(`/boards/${boardId}`);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (newBoard, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(`/boards`, newBoard);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const deleteBoard = createAsyncThunk(
//   'boards/deleteBoard',
//   async (boardId, thunkAPI) => {
//     try {
//       const { data } = await axiosInstance.delete(`/boards/${boardId}`);
//       return data.deletedId;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const editBoard = createAsyncThunk(
  'boards/editBoard',
  async ({ _id, newBoardData }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.patch(
        `/boards/${_id}`,
        newBoardData
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
