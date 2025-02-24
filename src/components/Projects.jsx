import { useState } from 'react';
import { FaTimes, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { 
  ProjectsSection, 
  ProjectsGrid, 
  Card, 
  ModalOverlay, 
  ModalContent, 
  ModalCloseIcon, 
  ModalButtonsWrapper,
  TechIcon    // importado novo componente estilizado
} from '../styles/Projects';

// Mapeamento dos ícones das tecnologias
const techIcons = {
  React: <FaReact color="#61DBFB" />,
  JavaScript: <FaJs color="#F0DB4F" />,
  HTML5: <FaHtml5 color="#E34C26" />,
  CSS3: <FaCss3Alt color="#264de4" />,
  NodeJS: <FaNodeJs color="#68A063" />,
  Python: <FaPython color="#306998" />,
  Java: <FaJava color="#007396" />,
};

const projectsData = [
  { 
    id: 1, 
    title: 'Project 1', 
    description: 'Pequena descrição do projeto 1.', 
    detailedDescription: 'Descrição detalhada do projeto 1.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    projectUrl: 'https://project1.com',
    githubUrl: 'https://github.com/username/project1',
    technologies: ['React', 'JavaScript', 'CSS3']
  },
  { 
    id: 2, 
    title: 'Clone Disney', 
    description: 'Um clone da pagina Inicial da Disney.', 
    detailedDescription: 'Descrição detalhada do projeto 2.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    projectUrl: 'https://project2.com',
    githubUrl: 'https://github.com/username/project2',
    technologies: ['React', 'NodeJS', 'JavaScript']
  },
  { 
    id: 3, 
    title: 'Project 3', 
    description: 'Pequena descrição do projeto 3.', 
    detailedDescription: 'Descrição detalhada do projeto 3.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    projectUrl: 'https://project3.com',
    githubUrl: 'https://github.com/username/project3',
    technologies: ['React', 'Python']
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Pequena descrição do projeto 4.',
    detailedDescription: 'Descrição detalhada do projeto 4.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    projectUrl: 'https://project4.com',
    githubUrl: 'https://github.com/username/project4',
    technologies: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Pequena descrição do projeto 5.',
    detailedDescription: 'Descrição detalhada do projeto 5.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    projectUrl: 'https://project5.com',
    githubUrl: 'https://github.com/username/project5',
    technologies: ['Java', 'React']
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'Pequena descrição do projeto 6.',
    detailedDescription: 'Descrição detalhada do projeto 6.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    projectUrl: 'https://project6.com',
    githubUrl: 'https://github.com/username/project6',
    technologies: ['React', 'JavaScript', 'NodeJS']
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectsSection>
      <h2>Meus Projetos</h2>
      <ProjectsGrid>
        {projectsData.map(project => (
          <Card key={project.id}>
            <img
              src={`https://picsum.photos/400/300?random=${project.id}`}
              alt={project.title}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-techs">
              {project.technologies.map((tech, index) => (
                <TechIcon key={index}>
                  {techIcons[tech]}
                </TechIcon>
              ))}
            </div>
            <button onClick={() => openModal(project)}>Mais</button>
          </Card>
        ))}
      </ProjectsGrid>

      {selectedProject && (
        <ModalOverlay>
          <ModalContent>
            <ModalCloseIcon onClick={closeModal}>
              <FaTimes />
            </ModalCloseIcon>
            <div className="modal-video">
              <iframe 
                width="100%" 
                height="315" 
                src={selectedProject.videoUrl}
                title={selectedProject.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.detailedDescription}</p>
            <div className="project-techs" style={{ marginBottom: '1rem' }}>
              {selectedProject.technologies.map((tech, index) => (
                <TechIcon key={index}>
                  {techIcons[tech]}
                </TechIcon>
              ))}
            </div>
            <ModalButtonsWrapper>
              <a href={selectedProject.projectUrl} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </ModalButtonsWrapper>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProjectsSection>
  );
};

export default Projects;