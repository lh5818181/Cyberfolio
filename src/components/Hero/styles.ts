import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Container principal da seção Hero
 * - Altura de viewport completa
 * - Layout flexbox centralizado
 * - Padding para espaçamento
 */
export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  position: relative;
  overflow: hidden;
`;

/**
 * Container do conteúdo principal
 * - Largura máxima controlada
 * - Layout flexbox vertical
 * - Centralização de texto
 */
export const HeroContent = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
  z-index: 2;
`;

/**
 * Badge de status/disponibilidade
 * - Estilo pill com efeito glass
 * - Animação de pulse sutil
 */
export const StatusBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  color: #00ff00;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
`;

/**
 * Indicador de status (ponto verde)
 * - Círculo pequeno com animação pulse
 */
export const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

/**
 * Título principal (nome)
 * - Tipografia grande e responsiva
 * - Efeito gradiente no texto
 * - Espaçamento adequado
 */
export const MainTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg,
    var(--cosmic-cyan-neon) 0%,
    var(--cosmic-magenta-neon) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
`;

/**
 * Subtítulo (profissão/cargo)
 * - Tipografia média
 * - Cor destacada
 * - Espaçamento inferior
 */
export const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--cosmic-light-gray);
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(224, 224, 224, 0.2);
`;

/**
 * Descrição/tagline
 * - Tipografia legível
 * - Espaçamento de linha confortável
 * - Largura máxima para legibilidade
 */
export const Description = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--cosmic-medium-gray);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

/**
 * Container dos botões de ação
 * - Layout flexbox horizontal
 * - Espaçamento entre botões
 * - Responsividade para mobile
 */
export const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

/**
 * Botão primário
 * - Estilo destacado com efeito neon
 * - Hover effects com transformações
 * - Ícone integrado
 */
export const PrimaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  border: 2px solid var(--cosmic-cyan-neon);
  color: var(--cosmic-cyan-neon);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--cosmic-transition-medium);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
  }
`;

/**
 * Botão secundário
 * - Estilo mais sutil
 * - Hover effects diferenciados
 * - Ícone integrado
 */
export const SecondaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(26, 10, 58, 0.6);
  border: 1px solid var(--cosmic-dark-lilac);
  color: var(--cosmic-light-gray);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--cosmic-transition-medium);
  backdrop-filter: blur(10px);

  &:hover {
    border-color: var(--cosmic-magenta-neon);
    color: var(--cosmic-magenta-neon);
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
  }
`;

/**
 * Container dos links sociais
 * - Layout flexbox horizontal
 * - Espaçamento uniforme
 * - Centralização
 */
export const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

/**
 * Link social individual
 * - Formato circular
 * - Efeito glass com backdrop-filter
 * - Hover effects com transformações
 */
export const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
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
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
    transform: translateY(-3px) scale(1.1);
  }
`;

/**
 * Indicador de scroll
 * - Posicionamento absoluto na parte inferior
 * - Animação de bounce
 * - Estilo minimalista
 */
export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--cosmic-medium-gray);
  cursor: pointer;

  &:hover {
    color: var(--cosmic-cyan-neon);
  }
`;

/**
 * Texto do indicador de scroll
 * - Tipografia pequena
 * - Espaçamento de letras
 */
export const ScrollText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

/**
 * Ícone do indicador de scroll
 * - Animação de bounce contínua
 */
export const ScrollIcon = styled.div`
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

/**
 * Elemento decorativo de fundo
 * - Círculo com gradiente
 * - Posicionamento absoluto
 * - Efeito blur
 */
export const BackgroundCircle = styled.div<{
  $position: 'top-left' | 'bottom-right';
}>`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: ${(props) =>
    props.$position === 'top-left'
      ? 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)'
      : 'radial-gradient(circle, rgba(255,0,255,0.1) 0%, transparent 70%)'};
  filter: blur(40px);
  z-index: 1;

  ${(props) =>
    props.$position === 'top-left' &&
    `
    top: -200px;
    left: -200px;
  `}

  ${(props) =>
    props.$position === 'bottom-right' &&
    `
    bottom: -200px;
    right: -200px;
  `}
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
