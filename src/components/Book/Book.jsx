import Modal from 'components/Modal/Modal';
import BookInfo from 'components/BookInfo/BookInfo';

import { Wrapper, BookName, StyledImg } from './Book.styled';

export default function Book({
  name,
  cover,
  onClick,
  onOverlayClick,
  showModal,
  cover2,
}) {
  return (
    <>
      <Wrapper onClick={onClick}>
        <StyledImg src={cover} width="100" height="200" alt={name} />
        <BookName>
          <strong>{name}</strong>
        </BookName>
      </Wrapper>
      {showModal && (
        <Modal onOverlayClick={onOverlayClick}>
          <BookInfo name={name} cover={cover2} />
        </Modal>
      )}
    </>
  );
}
