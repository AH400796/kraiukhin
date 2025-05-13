import styled from 'styled-components';

export const IconWrapper = styled.li`
  padding: 10px 10px;
  color: #c45634;
  border-radius: 30px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  transition: 0.2s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: ${props => props.color};
  }
`;

export const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 150px;
  gap: 10px;
  font-size: 20px;
  padding: 10px 10px;

  text-decoration: none;
  border: none;
  color: currentColor;
`;

export const Icon = styled.svg``;

export const Name = styled.strong`
  color: #c45634;
`;
