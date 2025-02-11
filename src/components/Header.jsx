import { useState, useEffect } from "react";
import {
  HeaderContainer,
  Logo,
  DesktopMenu,
  MenuLink,
  MenuToggle,
  MenuToggleSpan,
  MobileMenu,
  MobileMenuLink
} from "../styles/Header";

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
    <HeaderContainer>
      <Logo>&lt;JEAN /&gt;</Logo>
      
      <DesktopMenu>
        {menuItems.map((item) => (
          <MenuLink key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </MenuLink>
        ))}
      </DesktopMenu>

      <MenuToggle onClick={toggleMenu}>
        <MenuToggleSpan $isOpen={menuOpen} />
      </MenuToggle>

      {menuOpen && (
        <MobileMenu>
          {menuItems.map((item) => (
            <MobileMenuLink
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </MobileMenuLink>
          ))}
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;