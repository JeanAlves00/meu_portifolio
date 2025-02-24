import styled, { keyframes } from 'styled-components';


const slideDown = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const HeaderContainer = styled.header`
  background: #0a1931;
  color: white;
  margin: 1rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 2rem);
  top: 0;
  left: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media (max-width: 768px) {
    margin: 0.5rem;
    padding: 0.8rem 1.5rem;
    width: calc(100% - 1rem);
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    margin: 0.3rem;
    padding: 0.6rem 1rem;
    width: calc(100% - 0.6rem);
    border-radius: 15px;
  }

  @media screen and (min-width: 1920px) {
    margin: 1.5rem;
    padding: 1.5rem 3rem;
    width: calc(100% - 3rem);
    border-radius: 40px;
  }

  @media screen and (min-width: 2560px) {
    margin: 2rem;
    padding: 2rem 4rem;
    width: calc(100% - 4rem);
    border-radius: 50px;
  }

  @media screen and (min-width: 3840px) {
    margin: 3rem;
    padding: 2.5rem 5rem;
    width: calc(100% - 6rem);
    border-radius: 60px;
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 2560px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 3840px) {
    font-size: 3rem;
  }
`;

export const DesktopMenu = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1920px) {
    gap: 1.5rem;
  }

  @media screen and (min-width: 2560px) {
    gap: 2rem;
  }

  @media screen and (min-width: 3840px) {
    gap: 2.5rem;
  }
`;

export const MenuLink = styled.a`
  background: #d72638;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #b71c29;
    transform: translateY(-2px);
  }

  @media screen and (min-width: 1920px) {
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 2560px) {
    padding: 1rem 2rem;
    border-radius: 15px;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 3840px) {
    padding: 1.25rem 2.5rem;
    border-radius: 20px;
    font-size: 1.8rem;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuToggleSpan = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: ${props => props.$isOpen ? 'transparent' : 'white'};
  border-radius: 2px;
  transition: transform 0.3s ease-in-out;
  top: 50%;
  transform: translateY(-50%);

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: white;
    border-radius: 2px;
    transition: transform 0.3s ease-in-out;
  }

  &::before {
    top: ${props => props.$isOpen ? '0' : '-8px'};
    transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'none'};
  }

  &::after {
    bottom: ${props => props.$isOpen ? '0' : '-8px'};
    transform: ${props => props.$isOpen ? 'rotate(-45deg)' : 'none'};
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: calc(70px + 0.5rem);
  left: 0.5rem;
  width: calc(100% - 1rem);
  height: auto;
  background: #0a1931;
  margin: 0 auto;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  animation: ${slideDown} 0.3s ease-out;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 480px) {
    top: calc(60px + 0.3rem);
    left: 0.3rem;
    width: calc(100% - 0.6rem);
    padding: 0.8rem;
    border-radius: 15px;
  }
`;

export const MobileMenuLink = styled.a`
  background: #d72638;
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #b71c29;
    transform: translateX(10px);
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 1rem;
  }
`;

