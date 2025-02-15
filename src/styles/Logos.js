import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const CarouselContainer = styled.section`
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #0a1931 0%, #162b4d 100%);
  margin: 1rem;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin: 0.5rem;
    border-radius: 20px;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    margin: 0.3rem;
    padding: 1rem;
    border-radius: 15px;
  }

  @media screen and (min-width: 2560px) {
    margin: 2rem;
    padding: 4rem;
    border-radius: 50px;
  }
`;

export const Carousel = styled.div`
  display: inline-flex;
  gap: 2rem;
  white-space: nowrap;
  animation: ${scroll} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const LogoItem = styled.div`
  position: relative;
  font-size: 3rem;
  color: ${props => props.color || '#007bff'};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(51, 51, 51, 0.9);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 0.75rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1000;
`;