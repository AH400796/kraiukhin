// import logo from 'images/goit-logo.png';
import { Wrapper, BookName, StyledImg } from './Book.styled';

export default function Book({ name, cover }) {
  return (
    <Wrapper>
      <StyledImg src={cover} width="150" height="200" alt={name} />
      <BookName>
        <strong>{name}</strong>
      </BookName>
    </Wrapper>
  );
}
