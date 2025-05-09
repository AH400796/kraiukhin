import Contact from 'components/Contact/Contact';
import {
  CardsWrapper,
  CardsList,
  Title,
  GmailIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  InstagramIcon,
  XIcon,
} from './Contacts.styled';

const contacts = [
  {
    id: 1,
    name: 'Gmail',
    href: 'https://x.com/notifications',
    Component: GmailIcon,
    color: '#e62e2e',
  },
  {
    id: 2,
    name: 'Facebook',
    href: 'https://x.com/notifications',
    Component: FacebookIcon,
    color: '#6824e6',
  },
  {
    id: 3,
    name: 'Instagram',
    href: 'https://x.com/notifications',
    Component: InstagramIcon,
    color: '#ce58c4',
  },
  {
    id: 4,
    name: 'Telegram',
    href: 'https://x.com/notifications',
    Component: TelegramIcon,
    color: '#2c86ec',
  },
  {
    id: 5,
    name: 'WhatsApp',
    href: 'https://x.com/notifications',
    Component: WhatsappIcon,
    color: '#1dcf26',
  },
  {
    id: 6,
    name: 'X (Twitter)',
    href: 'https://x.com/notifications',
    Component: XIcon,
    color: '#000000',
  },
];

export default function ContactsList() {
  return (
    <>
      <Title>Зв'язатись зі мною ви можете за наступними контактами:</Title>

      <CardsWrapper>
        <CardsList>
          {contacts.map(contact => {
            const { id, name, href, Component, color } = contact;
            return (
              <Contact
                key={id}
                name={name}
                href={href}
                component={Component}
                color={color}
              />
            );
          })}
        </CardsList>
        {/* <CardsList>
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
        </CardsList> */}
      </CardsWrapper>
    </>
  );
}
