import styled from 'styled-components';
import { ReactComponent as Gmail } from '../../images/icon/gmail.svg';
import { ReactComponent as Facebook } from '../../images/icon/facebook.svg';
import { ReactComponent as Telegram } from '../../images/icon/telegram.svg';
import { ReactComponent as Whatsapp } from '../../images/icon/whatsapp.svg';
import { ReactComponent as Instagram } from '../../images/icon/instagram.svg';
import { ReactComponent as X } from '../../images/icon/x.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

export const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 10px;

  row-gap: 40px;
  column-gap: 30px;
  list-style: none;

  color: #bb4646;

  @media screen and (min-width: 1280px) {
  }
`;

export const IconWrapper = styled.li`
  padding: 10px 10px;
  color: #bb4646;
  border-radius: 30px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  transition: 0.2s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Title = styled.h2`
  padding: 40px 0;
  text-align: center;
  font-size: 22px;
  line-height: 1.5;
  color: #575555;
`;

export const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 150px;
  gap: 10px;
  font-size: 20px;

  padding: 10px 10px;
  border: none;
  color: currentColor;
`;

export const GmailIcon = styled(Gmail)`
  width: 150px;
  height: 100px;
  fill: currentColor;
`;

export const FacebookIcon = styled(Facebook)`
  width: 150px;
  height: 100px;
  fill: currentColor;
`;

export const TelegramIcon = styled(Telegram)`
  width: 150px;
  height: 100px;
  fill: currentColor;
`;

export const WhatsappIcon = styled(Whatsapp)`
  width: 150px;
  height: 100px;
  fill: currentColor;
`;

export const InstagramIcon = styled(Instagram)`
  width: 150px;
  height: 100px;
  fill: currentColor;
`;

export const XIcon = styled(X)`
  width: 150px;
  height: 100px;
  fill: currentColor;
`;
