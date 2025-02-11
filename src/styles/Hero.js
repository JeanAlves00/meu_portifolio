import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: calc(100vh - 60px);
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 2rem;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    padding: 3rem;
  }

  @media (min-width: 1201px) and (max-width: 1920px) {
    padding: 4rem;
  }

  @media (min-width: 2560px) {
    padding: 6rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 1400px;
  width: 100%;
  text-align: left;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (min-width: 2560px) {
    max-width: 2000px;
    padding: 0 2rem;
  }
`;

export const HeroText = styled.div`
  color: #ffffff;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
    text-align: left;
    
    .highlight {
      color: #00ff7f;
      display: block;
      margin-top: 0.5rem;
      text-shadow: 0 0 10px rgba(0, 255, 127, 0.3);
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }

    @media (min-width: 481px) and (max-width: 768px) {
      font-size: 2.2rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1025px) {
      font-size: 3rem;
    }

    @media (min-width: 2560px) {
      font-size: 5rem;
    }
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #00ff7f;
    font-weight: 600;
    text-align: right;

    @media (max-width: 480px) {
      font-size: 1.5rem;
      text-align: left;
    }

    @media (min-width: 481px) and (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 2rem;
    }

    @media (min-width: 1025px) {
      font-size: 2.5rem;
    }

    @media (min-width: 2560px) {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #e0e0e0;
    line-height: 1.6;
    text-align: left;

    @media (max-width: 480px) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }

    @media (min-width: 481px) and (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (min-width: 769px) {
      font-size: 1.4rem;
    }

    @media (min-width: 2560px) {
      font-size: 2rem;
    }
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }

  a {
    min-width: 160px;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 480px) {
      width: 100%;
      min-width: unset;
      padding: 0.8rem 1rem;
    }

    @media (min-width: 481px) and (max-width: 768px) {
      min-width: 180px;
      padding: 0.9rem 1.8rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      min-width: 190px;
      padding: 1rem 2rem;
      font-size: 1.1rem;
    }

    @media (min-width: 1025px) {
      min-width: 200px;
    }

    @media (min-width: 2560px) {
      min-width: 300px;
      padding: 1.5rem 3rem;
      font-size: 1.6rem;
      border-radius: 12px;
    }

    .icon {
      font-size: 1.1rem;

      @media (max-width: 480px) {
        font-size: 1rem;
      }

      @media (min-width: 2560px) {
        font-size: 2rem;
      }
    }

    // Button styles remain the same but are moved here
    &.primary-btn {
      background: linear-gradient(135deg, #00ff7f 0%, #00cc66 100%);
      color: #1a1a1a;

      &:hover {
        background: linear-gradient(135deg, #00cc66 0%, #00b359 100%);
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 204, 102, 0.2);
      }
    }

    &.secondary-btn {
      background: transparent;
      border: 2px solid #00ff7f;
      color: #00ff7f;

      &:hover {
        background: #00ff7f;
        color: #1a1a1a;
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 255, 127, 0.2);
      }
    }

    &.whatsapp-btn {
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      color: #ffffff;

      &:hover {
        background: linear-gradient(135deg, #128C7E 0%, #075E54 100%);
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(37, 211, 102, 0.2);
      }
    }
  }
`;
