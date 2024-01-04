const Input = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full">
            <input type="text" id="title" placeholder="Title" className="w-2/4 p-2 border border-black rounded-md" />

            <textarea type="text" id="note" placeholder="Content" className="w-2/4 h-40 p-2 border border-black rounded-md resize-none" />

            <button className="bg-black text-white py-2 px-4 cursor-pointer rounded-md">Add</button>
        </div>
    )
}

export default Input;