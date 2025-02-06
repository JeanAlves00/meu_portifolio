import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const UpButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button className="up-button" onClick={scrollToTop} aria-label="Scroll to top">
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default UpButton;