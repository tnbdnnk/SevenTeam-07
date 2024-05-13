import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../../api/auth-api.js';

const initialState = {
  cards: [],
  isLoading: false,
  error: null,
};

export const fetchCardsByColumnId = createAsyncThunk(
  'cards/fetchByColumnId',
  async (columnId, thunkAPI) => {
    try {
      const { data } = await authInstance.get(`/columns/${columnId}/cards`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
    },
    removeCard(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsByColumnId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCardsByColumnId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addCase(fetchCardsByColumnId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;
