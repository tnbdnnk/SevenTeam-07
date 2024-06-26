import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  addBoard,
  editBoard,
  fetchBoard,
  deleteBoard,
  addColumn,
  addCard,
  editCard,
  deleteColumn,
  deleteCard,
  editColumn,
  moveCard
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
        state.isLoading = false;
        state.boards = state.boards.filter((board) => board._id !== payload);
      })
      .addCase(deleteBoard.rejected, rejected)
      .addCase(addColumn.pending, pending)
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.selectBoard.columns = [
          ...state.selectBoard.columns,
          { ...payload, cards: [] },
        ];
      })
      .addCase(addColumn.rejected, rejected)
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
      .addCase(editCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { _id, cardOwner } = payload; // отримаємо id картки та її колонку
        const column = state.selectBoard.columns.find(
          (col) => col._id === cardOwner
        );
        if (column) {
          const cardIndex = column.cards.findIndex((card) => card._id === _id);
          if (cardIndex !== -1) {
            column.cards[cardIndex] = payload; // оновлюємо картку
          }
        }
      })
      .addCase(editCard.rejected, rejected)
      .addCase(deleteColumn.pending, pending)
      .addCase(deleteColumn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.selectBoard.columns = state.selectBoard.columns.filter(
          (column) => column._id !== payload
        );
      })
      .addCase(deleteColumn.rejected, rejected)
      .addCase(editColumn.pending, pending)
      .addCase(editColumn.fulfilled, (state, { payload: { data, title } }) => {
        state.isLoading = false;
        state.selectBoard.columns = state.selectBoard.columns.map((column) => {
          if (column._id === data._id) {
            column.title = title;
          }
          return column;
        });
      })
      .addCase(editColumn.rejected, rejected)
      .addCase(moveCard.pending, pending)
      .addCase(moveCard.fulfilled, (state, { payload: { oldColumnId, data: { data } } }) => {
        state.isLoading = false;
        const { cardOwner, _id } = data;
        // console.log("CARD DATA = ", data);
        // console.log("cardId = ", _id);
        // console.log("oldColumnId = ", oldColumnId);
        // console.log("newColumnId / cardOwner = ", cardOwner);
        const newColumn = state.selectBoard.columns.find(column => column._id === cardOwner);
        if (newColumn) {
          newColumn.cards.push(data);
        }
        const oldColumn = state.selectBoard.columns.find(column => column._id === oldColumnId);
        if (oldColumn) {
          oldColumn.cards = oldColumn.cards.filter(card => card._id !== _id);
        }
      })
      .addCase(moveCard.rejected, rejected)
  },
}); 


const boardsReducer = boardsSlice.reducer;

export const { clearBoardSelection } = boardsSlice.actions
export default boardsReducer;
