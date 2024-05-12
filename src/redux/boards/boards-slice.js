import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  addBoard,
  editBoard,
  fetchBoard,
} from './boards-operations';

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
  selectBoard: null,
};

const pending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllBoards.pending, pending)
      .addCase(getAllBoards.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.boards = payload;
      })
      .addCase(getAllBoards.rejected, rejected)
      .addCase(addBoard.pending, pending)
      .addCase(addBoard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.boards.push(payload);
      })
      .addCase(addBoard.rejected, rejected)
      .addCase(editBoard.pending, pending)
      .addCase(editBoard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.boards.findIndex(
          (board) => board._id === payload._id
        );
        if (index !== -1) {
          state.boards[index] = payload;
        }
      })
      .addCase(editBoard.rejected, rejected)
      .addCase(fetchBoard.pending, pending)
      .addCase(fetchBoard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.selectBoard = state.boards.find(
          (board) => board._id === payload._id
        );
      })
      .addCase(fetchBoard.rejected, rejected);

    // .addCase(deleteContact.pending, pending)
    // .addCase(deleteContact.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.items = state.items.filter(({ id }) => id !== payload);
    // })
    // .addCase(deleteContact.rejected, rejected)
  },
});

const boardsReducer = boardsSlice.reducer;

export default boardsReducer;
