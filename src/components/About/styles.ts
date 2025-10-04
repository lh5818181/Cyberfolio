import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Container principal da seção About
 * - Altura mínima de viewport completa
 * - Padding adequado para espaçamento
 */
export const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Container do conteúdo principal
 * - Grid layout para desktop (2 colunas)
 * - Layout responsivo para mobile (1 coluna)
 * - Largura máxima controlada
 */
export const AboutContent = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    gap: 4rem;
    align-items: start;
    flex-direction: column;
}
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

/**
 * Container do conteúdo textual
 * - Layout flexbox vertical
 * - Espaçamento entre elementos
 */
export const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

/**
 * Título da seção
 * - Tipografia responsiva grande
 * - Efeito neon com text-shadow
 * - Cor ciano característica
 */
export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--cosmic-cyan-neon);
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  margin-bottom: 1rem;
  text-align: center;
`;

/**
 * Descrição principal
 * - Tipografia legível
 * - Espaçamento de linha adequado
 * - Cor suave para hierarquia
 */
export const Description = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--cosmic-light-gray);
  margin-bottom: 1.5rem;
`;

/**
 * Container das estatísticas
 * - Grid layout responsivo
 * - Espaçamento uniforme
 */
export const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

/**
 * Item individual de estatística
 * - Efeito glass com backdrop-filter
 * - Centralização de conteúdo
 * - Hover effects sutis
 */
export const StatItem = styled(motion.div)`
  background: rgba(26, 10, 58, 0.6);
  border: 1px solid var(--cosmic-dark-lilac);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);

  &:hover {
    border-color: var(--cosmic-cyan-neon);
    box-shadow: 0 8px 25px rgba(0, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;

/**
 * Número da estatística
 * - Tipografia grande e destacada
 * - Cor neon para destaque
 */
export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--cosmic-cyan-neon);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  margin-bottom: 0.5rem;
`;

/**
 * Label da estatística
 * - Tipografia pequena
 * - Cor suave para hierarquia
 */
export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--cosmic-medium-gray);
  font-weight: 500;
`;

/**
 * Container das habilidades
 * - Layout flexbox vertical
 * - Espaçamento entre elementos
 */
export const SkillsContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

/**
 * Título das habilidades
 * - Tipografia destacada
 * - Cor clara para boa legibilidade
 */
export const SkillsTitle = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--cosmic-light-gray);
  margin-bottom: 1rem;
  margin-top: 28px;

  @media (max-width: 1024px) {
    text-align: left;
  }
`;

export const StacksTitle = styled(motion.h4)`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--cosmic-white);

  @media (max-width: 1024px) {
    text-align: left;
  }
`;

/**
 * Grid das tecnologias
 * - Layout responsivo
 * - Espaçamento uniforme
 */
export const TechGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const TechContainer = styled(motion.div)` // Container para cada categoria de tecnologias - modificar layout
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

/**
 * Item individual de tecnologia
 * - Formato quadrado
 * - Efeito glass com backdrop-filter
 * - Hover effects com transformações
 */
export const TechItem = styled(motion.div)`
  aspect-ratio: 1;
  background: rgba(26, 10, 58, 0.6);
  border: 1px solid var(--cosmic-dark-lilac);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px 45px;
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);
  cursor: pointer;

  &:hover {
    border-color: var(--cosmic-magenta-neon);
    box-shadow: 0 8px 25px rgba(255, 0, 255, 0.2);
    transform: translateY(-5px) scale(1.05);
  }
`;

/**
 * Ícone da tecnologia (agora para SVG)
 * - Removemos o font-size
 * - Usamos flexbox para centralizar o ícone SVG que vem como filho
 */
export const TechIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
  /* O tamanho do ícone é controlado pela prop 'size' no componente */
`;

/**
 * Nome da tecnologia
 * - Tipografia pequena
 * - Centralização
 * - Cor suave
 */
export const TechName = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--cosmic-light-gray);
  text-align: center;
  line-height: 1.2;
`;

/**
 * Container dos cards de habilidades
 * - Layout flexbox vertical
 * - Espaçamento entre cards
 */
export const SkillCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

/**
 * Card individual de habilidade
 * - Efeito glass com backdrop-filter
 * - Layout flexbox horizontal
 * - Hover effects
 */
export const SkillCard = styled(motion.div)`
  background: rgba(26, 10, 58, 0.6);
  border: 1px solid var(--cosmic-dark-lilac);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);

  &:hover {
    border-color: var(--cosmic-gold);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
    transform: translateY(-3px);
  }
`;

/**
 * Header do card de habilidade
 * - Layout flexbox horizontal
 * - Alinhamento entre ícone e título
 */
export const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

/**
 * Ícone do card de habilidade
 * - Container circular
 * - Background com efeito neon sutil
 */
export const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid var(--cosmic-gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cosmic-gold);
  flex-shrink: 0;
`;

/**
 * Título do card de habilidade
 * - Tipografia destacada
 * - Cor clara para boa legibilidade
 */
export const SkillTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--cosmic-light-gray);
  margin: 0;
`;

/**
 * Descrição do card de habilidade
 * - Tipografia legível
 * - Cor suave para hierarquia
 */
export const SkillDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--cosmic-medium-gray);
  margin: 0;
`;
