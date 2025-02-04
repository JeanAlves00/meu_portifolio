import './styles.css';

const About = () => {
  return (
    <section className="about-section" id="sobre">
      <div className="glass-container">
        <h2 className="neon-title">Sobre Mim</h2>
        <div className="about-content">
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
        </div>
      </div>
    </section>
  );
};

export default About;