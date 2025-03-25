import * as S from './Styles';
import { techIcons } from './TechIcons';
import PropTypes from 'prop-types';

const ProjectCard = ({ project, onClick }) => {
  return (
    <S.Card>
      <img
        src={project.imageUrl}
        alt={project.title}
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-techs">
        {project.technologies.map((tech, index) => (
          <S.TechIcon key={index}>
            {techIcons[tech]}
          </S.TechIcon>
        ))}
      </div>
      <button onClick={() => onClick(project)}>Mais</button>
    </S.Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;