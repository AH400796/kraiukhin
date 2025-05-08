import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Book } from '../../images/icon/book.svg';
import { ReactComponent as Quill } from '../../images/icon/quill.svg';
import { ReactComponent as Contacts } from '../../images/icon/contacts.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  padding: 30px 8px 15px 8px;
  border-radius: 4px 0 0 4px;

  text-align: left;
  text-decoration: none;
  text-decoration: underline;
  color: #bb4646;
  font-weight: 600;

  &:hover,
  &:focus {
    color: #ffffff;
    background: #e0a7a7;
  }

  &.active {
    color: #ffffff;
    background: #bb4646;
    text-decoration: underline;
    text-decoration: none;
  }
`;

export const BookIcon = styled(Book)`
  width: 100px;
  height: 100px;
  fill: currentColor;
`;

export const QuillIcon = styled(Quill)`
  width: 100px;
  height: 100px;
  fill: currentColor;
`;

export const ContactsIcon = styled(Contacts)`
  width: 100px;
  height: 100px;
  fill: currentColor;
`;
