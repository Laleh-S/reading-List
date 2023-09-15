import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);  
    
    // 🀰🀰🀰🀰🀰 Get all the Books 🀰🀰🀰🀰🀰 
    const fetchBooks = useCallback(async() => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data)
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

    const sharedContent = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        editBookById,
    };

    return <BooksContext.Provider value={sharedContent} >
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;