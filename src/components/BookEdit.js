import { useState } from "react";

function BookEdit({ singleBook, onSubmit }) {
    const [title, setTitle] = useState(singleBook.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(singleBook.id, title);
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