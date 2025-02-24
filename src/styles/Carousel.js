import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  background: #0a1931;
  color: white;
  margin: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 2rem);
  top: 0;
  left: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

export const CarouselTitle = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Carousel = styled.main`
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 100%;
  max-width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  pointer-events: auto;
  transition: all 0.3s ease;
  --position: ${props => props.$position};
  cursor: grab;

  /* Estilos inspirados no Hero */
  background: linear-gradient(135deg, #0a1931 0%, #162b4d 100%);
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 2rem;
  padding: 1rem;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 768px) {
    margin: 1rem;
    border-radius: 20px;
    padding: 0.8rem;
    height: 450px;
  }

  @media (max-width: 480px) {
    margin: 0.5rem;
    border-radius: 15px;
    padding: 0.5rem;
    height: 400px;
  }

  @media screen and (min-width: 1920px) {
    margin: 2.5rem;
    border-radius: 40px;
    padding: 1.2rem;
  }

  @media screen and (min-width: 2560px) {
    margin: 3rem;
    border-radius: 50px;
    padding: 1.5rem;
  }
`;

export const Item = styled.div`
  position: absolute;
  width: 300px;
  height: 400px;
  transition: transform 0.3s ease;
  transform: rotateY(calc(-10deg * (var(--position) - var(--offset))))
    translateX(calc(-350px * (var(--position) - var(--offset))));
  z-index: calc(
    var(--position) -
      max(calc((var(--position) - var(--offset)) * -1), (var(--position) - var(--offset)))
  );
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  border-radius: 10px;
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    width: 100%;
    height: 85%;
    object-fit: cover;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }

  &:nth-of-type(1) { --offset: 1; }
  &:nth-of-type(2) { --offset: 2; }
  &:nth-of-type(3) { --offset: 3; }
  &:nth-of-type(4) { --offset: 4; }
  &:nth-of-type(5) { --offset: 5; }
`;

export const Caption = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadioContainer = styled.div`
  grid-row: 2 / 3;
  display: contents;
`;



export const PrevButton = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: rgba(0,0,0,0.7);
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000;
  transition: color 0.25s;
  &:hover {
    color: rgba(0,0,0,0.9);
  }
`;

export const NextButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: rgba(0,0,0,0.7);
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000;
  transition: color 0.25s;
  &:hover {
    color: rgba(0,0,0,0.9);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  z-index: 2000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  padding: 20px;
  z-index: 2100;
  animation: ${fadeIn} 0.3s ease forwards;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #333;
  font-size: 24px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  z-index: 1001;

  &:hover {
    background: rgb(248, 15, 15);
    transform: rotate(90deg);
    color: #000;
  }
`;
