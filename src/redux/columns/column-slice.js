import { createSlice } from '@reduxjs/toolkit';
import { fetchBoard } from './boards-operations';

const initialState = {
  columns: [],
  isLoading: false,
  error: null,
};

const pending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const columnSlice = createSlice({
  name: 'columns',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoard.pending, pending)
      .addCase(fetchBoard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.columns = payload.columns;
      })
      .addCase(fetchBoard.rejected, rejected);
  },
});

const columnReducer = columnSlice.reducer;

export default columnReducer;
