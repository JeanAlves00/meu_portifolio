import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ProjectsContainer = styled.section`
  max-width: 1400px;
  margin: 20px auto;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2.8rem;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  @media (max-width: 1440px) {
    padding: 35px 15px;
    h2 { font-size: 2.6rem; }
  }

  @media (max-width: 1024px) {
    padding: 30px 15px;
    h2 { font-size: 2.4rem; }
  }

  @media (max-width: 768px) {
    padding: 25px 10px;
    h2 { 
      font-size: 2rem;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 480px) {
    padding: 20px 8px;
    h2 { 
      font-size: 1.8rem;
      margin-bottom: 25px;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 1024px) {
    gap: 25px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    padding: 8px;
  }
`;

export const ProjectCard = styled.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 480px) {
    border-radius: 10px;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 150px;
    border-radius: 10px 10px 0 0;
  }
`;

export const ProjectTitle = styled.h3`
  padding: 15px;
  margin: 0;
  font-size: 1.4rem;
  text-align: center;
  color: #222;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 12px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 10px;
  }
`;

export const CardText = styled.p`
  padding: 0 15px;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0 12px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0 10px;
    margin-bottom: 10px;
  }
`;

export const ProjectButton = styled.button`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  box-shadow: 0 6px 20px rgba(106, 17, 203, 0.3);
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto 15px;

  &:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(106, 17, 203, 0.4);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.85rem;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.4s ease;
`;

export const ExpandedCard = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 90%;
  max-width: 800px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 20px;
  gap: 20px;
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: 968px) {
    height: 90vh;
    padding: 15px;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  iframe {
    width: 100%;
    height: 100%;
    max-width: 640px;
    max-height: 360px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 968px) {
    height: 40%;
    padding: 10px;
  }
`;

export const InfoContainer = styled.div`
  height: 55%;
  padding: 20px;
  overflow-y: auto;

  h3 {
    margin-top: 0;
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #333;
  }

  @media (max-width: 968px) {
    height: 60%;
    padding: 15px;
  }
`;

export const ProjectDescription = styled.p`
  line-height: 1.6;
  margin: 20px 0;
  color: #555;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 20px;
  }
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
    background: rgba(255, 255, 255, 1);
    transform: rotate(90deg);
    color: #000;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 20px;
    top: 10px;
    right: 10px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
    top: 8px;
    right: 8px;
  }
`;