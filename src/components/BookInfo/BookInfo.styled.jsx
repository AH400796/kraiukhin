import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;

  padding: 30px;
`;
export const CoverInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  color: #575555;
`;
export const Cover = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  min-width: 400px;
`;
export const Info = styled.div`
  display: flex;
  justify-content: left;
  align-items: top;
  gap: 25px;

  padding: 30px 0 0 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  gap: 50px;
`;

export const TextContent = styled.div`
  text-align: left;
  font-size: 16px;
  line-height: 1.5;
  text-indent: 35px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: top;
  gap: 15px;
`;

export const SpanStyled = styled.span`
  display: flex;
  justify-content: left;
  align-items: baseline;
  gap: 30px;
`;

export const SpanStyledBold = styled.span`
  display: flex;
  justify-content: left;
  align-items: baseline;
  gap: 30px;
  font-weight: 600;
`;

export const StyledImg = styled.img`
  width: 350px;

  padding: 0 0 20px 0;
`;
