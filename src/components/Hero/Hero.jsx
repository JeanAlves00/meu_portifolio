import './Styles.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Olá, Me chamo{' '}
            <TypeAnimation
              sequence={[
                'Jean Pablo Alves Gonçalves',
                2000,
                '',
                500,
              ]}
              speed={50}
              repeat={Infinity}
              className="highlight"
            />
          </h1>
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
      </div>
    </section>
  );
};

export default Hero;