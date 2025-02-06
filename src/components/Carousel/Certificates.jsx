import { useState } from 'react';
import './Styles.css';

const certificates = [
  {
    id: 1,
    title: "React Development",
    image: "https://github.com/JeanAlves00/meu_portifolio/blob/main/src/images/certificate1.png?raw=true",
    issuer: "Organization 1"
  },
  {
    id: 2,
    title: "Web Development",
    image: "https://github.com/JeanAlves00/meu_portifolio/blob/main/src/images/certificate2.png?raw=true",
    issuer: "Organization 2"
  },
  {
    id: 3,
    title: "Web Development",
    image: "https://github.com/JeanAlves00/meu_portifolio/blob/main/src/images/certificate3.png?raw=true",
    issuer: "Organization 2"
  },
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>❮</button>
      <div className="carousel-content">
        {certificates.map((certificate, index) => (
          <div
            key={certificate.id}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={certificate.image} alt={certificate.title} />
            <div className="certificate-info">
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>❯</button>
      <div className="carousel-dots">
        {certificates.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;