import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Container principal do footer
 * - Background com gradiente sutil
 * - Border superior com efeito neon
 * - Padding adequado
 */
export const FooterContainer = styled.footer`
  background: linear-gradient(
    180deg,
    rgba(10, 10, 42, 0.8) 0%,
    rgba(26, 10, 58, 0.9) 100%
  );
  border-top: 1px solid var(--cosmic-dark-lilac);
  padding: 3rem 2rem 2rem;
  backdrop-filter: blur(20px);
`;

/**
 * Container do conteúdo principal
 * - Largura máxima controlada
 * - Layout flexbox vertical
 * - Centralização
 */
export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

/**
 * Seção superior do footer
 * - Grid layout responsivo
 * - Espaçamento entre colunas
 */
export const FooterTop = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/**
 * Coluna de informações principais
 * - Layout flexbox vertical
 * - Espaçamento entre elementos
 */
export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

/**
 * Logo do footer
 * - Tipografia destacada
 * - Efeito neon sutil
 * - Hover effects
 */
export const FooterLogo = styled(motion.div)`
  font-size: 1.75rem;
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
 * Descrição do footer
 * - Tipografia legível
 * - Cor suave para hierarquia
 * - Largura máxima para legibilidade
 */
export const FooterDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--cosmic-medium-gray);
  max-width: 300px;
`;

/**
 * Container dos links sociais do footer
 * - Layout flexbox horizontal
 * - Espaçamento entre links
 */
export const FooterSocials = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

/**
 * Link social do footer
 * - Formato circular
 * - Efeito glass com backdrop-filter
 * - Hover effects com transformações
 */
export const FooterSocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(26, 10, 58, 0.6);
  border: 1px solid var(--cosmic-dark-lilac);
  border-radius: 50%;
  color: var(--cosmic-light-gray);
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);

  &:hover {
    border-color: var(--cosmic-cyan-neon);
    color: var(--cosmic-cyan-neon);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
    transform: translateY(-2px) scale(1.1);
  }
`;

/**
 * Coluna de links
 * - Layout flexbox vertical
 * - Espaçamento entre elementos
 */
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

/**
 * Título da coluna
 * - Tipografia destacada
 * - Cor clara para boa legibilidade
 */
export const FooterColumnTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--cosmic-light-gray);
  margin-bottom: 0.5rem;
`;

/**
 * Lista de links da coluna
 * - Remove estilos padrão de lista
 * - Layout flexbox vertical
 */
export const FooterLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

/**
 * Item da lista de links
 * - Remove estilos padrão
 */
export const FooterLinkItem = styled.li`
  margin: 0;
  padding: 0;
`;

/**
 * Link individual da coluna
 * - Tipografia legível
 * - Hover effects sutis
 * - Transições suaves
 */
export const FooterLink = styled(motion.a)`
  color: var(--cosmic-medium-gray);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all var(--cosmic-transition-medium);
  cursor: pointer;

  &:hover {
    color: var(--cosmic-cyan-neon);
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
    transform: translateX(5px);
  }
`;

/**
 * Seção inferior do footer
 * - Border superior sutil
 * - Layout flexbox horizontal
 * - Alinhamento entre copyright e links
 */
export const FooterBottom = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--cosmic-dark-lilac);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

/**
 * Texto de copyright
 * - Tipografia pequena
 * - Cor suave
 */
export const Copyright = styled.p`
  font-size: 0.875rem;
  color: var(--cosmic-medium-gray);
  margin: 0;
`;

/**
 * Links legais (privacidade, termos, etc.)
 * - Layout flexbox horizontal
 * - Espaçamento entre links
 */
export const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

/**
 * Link legal individual
 * - Tipografia pequena
 * - Hover effects sutis
 */
export const LegalLink = styled(motion.a)`
  color: var(--cosmic-medium-gray);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all var(--cosmic-transition-medium);
  cursor: pointer;

  &:hover {
    color: var(--cosmic-cyan-neon);
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
  }
`;

/**
 * Botão de voltar ao topo
 * - Posicionamento fixo no canto inferior direito
 * - Formato circular
 * - Efeito glass com backdrop-filter
 * - Hover effects com transformações
 */
export const BackToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: rgba(26, 10, 58, 0.9);
  border: 1px solid var(--cosmic-cyan-neon);
  border-radius: 50%;
  color: var(--cosmic-cyan-neon);
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
    transform: translateY(-3px) scale(1.1);
  }

  &:active {
    transform: translateY(-1px) scale(1.05);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
`;

/**
 * Elemento decorativo de fundo do footer
 * - Gradiente radial sutil
 * - Posicionamento absoluto
 * - Efeito blur
 */
export const FooterBackgroundEffect = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 200px;
  background: radial-gradient(
    ellipse,
    rgba(0, 255, 255, 0.05) 0%,
    transparent 70%
  );
  filter: blur(40px);
  pointer-events: none;
  z-index: -1;

  @media (max-width: 768px) {
    width: 400px;
    height: 150px;
  }
`;

/**
 * Container com posicionamento relativo para efeitos
 */
export const FooterWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;
