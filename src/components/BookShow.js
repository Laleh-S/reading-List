function BookShow({ singleBook, onDelete }) {
    const handleClick = () => {
        onDelete(singleBook.id);
    };

    return (
        <div className="book-show">
            {singleBook.title}
            <div className="actions">
                <button className="delete" onClick={handleClick} >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow