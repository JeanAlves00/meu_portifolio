import './Styles.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Olá, Me chamo <span className="highlight">Jean Pablo Alves Gonçalves</span></h1>
          <h2>Full Stack Developer</h2>
          <p>Vamos criar uma experiência digital para fazer a diferença</p>
          <div className="cta-buttons">
            <a href="https://github.com/JeanAlves00" className="primary-btn">
              <FaGithub className="icon" /> Github
            </a>
            <a href="https://www.linkedin.com/in/jean-pablo-alves-gon%C3%A7alves-a82477212/" className="secondary-btn">
              <FaLinkedin className="icon" /> Linkedin
            </a>
            <a href="tel:+5569992640368" className="primary-btn whatsapp-btn">
              <FaWhatsapp className="icon" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://avatars.githubusercontent.com/u/154983968?s=400&u=dadf2cb45e2f42f0a946d7a2888fd457b6d8656a&v=4" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;