import * as S from './Styles';
import { FaEye, FaDownload } from 'react-icons/fa';
import aboutData from './aboutData';

const About = () => {
  return (
    <S.AboutContainer>
      <S.AboutContent>
        <S.ProfileImage src={aboutData.foto} alt="Profile" />
        <S.AboutText>
          <h1>{aboutData.name}</h1>
          <p>{aboutData.description}</p>
          <S.ButtonContainer>
            <S.Button href={aboutData.curriculumUrl} target="_blank">
              <FaEye className="icon" /> Ver Currículo
            </S.Button>
            <S.Button href={aboutData.curriculumUrl} download>
              <FaDownload className="icon" /> Baixar Currículo
            </S.Button>
          </S.ButtonContainer>
        </S.AboutText>
      </S.AboutContent>
    </S.AboutContainer>
  );
};

export default About;