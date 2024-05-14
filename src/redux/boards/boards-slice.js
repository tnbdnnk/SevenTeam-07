import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  addBoard,
  editBoard,
  fetchBoard,
  deleteBoard,
  addColumn,
  addCard,
  deleteColumn,
  deleteCard,
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
  reducers: {
    clearBoardSelection(state) {
      state.boards = [];
      state.selectBoard = null;
    },
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
      .addCase(fetchBoard.pending, pending)
      .addCase(fetchBoard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
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
        state.selectBoard.columns = [
          ...state.selectBoard.columns,
          { ...payload, cards: [] },
        ];
      })
      .addCase(addColumn.rejected, rejected)    
      // addCard:
      .addCase(addCard.pending, pending)
      .addCase(addCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { cardOwner } = payload;
        const column = state.selectBoard.columns.find(
          (col) => col._id === cardOwner
        );
        if (column) {
          column.cards.push(payload);
        } else {
          console.error('Column not found for card owner:', cardOwner);
        }
      })
      .addCase(addCard.rejected, rejected)
      .addCase(deleteCard.pending, pending)
      .addCase(deleteCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.selectBoard.columns.forEach((column) => {
          column.cards = column.cards.filter((card) => card._id !== payload);
        });
      })
      .addCase(deleteCard.rejected, rejected)
      .addCase(deleteColumn.pending, pending)
      .addCase(deleteColumn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.selectBoard.columns = state.selectBoard.columns.filter(
          (column) => column._id !== payload
        );
      })
      .addCase(deleteColumn.rejected, rejected);
//       .addCase(addCard.pending, pending)
//       .addCase(addCard.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         const { cardOwner } = payload;
//         const column = state.selectBoard.columns.find(
//           (col) => col._id === cardOwner
//         );
//         if (column) {
//           column.cards.push(payload);
//         } else {
//           console.error('Column not found for card owner:', cardOwner);
//         }
//         console.log('payload', payload);
//       })
//       .addCase(addCard.rejected, rejected);
  },
});

const boardsReducer = boardsSlice.reducer;

export const { clearBoardSelection } = boardsSlice.actions
export default boardsReducer;
