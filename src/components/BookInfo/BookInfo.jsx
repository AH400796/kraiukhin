import {
  Wrapper,
  CoverInfo,
  Cover,
  Info,
  InfoWrapper,
  TextContent,
  TextWrapper,
  SpanStyled,
  SpanStyledBold,
  StyledImg,
} from 'components/BookInfo/BookInfo.styled';

export default function BookInfo({
  cover,
  book,
  name,
  type,
  published,
  genre,
  pages,
  text,
  onClick,
}) {
  return (
    <Wrapper onClick={onClick}>
      <CoverInfo>
        <Cover>
          <StyledImg src={cover} width="250" height="350" alt={name} />
        </Cover>
        <TextWrapper>
          <Info>
            <InfoWrapper>
              <SpanStyled>{`Назва${book ? ' книги:' : ':'}`}</SpanStyled>
              <SpanStyled>Видання:</SpanStyled>
              <SpanStyled>Тип:</SpanStyled>
              <SpanStyled>Жанр:</SpanStyled>
              <SpanStyled>Кількість сторінок:</SpanStyled>
            </InfoWrapper>
            <InfoWrapper>
              <SpanStyledBold>{`"${name}"`}</SpanStyledBold>
              <SpanStyledBold>{published}</SpanStyledBold>
              <SpanStyledBold>{type}</SpanStyledBold>
              <SpanStyledBold>{genre}</SpanStyledBold>
              <SpanStyledBold>{pages}</SpanStyledBold>
            </InfoWrapper>
          </Info>
          <TextContent>
            <SpanStyled>{text}</SpanStyled>
          </TextContent>
        </TextWrapper>
      </CoverInfo>
    </Wrapper>
  );
}
