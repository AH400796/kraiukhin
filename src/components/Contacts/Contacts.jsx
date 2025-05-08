import {
  CardsWrapper,
  CardsList,
  Title,
  IconWrapper,
  ContactLink,
  GmailIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  InstagramIcon,
  XIcon,
} from './Contacts.styled';

export default function ContactsList() {
  return (
    <>
      <Title>Зв'язатись зі мною ви можете за наступними контактами:</Title>

      <CardsWrapper>
        <CardsList>
          <IconWrapper>
            <ContactLink
              href="https://x.com/notifications"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GmailIcon />
              <strong>Gmail</strong>
            </ContactLink>
          </IconWrapper>
          <IconWrapper>
            <ContactLink
              href="https://x.com/notifications"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
              <strong>Facebook</strong>
            </ContactLink>
          </IconWrapper>
          <IconWrapper>
            <ContactLink
              href="https://x.com/notifications"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              <strong>Instagram</strong>
            </ContactLink>
          </IconWrapper>
          <IconWrapper>
            <ContactLink
              href="https://x.com/notifications"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
              <strong>Telegram</strong>
            </ContactLink>
          </IconWrapper>
          <IconWrapper>
            <ContactLink
              href="https://x.com/notifications"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon />
              <strong>WhatsApp</strong>
            </ContactLink>
          </IconWrapper>
          <IconWrapper>
            <ContactLink
              href="https://x.com/notifications"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon />
              <strong>X (Twitter)</strong>
            </ContactLink>
          </IconWrapper>
        </CardsList>
      </CardsWrapper>
    </>
  );
}
