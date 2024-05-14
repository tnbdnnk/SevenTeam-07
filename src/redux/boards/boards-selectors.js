export const selectAllBoardsList = (state) => state.boards.boards;
export const selectBoard = (state) => state.boards.selectBoard;

export const selectIsLoading = (state) => state.boards.isLoading;

export const selectColumnsByBoardId = (state, boardId) => {
  return state.columns.filter((column) => column.boardId === boardId);
};
