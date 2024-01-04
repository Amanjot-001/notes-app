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
                <div className="flex flex-col w-2/4 justify-center items-center gap-8">
                    <div className="heading flex w-full justify-between">
                        <p className="font-bold">Title:</p>
                        <input
                            type="text"
                            value={editedNote.title}
                            onChange={handleTitleChange}
                            className="border border-black rounded-md p-2 w-3/4"
                        />
                    </div>
                    <div className="content flex w-full justify-between">
                        <p className="font-bold">Content:</p>
                        <textarea
                            value={editedNote.note}
                            onChange={handleNoteChange}
                            className="border border-black rounded-md p-2 w-3/4 h-40 resize-none"
                        />
                    </div>
                    <div className="save cursor-pointer py-2 px-4 bg-black text-white rounded-md self-start" onClick={handleSave}>
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