import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Container principal da seção Projects
 * - Altura mínima de viewport completa
 * - Padding adequado para espaçamento
 */
export const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/**
 * Container do conteúdo principal
 * - Largura máxima controlada
 * - Layout flexbox vertical
 */
export const ProjectsContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * Header da seção
 * - Centralização de conteúdo
 * - Espaçamento inferior
 */
export const ProjectsHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
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
`;

/**
 * Subtítulo da seção
 * - Tipografia legível
 * - Cor suave para hierarquia
 */
export const SectionSubtitle = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--cosmic-medium-gray);
  max-width: 600px;
  margin: 0 auto;
`;

/**
 * Container dos filtros
 * - Layout flexbox horizontal
 * - Espaçamento entre filtros
 * - Responsividade para mobile
 */
export const FilterContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

/**
 * Botão de filtro
 * - Estilo pill com bordas arredondadas
 * - Estados ativo/inativo
 * - Hover effects
 */
export const FilterButton = styled(motion.button)<{ $active?: boolean }>`
  background: ${(props) =>
    props.$active ? 'rgba(0, 255, 255, 0.1)' : 'rgba(26, 10, 58, 0.6)'};
  border: 1px solid
    ${(props) =>
      props.$active ? 'var(--cosmic-cyan-neon)' : 'var(--cosmic-dark-lilac)'};
  color: ${(props) =>
    props.$active ? 'var(--cosmic-cyan-neon)' : 'var(--cosmic-light-gray)'};
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);

  &:hover {
    border-color: var(--cosmic-cyan-neon);
    color: var(--cosmic-cyan-neon);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

/**
 * Grid dos projetos
 * - Layout grid responsivo
 * - Espaçamento uniforme
 */
export const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

/**
 * Card individual de projeto
 * - Efeito glass com backdrop-filter
 * - Hover effects com transformações
 * - Layout flexbox vertical
 */
export const ProjectCard = styled(motion.div)`
  background: rgba(26, 10, 58, 0.6);
  border: 1px solid var(--cosmic-dark-lilac);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);
  cursor: pointer;

  &:hover {
    border-color: var(--cosmic-magenta-neon);
    box-shadow: 0 15px 40px rgba(255, 0, 255, 0.2);
    transform: translateY(-8px);
  }
`;

/**
 * Imagem do projeto
 * - Aspect ratio fixo
 * - Cobertura completa
 * - Gradiente overlay
 */
export const ProjectImage = styled.div<{ $bgColor?: string }>`
  width: 100%;
  height: 200px;

  /*
    1. MOVE O ESTILO DE FUNDO PARA O COMPONENTE PRINCIPAL
    Isso permite que ele sirva tanto como cor (linear-gradient) quanto como imagem (url).
  */
  background: ${(props) =>
    props.$bgColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};

  /*
    2. ADICIONA AS PROPRIEDADES DE CONTROLE DE IMAGEM
    Isso garante que a imagem não estoure e seja centralizada.
  */
  background-size: cover; /* Ajusta o tamanho da imagem para cobrir o container */
  background-repeat: no-repeat; /* Impede a repetição da imagem */
  background-position: center; /* Centraliza a imagem no container */

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 255, 255, 0.1) 0%,
      rgba(255, 0, 255, 0.1) 100%
    );
    opacity: 0;
    transition: opacity var(--cosmic-transition-medium);
  }

  &:hover::before {
    opacity: 1;
  }
`;

/**
 * Ícone placeholder para imagem
 * - Tamanho grande
 * - Cor suave
 */
export const ProjectImageIcon = styled.div`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.7);
  z-index: 1;
`;

/**
 * Conteúdo do card
 * - Padding adequado
 * - Layout flexbox vertical
 */
export const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

/**
 * Título do projeto
 * - Tipografia destacada
 * - Cor clara para boa legibilidade
 */
export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--cosmic-light-gray);
  margin: 0;
`;

/**
 * Descrição do projeto
 * - Tipografia legível
 * - Cor suave para hierarquia
 * - Altura limitada com overflow
 */
export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--cosmic-medium-gray);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/**
 * Container das tecnologias
 * - Layout flexbox horizontal
 * - Wrap para múltiplas linhas
 * - Espaçamento entre tags
 */
export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

/**
 * Tag individual de tecnologia
 * - Estilo pill pequeno
 * - Background com cor da tecnologia
 */
export const TechTag = styled.span<{ $color?: string }>`
  background: ${(props) => props.$color || 'rgba(0, 255, 255, 0.1)'};
  border: 1px solid ${(props) => props.$color || 'rgba(0, 255, 255, 0.3)'};
  color: var(--cosmic-light-gray);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

/**
 * Container dos links do projeto
 * - Layout flexbox horizontal
 * - Espaçamento entre links
 * - Alinhamento à direita
 */
export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

/**
 * Link individual do projeto
 * - Formato circular
 * - Hover effects
 * - Cores diferenciadas por tipo
 */
export const ProjectLink = styled(motion.a)<{ $type: 'github' | 'live' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(26, 10, 58, 0.8);
  border: 1px solid
    ${(props) =>
      props.$type === 'github'
        ? 'var(--cosmic-light-gray)'
        : 'var(--cosmic-gold)'};
  border-radius: 50%;
  color: ${(props) =>
    props.$type === 'github'
      ? 'var(--cosmic-light-gray)'
      : 'var(--cosmic-gold)'};
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);

  &:hover {
    border-color: ${(props) =>
      props.$type === 'github'
        ? 'var(--cosmic-cyan-neon)'
        : 'var(--cosmic-magenta-neon)'};
    color: ${(props) =>
      props.$type === 'github'
        ? 'var(--cosmic-cyan-neon)'
        : 'var(--cosmic-magenta-neon)'};
    box-shadow: 0 0 15px
      ${(props) =>
        props.$type === 'github'
          ? 'rgba(0, 255, 255, 0.4)'
          : 'rgba(255, 0, 255, 0.4)'};
    transform: translateY(-2px) scale(1.1);
  }
`;

/**
 * Container do modal de detalhes
 * - Overlay de tela cheia
 * - Background escuro semi-transparente
 */
export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

/**
 * Container do conteúdo do modal
 * - Largura máxima controlada
 * - Efeito glass com backdrop-filter
 * - Scroll interno se necessário
 */
export const ModalContent = styled(motion.div)`
  background: rgba(10, 10, 42, 0.95);
  border: 1px solid var(--cosmic-dark-lilac);
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  backdrop-filter: blur(20px);
  position: relative;
`;

/**
 * Botão de fechar modal
 * - Posicionamento absoluto no canto superior direito
 * - Hover effects
 */
export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(26, 10, 58, 0.8);
  border: 1px solid var(--cosmic-dark-lilac);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cosmic-light-gray);
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);
  z-index: 1001;

  &:hover {
    border-color: var(--cosmic-cyan-neon);
    color: var(--cosmic-cyan-neon);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
  }
`;

/**
 * Conteúdo interno do modal
 * - Padding adequado
 * - Layout flexbox vertical
 */
export const ModalInner = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;