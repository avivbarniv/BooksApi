import React, { useCallback } from "react";
import Book from "../Book";

// functional component with props
const BooksList = (props) => {
    const onBookClicked = useCallback((book) => {
        alert(book.volumeInfo.title)
    }, []);
    return (
        props.books.map((b) => <Book book={b} onBookClicked={onBookClicked} />)
    )
};


export default BooksList;