import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBoardById } from '../../api/board-api';


// export const fetchBoard = createAsyncThunk('boards/fetchBoard', async (_, thunkAPI) => { 
export const fetchBoard = createAsyncThunk('board/board', async (id, thunkAPI) => { 
    try {
        console.log(id);
        console.log("object");
        const board = await getBoardById(id);
        return board;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
