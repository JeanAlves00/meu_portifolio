import './styles.css';

const About = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/path-to-your-cv.pdf";
    window.open(cvUrl, '_blank');
  };

  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="neon-title">Sobre Mim</h2>
        <p className="highlight-text">
          Desenvolvedor Full Stack & Entusiasta de Tecnologia
        </p>
        <div className="about-description">
          <p>
            Sou um desenvolvedor apaixonado por transformar ideias em realidade através do código.
            Especializado em criar experiências digitais únicas e intuitivas.
          </p>
          <p>
            Atualmente focado em desenvolvimento web moderno, arquitetura de software
            e melhores práticas de programação.
          </p>
        </div>
        <div className="cv-buttons">
          <button className="cv-button view" onClick={() => window.open('/cv-preview', '_blank')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
            </svg>
            Ver Currículo
          </button>
          <button className="cv-button download" onClick={handleDownloadCV}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4.75a.75.75 0 00-1.5 0v8.614L6.295 9.157a.75.75 0 10-1.09 1.032l5.5 5.5a.75.75 0 001.09 0l5.5-5.5a.75.75 0 00-1.09-1.032L12 13.364V4.75z" />
              <path d="M3.5 17.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 23h14.5A2.75 2.75 0 0022 20.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            Download CV
          </button>
        </div>
      </div>
      <div className="about-image">
        <img src="https://avatars.githubusercontent.com/u/154983968?v=4" alt="Profile" />
      </div>
    </section>
  );
};

export default About;