import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ singleBook, onSubmit }) {
    const [title, setTitle] = useState(singleBook.title);
    const { editBookById } = useBooksContext();
    
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        onSubmit();
        editBookById(singleBook.id, title);
    };

    return (
        // 🀰🀰🀰🀰🀰 Form to edit books 🀰🀰🀰🀰🀰
        <form className="book-edit" onSubmit={handleSubmit} >
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary" >
                Save
            </button>
        </form>
    )
}

export default BookEdit