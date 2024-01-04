import Note from "./Note";
import { useSelector } from "react-redux";

const Notes = () => {
    const allNotes = useSelector(state => state.notes.items);

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
