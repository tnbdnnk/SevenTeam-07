import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  addBoard,
  editBoard,
  fetchBoard,
  deleteBoard,
  addColumn
} from './boards-operations';
// import { logout } from '../auth/auth-operations';

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
  reducers: {
    // clearBoardSelection(state) {
      // state.boards = null;
      // state.boards.selectBoard = null;
    // },
  },
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
        console.log(payload);
        state.isLoading = false;
        state.boards = state.boards.map((board) =>
          board._id === payload._id ? (board = payload) : board
        );
      })
      .addCase(editBoard.rejected, rejected)
      .addCase(fetchBoard.pending, (state) => {
        // .addCase(fetchBoard.pending, pending)
        // state.boards.selectBoard = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBoard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // state.boards.selectBoard = null;
        // console.log(payload);
        state.selectBoard = payload;
      })
      .addCase(fetchBoard.rejected, rejected)
      .addCase(deleteBoard.pending, pending)
      .addCase(deleteBoard.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.boards = state.boards.filter((board) => board._id !== payload);
      })
      .addCase(deleteBoard.rejected, rejected)
      // addColumn:
      .addCase(addColumn.pending, pending)
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.selectBoard.columns = [...state.selectBoard.columns, { ...payload, cards: [] }];
      })
      .addCase(addColumn.rejected, rejected)
    // logout:
      // .addCase(logout.pending, pending)
      // .addCase(logout.fulfilled, (state) => {
      //   state.isLoading = false;
      //   state.isLogin = false;
      //   state.user = {};
      //   state.token = '';
      //   // state.boards.selectBoard = null;
      //   state.boards = null;
      //   // console.log(payload);
      //   // state.boards = payload;
      // })
      // .addCase(logout.rejected, rejected)
  },
});

const boardsReducer = boardsSlice.reducer;

export default boardsReducer;
