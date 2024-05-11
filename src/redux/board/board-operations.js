import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBoardById } from '../../api/board-api';


// export const fetchBoard = createAsyncThunk('boards/fetchBoard', async (_, thunkAPI) => {
// export const fetchBoard = createAsyncThunk('board/board', async (id, {rejectWithValue, getState}) => {
//     try {
//         console.log(id);
//         const {auth} = getState();
//         const board = await getBoardById(id, auth);
//         return board;
//     } catch (error) {
//         return rejectWithValue(error.message);
//     }
// });

// export const fetchBoard = createAsyncThunk('board/board', async (id, {rejectWithValue, getState}) => { 
export const fetchBoard = createAsyncThunk('board', async (id, { rejectWithValue, getState }) => { 
    try {
        // console.log(id);
        const { auth } = getState();
        const board = await getBoardById(id, auth);
        return board;
    } catch (error) {
        // console.log(error.message);
        return rejectWithValue(error.message);
    }
});
