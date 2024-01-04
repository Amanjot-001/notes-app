import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const noteSlice = createSlice({
    name: "notes",
    initialState: {
        items: [],
    },
    reducers: {
        addNote: (state, action) => {
            const newNote = {
                id: uuidv4(),
                ...action.payload,
            };
            state.items.push(newNote);
        },
        deleteNote: (state, action) => {
            state.items = state.items.filter((note) => note.id !== action.payload);
        },
        editNote: (state, action) => {

        }
    }
});

export const { addNote, deleteNote, editNote } = noteSlice.actions

export default noteSlice.reducer;