import Note from "./Note";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Notes = () => {
    const allNotes = useSelector(state => state.notes.items);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(allNotes));
    }, [allNotes]);

    return (
        <div className="flex flex-wrap gap-6 items-center justify-start overflow-y-auto w-full">
            {allNotes.length > 0 ?
                allNotes.map((note, index) => (
                    <Note
                        key={index}
                        title={note.title}
                        content={note.note}
                        id={note.id}
                    />
                ))
                : <div className="flex justify-center font-bold text-3xl">
                    No notes found
                </div>}
        </div>
    );
};

export default Notes;
