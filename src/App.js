// Any time user enters text inside <input> and preses submit, the 'create' fuction (eventhandler) is called inside App component.
// Any time 'create' function is called, it modifies the "books" state in some way. 
// Then 'create' function is pass it down to 'BookCreate' companent through prop system.

// After user enters book title text in the <input> and submits, 'create' function is called 
// Then the text title moves up to App component inside 'create' function and in there we can use the input text to update 'books'state
// When book state updates, the App components and all its children rerender and the childrens recieve the updated verion of the 'books' 

import { useState } from 'react';
import BookCreate from './components/BookCreate';
// import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);  
    
    // 🀰🀰🀰 Create Book 🀰🀰🀰 
    // we call "create" function every time the user types in something in the input in "BookCreate" component and submits.
    const create = (title) => { // title -> is what user enters in the input.
    console.log("Need to add book with the title of", title)
    }

    return (
        <BookCreate onCreate={create}/>
    )
    
}

export default App;