import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #0a1931 0%, #162b4d 100%);
  margin: 1rem;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    margin: 0.5rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    margin: 0.3rem;
    border-radius: 15px;
  }
`;

export const FooterContent = styled.div`
  text-align: center;
  color: #fff;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;