import PropTypes from 'prop-types';
import { deleteNote } from '../utils/noteSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Note = ({ title, content, id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        const isConfirmed = window.confirm('Are you sure you want to delete this note?');

        if (isConfirmed) {
            dispatch(deleteNote(id));
        }
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
                <Link to={`/edit/${id}`} >
                    <div
                        className="edit p-2 bg-black text-white cursor-pointer rounded-md"
                    >
                        Edit
                    </div>
                </Link>
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