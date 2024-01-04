import PropTypes from 'prop-types';
import { deleteNote, editNote } from '../utils/noteSlice';
import { useDispatch } from 'react-redux';

const Note = ({ title, content, id}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteNote(id));
    }

    const handleEdit = () => {
        dispatch(editNote({

        }));
    }

    return (
        <div className="flex flex-col justify-center p-4 border border-black rounded-md w-1/5 gap-4">
            <div className="heading font-bold">
                {title}
            </div>
            <div className="content">
                {content}
            </div>
            <div className="btns flex gap-4">
                <div 
                    className="edit p-2 bg-black text-white cursor-pointer rounded-md"
                    onClick={handleEdit}
                >
                    Edit
                </div>
                <div 
                    className="delete p-2 bg-black text-white cursor-pointer rounded-md"
                    onClick={handleDelete}
                >
                    Delete
                </div>
            </div>
        </div>
    )
}

Note.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default Note;