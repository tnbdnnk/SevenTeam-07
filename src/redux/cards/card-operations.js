import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../../api/auth-api.js';

export const getAllCards = createAsyncThunk(
  'cards/getAll',
  async (columnId, thunkAPI) => {
    try {
      const { data } = await authInstance.get(`/columns/${columnId}/cards`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCard = createAsyncThunk(
  'cards/addCard',
  async ({ columnId, newCard }, thunkAPI) => {
    try {
      const { data } = await authInstance.post(
        `/columns/${columnId}/cards`,
        newCard
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'cards/editCard',
  async ({ columnId, cardId, updatedCard }, thunkAPI) => {
    try {
      const { data } = await authInstance.patch(
        `/columns/${columnId}/cards/${cardId}`,
        updatedCard
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async ({ columnId, cardId }, thunkAPI) => {
    try {
      await authInstance.delete(`/columns/${columnId}/cards/${cardId}`);
      return cardId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
