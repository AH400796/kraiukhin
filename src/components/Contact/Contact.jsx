import { IconWrapper, ContactLink, Name, Icon } from './Contact.styled';

export default function Contact({ component, name, href, color }) {
  return (
    <IconWrapper color={color}>
      <ContactLink href={href} target="_blank" rel="noopener noreferrer">
        <Icon as={component} />
        <Name>{name}</Name>
      </ContactLink>
    </IconWrapper>
  );
}
