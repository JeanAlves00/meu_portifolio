import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-out;
`;

export const CarouselSlide = styled.div`
  min-width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed; /* Efeito parallax */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  /* Personalize as imagens com base na linha ou utilize props para definir a imagem */
  &:nth-child(odd) {
    background-image: url('/path/to/your/image1.jpg');
  }
  
  &:nth-child(even) {
    background-image: url('/path/to/your/image2.jpg');
  }
`

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  color: #fff;
  
  ${props => props.direction === 'left' && `
    left: 20px;
  `}
  
  ${props => props.direction === 'right' && `
    right: 20px;
  `}
`;