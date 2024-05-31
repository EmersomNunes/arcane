import { useEffect, useState } from "react";
import { fallDown as Menu } from 'react-burger-menu';
import { Container } from "./styles";
import { FaUserCircle } from "react-icons/fa";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      {isMobile && (
        <Menu
          className="burger-menu"
          isOpen={isOpen}
          width={'100%'}
          right
          onStateChange={({ isOpen }) => setIsOpen(isOpen)}
        >
          <a id="login" className="menu-item" href="/"> <FaUserCircle size={24}/> Login</a>
          <a id="products" className="menu-item" href="/">Produtos</a>
          <a id="promotions" className="menu-item" href="/about">Promoções</a>
          <a id="contact" className="menu-item" href="/contact">Contato</a>
        </Menu>
      )}
    </Container>
  );
}