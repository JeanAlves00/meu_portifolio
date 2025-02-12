import { AboutContainer, AboutContent, ProfileImage, AboutText, ButtonContainer, Button } from '../styles/About';
import { FaEye, FaDownload } from 'react-icons/fa';
import foto from '../images/foto.png';

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <ProfileImage src={foto} alt="Profile" />
        <AboutText>
          <h1>Sobre Mim</h1>
          <p>
            Olá! Eu sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes.
            Com experiência em diversas tecnologias do ecossistema web moderno, busco constantemente
            aprender e evoluir. Meu objetivo é desenvolver aplicações que não apenas funcionem
            perfeitamente, mas também proporcionem uma experiência excepcional aos usuários.
          </p>
          <ButtonContainer>
            <Button href="/curriculo.pdf" target="_blank">
              <FaEye className="icon" /> Ver Currículo
            </Button>
            <Button href="/curriculo.pdf" download>
              <FaDownload className="icon" /> Baixar Currículo
            </Button>
          </ButtonContainer>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;