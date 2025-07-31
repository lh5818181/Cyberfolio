import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Container principal do header
 * - Posicionamento fixo no topo
 * - Background com efeito glass
 * - Z-index alto para ficar acima de outros elementos
 */
export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 42, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--cosmic-dark-lilac);
  z-index: 1000;
  transition: all var(--cosmic-transition-medium);
`;

/**
 * Container do conteúdo do header
 * - Layout flexbox horizontal
 * - Alinhamento entre logo e navegação
 * - Padding responsivo
 */
export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

/**
 * Logo do header
 * - Tipografia destacada
 * - Efeito neon sutil
 * - Hover effects
 */
export const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--cosmic-cyan-neon);
  text-shadow: var(--cosmic-shadow-neon);
  cursor: pointer;
  user-select: none;

  &:hover {
    text-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
  }
`;

/**
 * Container da navegação
 * - Layout flexbox horizontal
 * - Espaçamento entre links
 * - Responsividade para mobile
 */
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

/**
 * Lista de navegação
 * - Remove estilos padrão de lista
 * - Layout flexbox horizontal
 */
export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

/**
 * Item da lista de navegação
 * - Remove estilos padrão
 */
export const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

/**
 * Link de navegação
 * - Estilo clean com hover effects
 * - Indicador de seção ativa
 * - Transições suaves
 */
export const NavLink = styled(motion.a)<{ $active?: boolean }>`
  color: ${(props) =>
    props.$active ? 'var(--cosmic-cyan-neon)' : 'var(--cosmic-light-gray)'};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  transition: all var(--cosmic-transition-medium);

  ${(props) =>
    props.$active &&
    `
    background: rgba(0, 255, 255, 0.1);
    text-shadow: var(--cosmic-shadow-neon);
  `}

  &:hover {
    color: var(--cosmic-cyan-neon);
    background: rgba(0, 255, 255, 0.1);
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: ${(props) => (props.$active ? '100%' : '0')};
    height: 2px;
    background: var(--cosmic-cyan-neon);
    transform: translateX(-50%);
    transition: width var(--cosmic-transition-medium);
    border-radius: 1px;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

/**
 * Botão CTA do header
 * - Estilo destacado com bordas neon
 * - Hover effects com transformações
 * - Responsividade
 */
export const CTAButton = styled(motion.button)`
  background: transparent;
  border: 2px solid var(--cosmic-magenta-neon);
  color: var(--cosmic-magenta-neon);
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all var(--cosmic-transition-medium);
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.3);

  &:hover {
    background: rgba(255, 0, 255, 0.1);
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.6);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }
`;

/**
 * Menu mobile (hamburger)
 * - Visível apenas em telas pequenas
 * - Estilo minimalista
 */
export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--cosmic-light-gray);
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: var(--cosmic-cyan-neon);
  }
`;

/**
 * Overlay do menu mobile
 * - Cobertura total da tela
 * - Background escuro semi-transparente
 */
export const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1500;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

/**
 * Container do menu mobile
 * - Slide da direita
 * - Background com efeito glass
 */
export const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: rgba(10, 10, 42, 0.95);
  backdrop-filter: blur(20px);
  border-left: 1px solid var(--cosmic-dark-lilac);
  padding: 2rem;
  z-index: 1600;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

/**
 * Lista de navegação mobile
 * - Layout vertical
 * - Espaçamento maior entre itens
 */
export const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

/**
 * Link de navegação mobile
 * - Estilo adaptado para touch
 * - Área de toque maior
 */
export const MobileNavLink = styled(motion.a)<{ $active?: boolean }>`
  color: ${(props) =>
    props.$active ? 'var(--cosmic-cyan-neon)' : 'var(--cosmic-light-gray)'};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 12px;
  display: block;
  cursor: pointer;
  transition: all var(--cosmic-transition-medium);

  ${(props) =>
    props.$active &&
    `
    background: rgba(0, 255, 255, 0.1);
    text-shadow: var(--cosmic-shadow-neon);
  `}

  &:hover {
    color: var(--cosmic-cyan-neon);
    background: rgba(0, 255, 255, 0.1);
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }
`;

/**
 * Botão de fechar menu mobile
 * - Posicionamento absoluto no canto superior direito
 * - Estilo minimalista
 */
export const MobileMenuCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--cosmic-light-gray);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all var(--cosmic-transition-medium);

  &:hover {
    color: var(--cosmic-cyan-neon);
    background: rgba(0, 255, 255, 0.1);
  }
`;
