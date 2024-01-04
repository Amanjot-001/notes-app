import Note from "./Note";

const Notes = () => {
    return (
        <div className="flex flex-wrap gap-6 items-center justify-start overflow-y-auto">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    );
};

export default Notes;
