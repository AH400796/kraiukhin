import Modal from 'components/Modal/Modal';
import BookInfo from 'components/BookInfo/BookInfo';

import { Wrapper, BookName, StyledImg } from './Book.styled';

export default function Book({
  id,
  name,
  cover,
  onClick,
  onOverlayClick,
  showModal,
  setBookNumber,
  myBooks,
  bookNumber,
}) {
  const handleOnClick = () => {
    setBookNumber(id);
    onClick();
  };
  return (
    <>
      <Wrapper onClick={handleOnClick}>
        <StyledImg src={cover} width="100" height="200" alt={name} />
        <BookName>
          <strong>{name}</strong>
        </BookName>
      </Wrapper>
      {showModal && (
        <Modal onOverlayClick={onOverlayClick}>
          <BookInfo
            name={myBooks[bookNumber - 1].name}
            type={myBooks[bookNumber - 1].type}
            cover={myBooks[bookNumber - 1].cover}
            published={myBooks[bookNumber - 1].published}
            genre={myBooks[bookNumber - 1].genre}
            pages={myBooks[bookNumber - 1].pages}
            text={myBooks[bookNumber - 1].text}
            onClick={onOverlayClick}
          />
        </Modal>
      )}
    </>
  );
}
