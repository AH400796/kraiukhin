import styled, { keyframes } from 'styled-components';

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

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
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalBody = styled.div`
  width: 60vw;
  padding: 44px 20px 16px;
  border-radius: 20px;
  background-color: #ffffff;
  animation: ${fadeInScale} 0.3s ease forwards;
  min-width: 300px;
  max-width: 90vw;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform-origin: center center;
`;
