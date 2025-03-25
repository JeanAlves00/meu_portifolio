import { useState, useEffect } from "react";
import * as S from "./Styles";

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
    <S.HeaderContainer>
      <S.Logo>&lt;JEAN /&gt;</S.Logo>
      
      <S.DesktopMenu>
        {menuItems.map((item) => (
          <S.MenuLink key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </S.MenuLink>
        ))}
      </S.DesktopMenu>

      <S.MenuToggle onClick={toggleMenu}>
        <S.MenuToggleSpan $isOpen={menuOpen} />
      </S.MenuToggle>

      {menuOpen && (
        <S.MobileMenu>
          {menuItems.map((item) => (
            <S.MobileMenuLink
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </S.MobileMenuLink>
          ))}
        </S.MobileMenu>
      )}
    </S.HeaderContainer>
  );
};

export default Header;