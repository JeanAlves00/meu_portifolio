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
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" />
            </svg>
            Baixar Currículo
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;