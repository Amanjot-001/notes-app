import { useSelector, useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { editNote } from "../utils/noteSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const notes = useSelector(state => state.notes.items);
    const { id } = useParams();
    const Navigate = useNavigate();
    const noteToDisplay = notes.find(note => note.id.toString() === id);

    const [editedNote, setEditedNote] = useState({
        title: noteToDisplay.title,
        note: noteToDisplay.note,
    });

    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(
            editNote({
                id: noteToDisplay.id,
                ...editedNote,
            })
        );
        Navigate('/');
    }

    const handleTitleChange = (e) => {
        setEditedNote((prevNote) => ({
            ...prevNote,
            title: e.target.value,
        }));
    };

    const handleNoteChange = (e) => {
        setEditedNote((prevNote) => ({
            ...prevNote,
            note: e.target.value,
        }));
    };

    return (
        <>
            {noteToDisplay ? (
                <div className="flex">
                    <div className="heading">
                        <p className="font-bold">Title:</p>
                        <input
                            type="text"
                            value={editedNote.title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className="content">
                        <p>Content:</p>
                        <textarea
                            value={editedNote.note}
                            onChange={handleNoteChange}
                        />
                    </div>
                    <div className="save" onClick={handleSave}>
                        Save
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <p className="text-2xl">Note not found</p>
                </div>
            )}
        </>
    )
}

export default Edit;