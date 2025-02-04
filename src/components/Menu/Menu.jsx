import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Styles.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: faHome, text: "Inicio", href: "#home" },
    { icon: faUser, text: "Sobr Min", href: "#about" },
    { icon: faCode, text: "Projetos", href: "#projects" },
    { icon: faEnvelope, text: "Contato", href: "#contact" }
  ];

  return (
    <div className="menu-container">
      <button 
        className={`menu-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger"></span>
      </button>
      
      <nav className={`dropdown-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                <FontAwesomeIcon icon={item.icon} className="menu-icon" />
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;