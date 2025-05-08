import { useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';

// import { ModalItem } from '../ModalNotice/ModalNotice';

import {
  DeleteBtnWrapper,
  ContainerCard,
  ContainerInfo,
  Img,
  Text,
} from './NoticesCategoriesItem.styled';

export const BookInfo = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClick = () => {
    // try {
    //   (async () => {
    //     const response = await getNoticeById(id);
    //     setPetsDetails(response.data);
    //   })();
    // } catch (error) {
    //   notify('error', 'Sorry, something wrong. Please try again');
    // }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Modal onClick={handleModalClick}>
          <h2>I'm here</h2>
        </Modal>
      )}
    </>
  );
};
