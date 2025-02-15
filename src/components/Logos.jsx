import { CarouselContainer, Carousel, LogoItem, Tooltip } from '../styles/Logos';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';

const logos = [
  { icon: <FaReact />, name: 'React', color: '#61DBFB' },
  { icon: <FaJs />, name: 'JavaScript', color: '#F0DB4F' },
  { icon: <FaHtml5 />, name: 'HTML5', color: '#E34C26' },
  { icon: <FaCss3Alt />, name: 'CSS3', color: '#264de4' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#68A063' },
  { icon: <FaPython />, name: 'Python', color: '#306998' },
  { icon: <FaJava />, name: 'Java', color: '#007396' },
];

// Duplicamos os logos para permitir o scroll infinito
const carouselItems = [...logos, ...logos,...logos, ...logos,...logos, ...logos,...logos, ...logos,...logos, ...logos];

const Logos = () => {
  return (
    <CarouselContainer>
      <Carousel>
        {carouselItems.map((logo, index) => (
          <LogoItem key={index} color={logo.color}>
            {logo.icon}
            <Tooltip>{logo.name}</Tooltip>
          </LogoItem>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default Logos;