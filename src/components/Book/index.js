import React from "react";
import styled from 'styled-components';

// declare styled component
const BookContainer = styled.div`
    width: ${(props) => props.width || '100%'};
    height: 150px;
    border-radius: 5px;
    padding: 10px 20px;
    box-shadow: 0px 0px 7px 2px #c8c8c8;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;
const ImageContainer = styled.div``;
const BookImage = styled.img`
    height: 150px;
`;
const BookTitle = styled.span``;
const TextContainer = styled.div``

// functional component with props destruct
const Book = ({
    book,
    onBookClicked
}) => {

    const {
        title,
        imageLinks
    } = book.volumeInfo;

    // return function for functional component
    return (
        <BookContainer width={'70px'} onClick={() => onBookClicked(book)}>
            <ImageContainer>
                <BookImage src={imageLinks && imageLinks.smallThumbnail} />
            </ImageContainer>
            <TextContainer>
                <BookTitle>{title}</BookTitle>
            </TextContainer>
        </BookContainer>
    )
};


export default Book;