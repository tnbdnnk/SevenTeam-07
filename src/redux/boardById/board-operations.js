import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBoardById } from '../../api/board-api';


// export const fetchBoard = createAsyncThunk('board/board', async (id, {rejectWithValue, getState}) => { 
export const fetchBoard = createAsyncThunk('board', async (id, { rejectWithValue, getState }) => { 
    try {
        const { auth } = getState();
        const board = await getBoardById(id, auth);
        return board;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
