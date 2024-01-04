import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './noteSlice';

const appStore = configureStore({
    reducer: {
        notes: noteReducer, 
    },  
});

export default appStore;