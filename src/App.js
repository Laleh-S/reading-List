// Any time user enters text inside <input> and preses submit, the 'create' fuction (eventhandler) is called inside App component.
// Any time 'create' function is called, it modifies the "books" state in some way. 
// Then 'create' function is pass it down to 'BookCreate' companent through prop system.

// After user enters book title text in the <input> and submits, 'create' function is called 
// Then the text title moves up to App component inside 'create' function and in there we can use the input text to update 'books'state
// When book state updates, the App components and all its children rerender and the childrens recieve the updated verion of the 'books' 

import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {
    const [books, setBooks] = useState([]);  
    
     // 🀰🀰🀰🀰🀰 Get all the Books 🀰🀰🀰🀰🀰 
    const fetchBooks = async() => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data)
    };

    // [] means the function is going to get called once after App component is rendered for the first time and it never gets called again.
    useEffect(() => {
        fetchBooks()
    }, []); 
    

    // 🀰🀰🀰🀰🀰 Create Book 🀰🀰🀰🀰🀰 
    const createBook = async (title) => { // title is what the user enters in the <input>.
        const response = await axios.post('http://localhost:3001/books', {
        title: title
    });
        const createdBooks = [
        ...books,
        response.data
    ];
    setBooks(createdBooks);
    };


    // 🀰🀰🀰🀰🀰 Delete Book 🀰🀰🀰🀰🀰 
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        
        const deletedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(deletedBooks);
    };


    // 🀰🀰🀰🀰🀰 Edit Book 🀰🀰🀰🀰🀰 
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });
    
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                // ...response.data means take all the diffrent properties out of that object and add them to ...books.
                return { ...books, ...response.data }; // responses.data is the updated book object that came back from the API.
            }; 
            return book;
        });
        setBooks(updatedBooks);
    };

    return (
        <div className="app">
        <h1>My Reading List</h1>
        <BookCreate onCreate={createBook}/>
        <BookList allBooks={books} onDelete={deleteBookById} onEdit={editBookById} />
        </div>
    )
    
}

export default App;