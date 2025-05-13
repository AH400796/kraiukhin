import { data } from 'data/data';

import {
  Wrapper,
  ParagraphStyled,
  FotoWrapper,
  FotoWrapperRev,
  StyledImg,
} from './About.styled';

export default function About() {
  return (
    <Wrapper>
      <FotoWrapper>
        <StyledImg
          src={data.foto}
          width="423"
          height="564"
          alt="Олег Краюхін"
          title="Олег Краюхін"
        ></StyledImg>
        <ParagraphStyled>{data.text1}</ParagraphStyled>
      </FotoWrapper>
      <FotoWrapperRev>
        <ParagraphStyled>{data.text2}</ParagraphStyled>
        <StyledImg
          src={data.basketball}
          width="423"
          height="317"
          alt="Вечірній баскетбол з друзями"
          title="Вечірній баскетбол з друзями"
        ></StyledImg>
      </FotoWrapperRev>
      <FotoWrapper>
        <StyledImg
          src={data.bike}
          width="423"
          height="317"
          alt="Велопрогулянки"
          title="Велопрогулянки"
        ></StyledImg>
        <ParagraphStyled>{data.text3}</ParagraphStyled>
      </FotoWrapper>
    </Wrapper>
  );
}
