const Note = () => {
    return (
        <div className="flex flex-col justify-center p-4 border border-black rounded-md w-1/5 gap-4">
            <div className="heading font-bold">
                jajaj
            </div>
            <div className="content">
                hahahh hfahhah ha hh
            </div>
            <div className="btns flex gap-4">
                <div className="edit p-2 bg-black text-white cursor-pointer rounded-md">Edit</div>
                <div className="delete p-2 bg-black text-white cursor-pointer rounded-md">Delete</div>
            </div>
        </div>
    )
}

export default Note;