import { StyledLink, Wrapper } from './Navigation.styled';

export default function Navigation() {
  return (
    <Wrapper>
      <StyledLink to="/" end>
        Про автора
      </StyledLink>
      <StyledLink to="/books" end>
        Бібліографія
      </StyledLink>
      <StyledLink to="/contacts" end>
        Зв'язатись
      </StyledLink>
    </Wrapper>
  );
}
