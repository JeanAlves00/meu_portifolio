import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { 
  ProjectsSection, 
  ProjectsGrid, 
  Card, 
  ModalOverlay, 
  ModalContent, 
  ModalCloseIcon, 
  ModalButtonsWrapper 
} from '../styles/Projects';

const projectsData = [
  { 
    id: 1, 
    title: 'Project 1', 
    description: 'Pequena descrição do projeto 1.', 
    detailedDescription: 'Descrição detalhada do projeto 1.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    projectUrl: 'https://project1.com',
    githubUrl: 'https://github.com/username/project1'
  },
  { 
    id: 2, 
    title: 'Project 2', 
    description: 'Pequena descrição do projeto 2.', 
    detailedDescription: 'Descrição detalhada do projeto 2.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    projectUrl: 'https://project2.com',
    githubUrl: 'https://github.com/username/project2'
  },
  { 
    id: 3, 
    title: 'Project 3', 
    description: 'Pequena descrição do projeto 3.', 
    detailedDescription: 'Descrição detalhada do projeto 3.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    projectUrl: 'https://project3.com',
    githubUrl: 'https://github.com/username/project3'
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Pequena descrição do projeto 4.',
    detailedDescription: 'Descrição detalhada do projeto 4.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    projectUrl: 'https://project4.com',
    githubUrl: 'https://github.com/username/project3'
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Pequena descrição do projeto 5.',
    detailedDescription: 'Descrição detalhada do projeto 5.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    projectUrl: 'https://project5.com',
    githubUrl: 'https://github.com/username/project3'
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'Pequena descrição do projeto 6.',
    detailedDescription: 'Descrição detalhada do projeto 6.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    projectUrl: 'https://project6.com',
    githubUrl: 'https://github.com/username/project3'
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