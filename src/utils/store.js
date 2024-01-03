import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './reducers/notes'

const appStore = configureStore({
    reducer: {
        noteReducer: noteReducer, 
    },  
});

export default appStore;