import { FaTimes } from 'react-icons/fa';
import * as S from './Styles';
import { techIcons } from './TechIcons';
import PropTypes from 'prop-types';

const ProjectModal = ({ project, onClose }) => {
  // Retorna null se o projeto não estiver definido
  if (!project) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalCloseIcon onClick={onClose}>
          <FaTimes />
        </S.ModalCloseIcon>
        <div className="modal-video">
          <iframe 
            width="100%" 
            height="315" 
            src={project.videoUrl}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <h3>{project.title}</h3>
        <p>{project.detailedDescription}</p>
        <div className="project-techs" style={{ marginBottom: '1rem' }}>
          {project.technologies.map((tech, index) => (
            <S.TechIcon key={index}>
              {techIcons[tech]}
            </S.TechIcon>
          ))}
        </div>
        <S.ModalButtonsWrapper>
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
            Ver Projeto
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </S.ModalButtonsWrapper>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    videoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    detailedDescription: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;