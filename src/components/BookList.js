
// here we receive the book array we created in the 'App' component through prop called 'books'
// we then map over the array and for each object we create a seperate BookShow component
import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';


function BookList() {
    const { books } = useBooksContext();

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} singleBook={book} />; 
    });

    return (
        <div className="book-list">{renderedBooks}</div>
    );
};

export default BookList;