import { useState } from 'react';
import * as S from './Styles';
import { projectsData } from './projectsData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <S.ProjectsSection>
      <h2>Meus Projetos</h2>
      <S.ProjectsGrid>
        {projectsData.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={openModal} 
          />
        ))}
      </S.ProjectsGrid>

      <ProjectModal 
        project={selectedProject} 
        onClose={closeModal} 
      />
    </S.ProjectsSection>
  );
};

export default Projects;