import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f6f9fc 0%, #e9eff5 100%);

  @media (min-width: 2560px) {
    padding: 10rem 4rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 2rem;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  @media (min-width: 2560px) {
    gap: 4rem;
  }
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  color: #333;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;

    @media (min-width: 2560px) {
      font-size: 5rem;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;

    @media (min-width: 2560px) {
      font-size: 1.75rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

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
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  .icon {
    margin-right: 0.5rem;
  }

  @media (min-width: 2560px) {
    padding: 1rem 1.75rem;
    font-size: 1.25rem;
    .icon {
      margin-right: 0.75rem;
    }
  }
`;