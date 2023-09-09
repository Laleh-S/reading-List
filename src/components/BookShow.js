import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ singleBook, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(singleBook.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle)
    };

    let content = <h3>{singleBook.title}</h3>; // This shows book title by default. 
    if(showEdit) {   // if showEdit is true, we don't display the title and instead we show the <BookEdit /> 
        content = <BookEdit onSubmit={handleSubmit} singleBook={singleBook} />;
    }

    return (
        <div className="book-show">
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