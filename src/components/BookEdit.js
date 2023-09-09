import { useState } from "react";

function BookEdit() {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("new title is", title)
    };

    return (
        // 🀰🀰🀰 Form to edit books 🀰🀰🀰
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