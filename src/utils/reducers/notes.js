import actionTypes from "../actionTypes";

const initialState = {
    notes: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload],
            };
        case actionTypes.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload),
            };
        case actionTypes.EDIT_NOTE:
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id ? action.payload : note
                ),
            };
        default:
            return state;
    }
}