import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-basis: 260px;
  transition: 0.25s ease-in-out;

  padding: 20px 30px 10px;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.05);
    background: #e0a7a7;
  }
`;

export const StyledImg = styled.img`
  padding: 0 0 20px 0;
`;

export const BookName = styled.span`
  margin-bottom: 16px;
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding: 20px 0 0 0;
  border-top: 2px solid #bb4646;
  text-transform: uppercase;
  color: #bb4646;
`;
