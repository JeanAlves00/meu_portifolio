import { CarouselContainer, Carousel, LanguageItem, Tooltip } from '../styles/Linguages';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';

const languages = [
  { icon: <FaReact />, name: 'React', color: '#61DBFB' },
  { icon: <FaJs />, name: 'JavaScript', color: '#F0DB4F' },
  { icon: <FaHtml5 />, name: 'HTML5', color: '#E34C26' },
  { icon: <FaCss3Alt />, name: 'CSS3', color: '#264de4' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#68A063' },
  { icon: <FaPython />, name: 'Python', color: '#306998' },
  { icon: <FaJava />, name: 'Java', color: '#007396' },
];

const Linguages = () => {
  // Duplicate the items for a smooth infinite scroll effect
  const carouselItems = [...languages, ...languages, ...languages, ...languages, ...languages];

  return (
    <CarouselContainer>
      <Carousel>
        {carouselItems.map((language, index) => (
          <LanguageItem key={index} color={language.color}>
            {language.icon}
            <Tooltip>{language.name}</Tooltip>
          </LanguageItem>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default Linguages;