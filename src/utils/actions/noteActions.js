import actionTypes from "../actionTypes";

export default {
    addNote: (note) => ({
        type: actionTypes.ADD_NOTE,
        note
    }),
    deleteNote: (id) => ({
        type: actionTypes.DELETE_NOTE,
        id
    }),
    editNote: (note) => ({
        type: actionTypes.EDIT_NOTE,
        note
    })
}