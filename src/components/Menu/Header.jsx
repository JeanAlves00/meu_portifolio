import { useState, useEffect } from "react";
import "./Styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = ["Início", "Sobre", "Projetos", "Contato"];

  return (
    <header>
      <h1 className="logo">&lt;JEAN /&gt;</h1>
      
      <nav className="desktop-menu">
        {menuItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        <span className={menuOpen ? 'close' : 'open'}></span>
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;