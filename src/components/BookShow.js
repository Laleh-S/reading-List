import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';
import BookEdit from "./BookEdit";

function BookShow({ singleBook }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useBooksContext();

    const handleDeleteClick = () => {
        deleteBookById(singleBook.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{singleBook.title}</h3>; // This shows book title by default. 
    if(showEdit) {   // if showEdit is true, we don't display the title and instead we show the <BookEdit /> 
        content = <BookEdit onSubmit={handleSubmit} singleBook={singleBook} />;
    }

    return (
        <div className="book-show">
            <img 
            src={`https://picsum.photos/seed/${singleBook.id}/300/200`}
            alt="books"
            />
            <div>{content}</div>
            <div className="actions">
                <button className="delete" onClick={handleDeleteClick} >
                    Delete
                </button>
                <button className="edit" onClick={handleEditClick} >
                    Edit
                </button>
            </div>
        </div>
    )
}

export default BookShow