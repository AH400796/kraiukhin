import {
  StyledLink,
  Wrapper,
  BookIcon,
  QuillIcon,
  ContactsIcon,
} from './Navigation.styled';

export default function Navigation() {
  return (
    <Wrapper>
      <StyledLink to="/about" end>
        <QuillIcon />
        Про автора
      </StyledLink>

      <StyledLink to="/books" end>
        <BookIcon />
        Бібліографія
      </StyledLink>
      <StyledLink to="/contacts" end>
        <ContactsIcon />
        Зв'язатись
      </StyledLink>
    </Wrapper>
  );
}
