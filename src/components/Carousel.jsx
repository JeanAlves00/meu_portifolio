import { useState } from 'react';
import {
  CarouselContainer,
  CarouselWrapper,
  CarouselSlide,
  PrevButton,
  NextButton,
  DotsContainer,
  Dot,
} from '../styles/Carousel';
import certificate1 from '../images/certificate1.png';
import certificate2 from '../images/certificate2.png';
import certificate3 from '../images/certificate3.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample certificates with placeholder images
  const certificates = [
    {
      image: certificate1,
      title: 'Certificate 1'
    },
    {
      image: certificate2,
      title: 'Certificate 2'
    },
    {
      image: certificate3,
      title: 'Certificate 3'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContainer>
      <CarouselWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {certificates.map((certificate, index) => (
          <CarouselSlide key={index}>
            <img src={certificate.image} alt={certificate.title} />
          </CarouselSlide>
        ))}
      </CarouselWrapper>
      <PrevButton onClick={prevSlide} aria-label="Previous slide">
        <span>‹</span>
      </PrevButton>
      <NextButton onClick={nextSlide} aria-label="Next slide">
        <span>›</span>
      </NextButton>
      <DotsContainer>
        {certificates.map((_, index) => (
          <Dot
            key={index}
            active={currentIndex === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;