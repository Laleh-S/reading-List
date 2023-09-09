
// here we receive the book array we created in the 'App' component through prop called 'allBooks'
// we then map over the array and for each object we create a seperate BookShow component
import BookShow from './BookShow';


function BookList({ allBooks, onDelete  }) {
    const renderedBooks = allBooks.map((book) => {
        return <BookShow key={book.id} singleBook={book} onDelete={onDelete} />; 
    })

    return (
        <div className="book-list">{renderedBooks}</div>
    )
}

export default BookList