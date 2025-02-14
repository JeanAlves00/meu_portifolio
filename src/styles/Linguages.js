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
  width: 100%;
  padding: 2rem 1rem;
  background: rgb(0, 0, 0);
  overflow-x: hidden;
  overflow-y: visible;
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

export const LanguageItem = styled.div`
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
  bottom: -15px; /* Adjust if needed */
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
  z-index: 1000; /* Ensure tooltip is above other elements */
`;