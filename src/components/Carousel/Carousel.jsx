import { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import * as S from './Styles';
import carouselData from './carouselData';

export default function CarouselComponent() {
  const [position, setPosition] = useState(1);
  const [modalImage, setModalImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef(null);
  const totalItems = carouselData.length;

  const goPrevious = () => setPosition(position === 1 ? totalItems : position - 1);
  const goNext = () => setPosition(position === totalItems ? 1 : position + 1);

  const onMouseDown = (e) => {
    setIsDragging(false);
    dragStartRef.current = e.clientX;
  };

  const onMouseMove = (e) => {
    if (dragStartRef.current !== null) {
      const dx = e.clientX - dragStartRef.current;
      if (Math.abs(dx) > 5) setIsDragging(true);
    }
  };

  const onMouseUp = (e) => {
    if (dragStartRef.current !== null) {
      const dx = e.clientX - dragStartRef.current;
      const threshold = 50;
      if (dx > threshold) goPrevious();
      else if (dx < -threshold) goNext();
    }
    dragStartRef.current = null;
  };

  const openModal = (url) => {
    if (!isDragging) setModalImage(url);
  };

  const closeModal = () => setModalImage(null);

  return (
    <S.Container>
      <S.CarouselTitle>Certificados</S.CarouselTitle>
      <S.Carousel
        $position={position}
        id="carousel"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {carouselData.map((item, index) => (
          <S.Item key={item.src} onClick={() => openModal(item.src)}>
            <img src={item.src} alt={`Slide ${index + 1}`} />
            <S.Caption>{item.caption}</S.Caption>
          </S.Item>
        ))}
        <S.PrevButton onClick={goPrevious}>
          <FaArrowLeft />
        </S.PrevButton>
        <S.NextButton onClick={goNext}>
          <FaArrowRight />
        </S.NextButton>
      </S.Carousel>
      {modalImage && (
        <S.ModalOverlay>
          <S.ModalContainer>
            <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>
            <S.ModalImage src={modalImage} alt="Imagem Ampliada" />
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
}