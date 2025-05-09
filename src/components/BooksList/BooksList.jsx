import { useState } from 'react';
import windCover from '../../images/wind-in-the-head.png';
import gachi from '../../images/gachimuchi.gif';

import { CardsWrapper, CardsList, Wrapper, Title } from './BooksList.styled';
import Book from 'components/Book/Book';

const mybooks = [
  {
    id: 1,
    name: 'Вітер у голові',
    cover: windCover,
    text: 'Роман про львівського велокур’єра Максима...',
    cover2: gachi,
  },
  {
    id: 2,
    name: 'Інша книга',
    cover: windCover,
    text: 'Опис книги 2...',
    cover2: gachi,
  },
  {
    id: 3,
    name: 'Інша книга',
    cover: windCover,
    text: 'Опис книги 2...',
    cover2: gachi,
  },
  {
    id: 4,
    name: 'Інша книга',
    cover: windCover,
    text: 'Опис книги 2...',
    cover2: gachi,
  },
];

export default function BooksList() {
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => {
    setShowModal(true);
  };
  const handleOnOverlayClick = () => {
    setShowModal(false);
  };
  return (
    <>
      <Wrapper>
        <Title hidden>Мої книги</Title>

        <CardsWrapper>
          <CardsList>
            {mybooks.map(book => {
              const { id, name, cover, cover2 } = book;
              return (
                <Book
                  key={id}
                  name={name}
                  cover={cover}
                  cover2={cover2}
                  onClick={handleOnClick}
                  onOverlayClick={handleOnOverlayClick}
                  showModal={showModal}
                />
              );
            })}
          </CardsList>
        </CardsWrapper>
      </Wrapper>
    </>
  );
}
