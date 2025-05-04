import { Wrapper } from './pages.styled';
import BooksList from 'components/BooksList/BooksList';

import Section from 'components/Section/Section';

export default function Books() {
  return (
    <Wrapper>
      <Section>
        <BooksList />
      </Section>
    </Wrapper>
  );
}
