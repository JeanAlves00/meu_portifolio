import styled from 'styled-components';

export const HeroSection = styled.section`
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

export const HeroContent = styled.div`
  max-width: 1400px;
  width: 100%;
  text-align: left;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 10px;
  }

  @media (min-width: 2560px) {
    max-width: 2000px;
    padding: 3rem;
    border-radius: 30px;
  }
`;

export const HeroText = styled.div`
  color: #ffffff;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    
    .highlight {
      color: #d72638;
      display: block;
      margin-top: 0.5rem;
      text-shadow: 0 0 10px rgba(215, 38, 56, 0.3);
    }

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

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #d72638;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }

    @media (min-width: 2560px) {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #ffffff;
    line-height: 1.6;
    opacity: 0.9;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }

    @media (min-width: 2560px) {
      font-size: 1.8rem;
    }
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }

  a {
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

    &.secondary-btn {
      background: transparent;
      border: 2px solid #d72638;
      color: #d72638;

      &:hover {
        background: #d72638;
        color: white;
      }
    }

    &.whatsapp-btn {
      background: #25D366;

      &:hover {
        background: #128C7E;
      }
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
  }
`;