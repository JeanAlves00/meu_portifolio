import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding: 2rem;
  background: linear-gradient(135deg, #0a1931 0%, #162b4d 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    color: #ffffff;
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

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

  @media screen and (min-width: 1920px) {
    margin: 1.5rem;
    padding: 3rem;
    border-radius: 40px;
  }

  @media screen and (min-width: 2560px) {
    margin: 2rem;
    padding: 4rem;
    border-radius: 50px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: inherit;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  button {
    margin-top: 1rem;
    background: #d72638;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
    font-weight: bold;
  }

  button:hover {
    background: #b71c29;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    border-radius: 15px;
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    border-radius: 10px;
    padding: 1rem;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #0a1931;
  padding: 2rem;
  border-radius: 20px;
  width: 90%;
  max-width: 800px;
  color: #fff;
  text-align: center;
  position: relative;

  iframe {
    border: none;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }
`;

export const ModalCloseIcon = styled.div`
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

export const ModalButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    background: #d72638;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background: #b71c29;
      transform: translateY(-2px);
    }
  }
`;

export const TechIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 2rem;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.2);
    filter: brightness(1.2);
  }
`;