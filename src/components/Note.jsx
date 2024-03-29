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

    const maxContentLength = 40;
    const maxTitleLength = 30;

    const truncatedContent = content.length > maxContentLength
        ? `${content.substring(0, maxContentLength)}...`
        : content;

    const truncatedTitle = title.length > maxTitleLength
        ? `${title.substring(0, maxTitleLength)}...`
        : title;

    return (
        <div className="flex flex-col justify-center p-4 border border-black rounded-md w-1/4 min-h-48 gap-4 overflow-hidden max-lg:w-2/4 max-md:p-2 max-sm:w-3/4">
            <div className="heading font-bold">
                {truncatedTitle}
            </div>
            <div className="content">
                {truncatedContent}
            </div>
            <div className="btns flex gap-4">
                <Link to={`/edit/${id}`} >
                    <div
                        className="edit p-2 bg-black text-white cursor-pointer rounded-md max-md:text-sm max-md:py-1 max-md:px-2"
                    >
                        Edit
                    </div>
                </Link>
                <div
                    className="delete p-2 bg-black text-white cursor-pointer rounded-md max-md:text-sm max-md:py-1 max-md:px-2"
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