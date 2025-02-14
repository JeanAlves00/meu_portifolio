import { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
    Container,
    Carousel,
    Item,
    Caption,
    PrevButton,
    NextButton,
    ModalOverlay,
    ModalImage,
    ModalContainer,
    CloseButton
} from '../styles/Carousel';

// Random image URLs
const imageUrls = [
    'https://picsum.photos/id/1018/300/400',
    'https://picsum.photos/id/1015/300/400',
    'https://picsum.photos/id/1019/300/400',
    'https://picsum.photos/id/1020/300/400',
    'https://picsum.photos/id/1021/300/400'
];

export default function CarouselComponent() {
    const [position, setPosition] = useState(1);
    const totalItems = imageUrls.length;
    const [modalImage, setModalImage] = useState(null);
    const dragStartRef = useRef(null);

    const goPrevious = () => {
        setPosition(position === 1 ? totalItems : position - 1);
    };

    const goNext = () => {
        setPosition(position === totalItems ? 1 : position + 1);
    };

    const onMouseDown = (e) => {
        dragStartRef.current = e.clientX;
    };

    const onMouseUp = (e) => {
        if (dragStartRef.current !== null) {
            const dx = e.clientX - dragStartRef.current;
            const threshold = 50;
            if (dx > threshold) {
                goPrevious();
            } else if (dx < -threshold) {
                goNext();
            }
        }
        dragStartRef.current = null;
    };

    const openModal = (url) => {
        setModalImage(url);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <Container>
            <Carousel
                $position={position}
                id="carousel"
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
            >
                {imageUrls.map((url, index) => (
                    <Item key={index} onClick={() => openModal(url)}>
                        <img src={url} alt={`Slide ${index + 1}`} />
                        <Caption>Foto {index + 1}</Caption>
                    </Item>
                ))}
                <PrevButton onClick={goPrevious}>
                    <FaArrowLeft />
                </PrevButton>
                <NextButton onClick={goNext}>
                    <FaArrowRight />
                </NextButton>
            </Carousel>
            {modalImage && (
                <ModalOverlay>
                    <ModalContainer>
                        <CloseButton onClick={closeModal}>&times;</CloseButton>
                        <ModalImage src={modalImage} alt="Imagem Ampliada" />
                    </ModalContainer>
                </ModalOverlay>
            )}
        </Container>
    );
}