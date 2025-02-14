import styled from 'styled-components';

export const AboutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #0a1931 0%, #162b4d 100%);
  margin: 1rem;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 0.5rem;
    border-radius: 20px;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    margin: 0.3rem;
    padding: 1rem;
    border-radius: 15px;
    min-height: calc(100vh - 60px);
  }

  @media screen and (min-width: 2560px) {
    margin: 2rem;
    padding: 4rem;
    border-radius: 50px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  gap: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 10px;
  }

  @media (min-width: 2560px) {
    max-width: 2000px;
    gap: 4rem;
    padding: 3rem;
    border-radius: 30px;
  }
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(215, 38, 56, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 2560px) {
    width: 450px;
    height: 450px;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    color: #d72638;
    text-shadow: 0 0 10px rgba(215, 38, 56, 0.3);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }

    @media (min-width: 2560px) {
      font-size: 5rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.9;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }

    @media (min-width: 2560px) {
      font-size: 1.75rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 2560px) {
    gap: 2rem;
  }
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  background: #d72638;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 160px;

  &:hover {
    background: #b71c29;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(215, 38, 56, 0.3);
  }

  .icon {
    margin-right: 0.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.7rem 1rem;
  }

  @media (min-width: 2560px) {
    padding: 1.2rem 2.5rem;
    font-size: 1.4rem;
    border-radius: 12px;
  }
`;