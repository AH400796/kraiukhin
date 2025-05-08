import styled from 'styled-components';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
  z-index: 1000;
  background-color: ${props => props.theme.colors.backdropColor};
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 95vw;

  padding: 44px 20px 16px;
  box-shadow: ${props => props.theme.shadows.mainShadow};
  border-radius: 20px;
  background-color: ${props => props.theme.colors.clearWhite};

  @media screen and (${props => props.theme.media.sm}) {
    width: 280px;
  }

  @media screen and (${props => props.theme.media.md}) {
    padding: 32px 32px 24px;
    width: 681px;
    height: 540px;
  }

  @media screen and (${props => props.theme.media.lg}) {
  }
`;
