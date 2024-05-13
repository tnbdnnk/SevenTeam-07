export const selectColumnsByBoardId = (state, boardId) => {
  return state.columns.filter((column) => column.boardId === boardId);
};

export const selectColumnById = (state, columnId) => {
  return state.columns.find((column) => column.id === columnId);
};
