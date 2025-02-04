import './Styles.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

const skillsData = [
  { icon: <FaHtml5 className="html-icon" />, name: 'HTML5', color: '#E34F26' },
  { icon: <FaCss3Alt className="css-icon" />, name: 'CSS3', color: '#1572B6' },
  { icon: <DiJavascript1 className="js-icon" />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiTypescript className="ts-icon" />, name: 'TypeScript', color: '#3178C6' },
  { icon: <FaReact className="react-icon" />, name: 'React', color: '#61DAFB' },
  { icon: <FaNodeJs className="node-icon" />, name: 'Node.js', color: '#339933' },
  { icon: <FaGitAlt className="git-icon" />, name: 'Git', color: '#F05032' }
  
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-carousel">
        {[...skillsData, ...skillsData].map((skill, index) => (
          <div 
            key={index} 
            className="skill-item"
            style={{'--skill-color': skill.color}}
          >
            <span className="skill-name">{skill.name}</span>
            <div className="skill-icon">{skill.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;