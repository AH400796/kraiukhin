import { data } from 'data/data';

import {
  Wrapper,
  ParagraphStyled,
  ParagraphWrapper,
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
      <ParagraphWrapper>
        <ParagraphStyled>{data.text2}</ParagraphStyled>
        <ParagraphStyled>{data.text3}</ParagraphStyled>
        <ParagraphStyled>{data.text4}</ParagraphStyled>
        <ParagraphStyled>{data.text5}</ParagraphStyled>
        <ParagraphStyled>{data.text6}</ParagraphStyled>
        <ParagraphStyled>{data.text7}</ParagraphStyled>
        <ParagraphStyled>{data.text8}</ParagraphStyled>
        <ParagraphStyled>{data.text9}</ParagraphStyled>
      </ParagraphWrapper>
      <FotoWrapperRev>
        <ParagraphStyled>{data.text10}</ParagraphStyled>
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
        <ParagraphStyled>{data.text11}</ParagraphStyled>
      </FotoWrapper>
    </Wrapper>
  );
}
