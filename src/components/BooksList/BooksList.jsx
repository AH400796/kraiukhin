import { useState } from 'react';
import { myBooks } from 'data/data';

import { CardsWrapper, CardsList, Wrapper, Title } from './BooksList.styled';
import Book from 'components/Book/Book';

export default function BooksList() {
  const [showModal, setShowModal] = useState(false);
  const [bookNumber, setBookNumber] = useState(null);

  const handleOnClick = () => {
    setShowModal(true);
  };
  const handleOnOverlayClick = () => {
    setShowModal(false);
    setBookNumber(null);
  };

  return (
    <>
      <Wrapper>
        <Title hidden>Мої книги</Title>

        <CardsWrapper>
          <CardsList>
            {myBooks.map(book => {
              const { id, name, cover } = book;
              return (
                <Book
                  key={id}
                  id={id}
                  name={name}
                  cover={cover}
                  myBooks={myBooks}
                  bookNumber={bookNumber}
                  onClick={handleOnClick}
                  onOverlayClick={handleOnOverlayClick}
                  showModal={showModal}
                  setBookNumber={setBookNumber}
                />
              );
            })}
          </CardsList>
        </CardsWrapper>
      </Wrapper>
    </>
  );
}
