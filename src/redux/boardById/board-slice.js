import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchBoard } from "./board-operations";


const initState = {
    board: null,
    isLoading: false,
    error: null,
};

const boardSlice = createSlice({
    name: "board",
    initialState: initState,
    extraReducers: (builder) => builder
        // ---------- FETCH BOARD --------------
        .addCase(fetchBoard.fulfilled, (state, action) => {
            state.isLoading = false;
            state.board = action.payload;
        })

        .addMatcher(isAnyOf(fetchBoard.pending),
            state => {
                state.isLoading = true;
                state.error = null;
            }
        )
        .addMatcher(isAnyOf(fetchBoard.rejected),
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        )
    });


export default boardSlice.reducer;
// export const boardReducer = boardSlice.reducer;