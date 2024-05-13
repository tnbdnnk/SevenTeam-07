import { createSelector } from '@reduxjs/toolkit';

export const selectAllCards = (state) => state.cards;

export const selectCardsByColumnId = (columnId) =>
  createSelector(selectAllCards, (cards) =>
    cards.filter((card) => card.columnId === columnId)
  );

export const selectCardById = (cardId) =>
  createSelector(selectAllCards, (cards) =>
    cards.find((card) => card.id === cardId)
  );
