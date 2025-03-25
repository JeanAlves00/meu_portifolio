import * as S from './Styles';
import { FaEye, FaDownload } from 'react-icons/fa';
import foto from '../../images/foto.png';

const About = () => {
  return (
    <S.AboutContainer>
      <S.AboutContent>
        <S.ProfileImage src={foto} alt="Profile" />
        <S.AboutText>
          <h1>Sobre Mim</h1>
          <p>
            Olá! Eu sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes.
            Com experiência em diversas tecnologias do ecossistema web moderno, busco constantemente
            aprender e evoluir. Meu objetivo é desenvolver aplicações que não apenas funcionem
            perfeitamente, mas também proporcionem uma experiência excepcional aos usuários.
          </p>
          <S.ButtonContainer>
            <S.Button href="/curriculo.pdf" target="_blank">
              <FaEye className="icon" /> Ver Currículo
            </S.Button>
            <S.Button href="/curriculo.pdf" download>
              <FaDownload className="icon" /> Baixar Currículo
            </S.Button>
          </S.ButtonContainer>
        </S.AboutText>
      </S.AboutContent>
    </S.AboutContainer>
  );
};

export default About;