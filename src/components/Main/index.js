import React from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import styled from 'styled-components';
import BooksList from "../BooksList";

const getBooksApi = async (query = '') => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${query}`)
    return response.data.items;
}

const StyledInput = styled.input`
    width: 250px;
    height: 30px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
    text-indent: 5px;
    font-size: 14px;
`;

const Main = () => {
    // this way we declare a variables with useState
    const [searchValue, setSearchValue] = useState('');
    const [booksData, setBooksData] = useState(null);

    const onSearchValueChanged = (value) => {
        setSearchValue(value);
    }


    const getBooksWithCondition = async (searchValue) => {
        if (searchValue.length > 2) {
            const booksFromApi = await getBooksApi(searchValue);
            setBooksData(booksFromApi);
        }
    };

    // this way we run a function every time searchValueChanged
    useEffect(() => {
        getBooksWithCondition(searchValue)
    }, [searchValue]);

    return (
        <>
            <StyledInput
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={e=>onSearchValueChanged(e.target.value)}
            />
            {booksData ? <BooksList books={booksData} /> : null}
        </>
    )
};

export default Main;