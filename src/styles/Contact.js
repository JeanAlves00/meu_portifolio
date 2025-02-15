import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #0a1931 0%, #162b4d 100%);
  margin: 1rem;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 0.5rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
    margin: 0.3rem;
    border-radius: 15px;
  }
`;

export const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px rgba(214, 38, 56, 0.5);
  }
`;

export const Textarea = styled.textarea`
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  resize: vertical;

  &:focus {
    box-shadow: 0 0 5px rgba(214, 38, 56, 0.5);
  }
`;

export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: #d72638;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #b71c29;
  }
`;