// Any time user enters text inside <input> and preses submit, the 'create' fuction (eventhandler) is called inside App component.
// Any time 'create' function is called, it modifies the "books" state in some way. 
// Then 'create' function is pass it down to 'BookCreate' companent through prop system.

// After user enters book title text in the <input> and submits, 'create' function is called 
// Then the text title moves up to App component inside 'create' function and in there we can use the input text to update 'books'state
// When book state updates, the App components and all its children rerender and the childrens recieve the updated verion of the 'books' 

import { useEffect,useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
    const { fetchBooks } = useContext(BooksContext);

    // [] means the function is going to get called once after App component is rendered for the first time and it never gets called again.
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]); 

    return (
        <div className="app">
        <h1>My Reading List</h1>
        <BookCreate />
        <BookList />
        </div>
    );
    
};

export default App;