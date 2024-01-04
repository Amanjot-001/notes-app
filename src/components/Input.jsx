import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from '../utils/noteSlice';
import { useNavigate } from "react-router-dom";

const Input = () => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleAddBtn = () => {
        if (title.replace(/\s+/g, " ").trim() && note.replace(/\s+/g, " ").trim()) {
            dispatch(addNote({
                title,
                note,
            }))
            setTitle('');
            setNote('');
        }
        navigate('/');
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full">
            <input
                type="text"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-2/4 p-2 border border-black rounded-md"
            />

            <textarea
                type="text"
                id="note"
                placeholder="Content"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-2/4 h-40 p-2 border border-black rounded-md resize-none"
            />

            <button
                className="bg-black text-white py-2 px-4 cursor-pointer rounded-md"
                onClick={handleAddBtn}
            >
                Add
            </button>
        </div>
    )
}

export default Input;