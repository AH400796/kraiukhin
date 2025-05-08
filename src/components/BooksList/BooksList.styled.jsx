import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  row-gap: 30px;
  column-gap: 30px;
  list-style: none;

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  line-height: 1.5;
  color: #bb4646;
`;
