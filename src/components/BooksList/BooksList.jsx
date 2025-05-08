// import { useState, useEffect } from 'react';
import windCover from '../../images/wind-in-the-head.png';
// import windCover from '.../images/wind-in-the-head.png';

import { CardsWrapper, CardsList, Wrapper, Title } from './BooksList.styled';
import Book from 'components/Book/Book';

const mybooks = [
  {
    id: 1,
    name: 'Вітер у голові',
    cover: windCover,
    text: 'Роман про львівського велокур’єра Максима...',
  },
  {
    id: 2,
    name: 'Інша книга',
    cover: windCover,
    text: 'Опис книги 2...',
  },
  {
    id: 3,
    name: 'Інша книга',
    cover: windCover,
    text: 'Опис книги 2...',
  },
  {
    id: 4,
    name: 'Інша книга',
    cover: windCover,
    text: 'Опис книги 2...',
  },
];

export default function BooksList() {
  return (
    <Wrapper>
      <Title hidden>Мої книги</Title>

      <CardsWrapper>
        <CardsList>
          {mybooks.map(book => {
            const { id, name, cover } = book;
            return <Book key={id} name={name} cover={cover} />;
          })}
        </CardsList>
      </CardsWrapper>
    </Wrapper>
  );
}
