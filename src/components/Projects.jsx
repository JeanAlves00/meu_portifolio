import { useState } from 'react';
import {
  ProjectsContainer,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ExpandedCard,
  VideoContainer,
  InfoContainer,
  ButtonsContainer,
  ProjectButton,
  CloseButton,
  Overlay
} from '../styles/Projects';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Detailed description of project 1. This is where you can explain the technologies used, challenges faced, and solutions implemented.",
      image: "/path-to-image1.jpg",
      video: "https://www.youtube.com/embed/your-video-id",
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/username/project1"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Real-time weather application using OpenWeather API. Built with React and styled-components.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/username/project2"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://project3.com",
      githubUrl: "https://github.com/username/project3"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with real-time updates.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://project4.com",
      githubUrl: "https://github.com/username/project4"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-responsive fitness tracking application with workout planning and progress monitoring.",
      image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://project5.com",
      githubUrl: "https://github.com/username/project5"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Recipe search and management app with filtering and favoriting capabilities.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://project6.com",
      githubUrl: "https://github.com/username/project6"
    },
    {
      id: 7,
      title: "Chat Application",
      description: "Real-time chat application with WebSocket integration and file sharing.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://project7.com",
      githubUrl: "https://github.com/username/project7"
    },
    {
      id: 8,
      title: "Budget Tracker",
      description: "Personal finance management tool with expense tracking and visualization.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://project8.com",
      githubUrl: "https://github.com/username/project8"
    }
  ];

  const handleExpand = (project) => {
    setExpandedProject(project);
  };

  const handleClose = () => {
    setExpandedProject(null);
  };

  return (
    <ProjectsContainer>
      <h2>My Projects</h2>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectButton onClick={() => handleExpand(project)}>
              Learn More
            </ProjectButton>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {expandedProject && (
        <Overlay onClick={handleClose}>
          <ExpandedCard onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
            <VideoContainer>
              <iframe
                src={expandedProject.video}
                title={expandedProject.title}
                frameBorder="0"
                allowFullScreen
              />
            </VideoContainer>
            <InfoContainer>
              <h3>{expandedProject.title}</h3>
              <ProjectDescription>
                {expandedProject.description}
              </ProjectDescription>
              <ButtonsContainer>
                <ProjectButton as="a" href={expandedProject.liveUrl} target="_blank">
                  Visit Site
                </ProjectButton>
                <ProjectButton as="a" href={expandedProject.githubUrl} target="_blank">
                  View Code
                </ProjectButton>
              </ButtonsContainer>
            </InfoContainer>
          </ExpandedCard>
        </Overlay>
      )}
    </ProjectsContainer>
  );
};

export default Projects;