import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: "notes",
    initialState: {
        items: [],
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
        },
        deleteNote: (state, action) => {
            return {
                ...state,
                notes: state.items.filter((note) => note.id !== action.payload),
            };
        },
        editNote: (state, action) => {

        }
    }
});

export const { addNote, deleteNote, editNote } = noteSlice.actions

export default noteSlice.reducer;