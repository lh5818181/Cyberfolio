import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Navigation,
  NavList,
  NavItem,
  NavLink,
  CTAButton,
  MobileMenuButton,
  MobileMenuOverlay,
  MobileMenuContainer,
  MobileNavList,
  MobileNavLink,
  MobileMenuCloseButton,
} from './styles';

/**
 * Interface para itens de navegação
 */
interface NavItem {
  label: string;
  href: string;
}

/**
 * Props do componente Header
 */
interface HeaderProps {
  className?: string;
}

/**
 * Componente Header
 *
 * Cabeçalho fixo do site com:
 * - Logo animado
 * - Navegação principal
 * - Botão CTA
 * - Menu mobile responsivo
 * - Detecção de seção ativa
 * - Scroll detection para efeitos
 */
const Header: React.FC<HeaderProps> = ({ className }) => {
  // Estado para controlar o menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Estado para detectar scroll
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Estado para seção ativa
  const [activeSection, setActiveSection] = useState<string>('home');

  /**
   * Itens de navegação
   */
  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ];

  /**
   * Effect para detectar scroll e alterar estilo do header
   */
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Effect para detectar seção ativa baseada no scroll
   */
  useEffect(() => {
    const handleScrollSpy = (): void => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  /**
   * Função para navegar suavemente para uma seção
   * @param href - Href do link (âncora)
   */
  const handleNavigation = (href: string): void => {
    const targetId = href.substring(1); // Remove o #
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Fecha o menu mobile se estiver aberto
    }
  };

  /**
   * Função para navegar para a seção de contato
   */
  const handleCTAClick = (): void => {
    handleNavigation('#contact');
  };

  /**
   * Função para alternar o menu mobile
   */
  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Função para fechar o menu mobile
   */
  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  /**
   * Variantes de animação para o logo
   */
  const logoVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  };

  /**
   * Variantes de animação para itens de navegação
   */
  const navItemVariants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    }),
    hover: {
      y: -2,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  };

  /**
   * Variantes de animação para o menu mobile
   */
  const mobileMenuVariants: Variants = {
    initial: { x: '100%' },
    animate: {
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    exit: {
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };

  /**
   * Variantes de animação para overlay do menu mobile
   */
  const overlayVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <HeaderContainer
      className={className}
      style={{
        background: isScrolled
          ? 'rgba(10, 10, 42, 0.95)'
          : 'rgba(10, 10, 42, 0.9)',
        boxShadow: isScrolled ? '0 8px 32px rgba(0, 255, 255, 0.1)' : 'none',
      }}
    >
      <HeaderContent>
        {/* Logo */}
        <Logo
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => handleNavigation('#home')}
        >
          LH.dev
        </Logo>

        {/* Navegação Desktop */}
        <Navigation>
          <NavList>
            {navItems.map((item, index) => (
              <NavItem key={item.href}>
                <NavLink
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={index}
                  $active={activeSection === item.href.substring(1)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  href={item.href}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>

          {/* Botão CTA */}
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCTAClick}
          >
            Fale Comigo
          </CTAButton>

          {/* Botão Menu Mobile */}
          <MobileMenuButton onClick={toggleMobileMenu}>
            <Menu size={24} />
          </MobileMenuButton>
        </Navigation>
      </HeaderContent>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <MobileMenuOverlay
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={closeMobileMenu}
            />

            {/* Container do Menu */}
            <MobileMenuContainer
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Botão Fechar */}
              <MobileMenuCloseButton onClick={closeMobileMenu}>
                <X size={24} />
              </MobileMenuCloseButton>

              {/* Lista de Navegação Mobile */}
              <MobileNavList>
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <MobileNavLink
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1 },
                      }}
                      $active={activeSection === item.href.substring(1)}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                      href={item.href}
                    >
                      {item.label}
                    </MobileNavLink>
                  </li>
                ))}

                {/* CTA Mobile */}
                <li>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: navItems.length * 0.1 },
                    }}
                  >
                    <CTAButton
                      onClick={handleCTAClick}
                      style={{ width: '100%', marginTop: '1rem' }}
                    >
                      Fale Comigo
                    </CTAButton>
                  </motion.div>
                </li>
              </MobileNavList>
            </MobileMenuContainer>
          </>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
