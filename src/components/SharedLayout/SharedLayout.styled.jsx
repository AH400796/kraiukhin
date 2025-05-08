import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex: 1 0 auto;
  gap: 30px;

  width: 100%;
`;

export const StyledContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 480px) {
    width: 480px;
    padding: 0 16px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 32px;
  }
`;
