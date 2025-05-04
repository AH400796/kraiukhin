import { StyledFooter, FooterText } from './Footer.styled';
import Container from 'components/Container/Container';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterText>
          © 2025 <b>Усі права захищено</b>
        </FooterText>
      </Container>
    </StyledFooter>
  );
}
