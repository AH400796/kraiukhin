import styled from 'styled-components';
import { ReactComponent as Gmail } from '../../images/icon/gmail.svg';
import { ReactComponent as Facebook } from '../../images/icon/facebook.svg';
import { ReactComponent as Telegram } from '../../images/icon/telegram.svg';
import { ReactComponent as Whatsapp } from '../../images/icon/whatsapp.svg';
import { ReactComponent as Instagram } from '../../images/icon/instagram.svg';
import { ReactComponent as X } from '../../images/icon/x.svg';

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
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

export const Title = styled.h2`
  padding: 40px 0;
  text-align: center;
  font-size: 22px;
  line-height: 1.5;
  color: #575555;
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
