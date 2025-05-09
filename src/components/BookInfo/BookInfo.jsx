import { Wrapper, StyledImg } from 'components/BookInfo/BookInfo.styled';

export default function BookInfo({ cover, name }) {
  return (
    <Wrapper>
      <StyledImg src={cover} width="200" height="150" alt={name} />
    </Wrapper>
  );
}
