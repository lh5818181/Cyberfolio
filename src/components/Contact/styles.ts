import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Container principal da seção Contact
 * - Altura mínima de viewport completa
 * - Padding adequado para espaçamento
 */
export const ContactContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Container do conteúdo principal
 * - Largura máxima controlada
 * - Grid layout para desktop (2 colunas)
 * - Layout responsivo para mobile (1 coluna)
 */
export const ContactContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

/**
 * Container das informações de contato
 * - Layout flexbox vertical
 * - Espaçamento entre elementos
 */
export const ContactInfo = styled(motion.div)`
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
`;

/**
 * Descrição da seção
 * - Tipografia legível
 * - Cor suave para hierarquia
 * - Espaçamento de linha adequado
 */
export const ContactDescription = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--cosmic-light-gray);
  margin-bottom: 2rem;
`;

/**
 * Lista de informações de contato
 * - Layout flexbox vertical
 * - Espaçamento entre itens
 */
export const ContactList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

/**
 * Item individual de contato
 * - Layout flexbox horizontal
 * - Alinhamento entre ícone e texto
 * - Hover effects sutis
 */
export const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(26, 10, 58, 0.6);
  border: 1px solid var(--cosmic-dark-lilac);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);

  &:hover {
    border-color: var(--cosmic-cyan-neon);
    box-shadow: 0 8px 25px rgba(0, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

/**
 * Ícone do item de contato
 * - Container circular
 * - Background com efeito neon sutil
 */
export const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid var(--cosmic-cyan-neon);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cosmic-cyan-neon);
  flex-shrink: 0;
`;

/**
 * Container do texto do item
 * - Layout flexbox vertical
 * - Espaçamento entre label e valor
 */
export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

/**
 * Label do item de contato
 * - Tipografia pequena
 * - Cor suave para hierarquia
 */
export const ContactLabel = styled.span`
  font-size: 0.875rem;
  color: var(--cosmic-medium-gray);
  font-weight: 500;
`;

/**
 * Valor do item de contato
 * - Tipografia destacada
 * - Cor clara para boa legibilidade
 */
export const ContactValue = styled.span`
  font-size: 1rem;
  color: var(--cosmic-light-gray);
  font-weight: 600;
`;

/**
 * Container dos links sociais
 * - Layout flexbox horizontal
 * - Espaçamento entre links
 * - Margem superior
 */
export const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
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
    border-color: var(--cosmic-magenta-neon);
    color: var(--cosmic-magenta-neon);
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.4);
    transform: translateY(-3px) scale(1.1);
  }
`;

/**
 * Container do formulário
 * - Layout flexbox vertical
 * - Espaçamento entre elementos
 */
export const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(26, 10, 58, 0.6);
  border: 1px solid var(--cosmic-dark-lilac);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

/**
 * Título do formulário
 * - Tipografia destacada
 * - Cor clara para boa legibilidade
 * - Centralização
 */
export const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--cosmic-light-gray);
  text-align: center;
  margin-bottom: 1rem;
`;

/**
 * Container do campo de formulário
 * - Layout flexbox vertical
 * - Espaçamento entre label e input
 */
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

/**
 * Label do campo
 * - Tipografia pequena
 * - Cor destacada
 * - Font weight para destaque
 */
export const FormLabel = styled.label`
  font-size: 0.875rem;
  color: var(--cosmic-cyan-neon);
  font-weight: 500;
`;

/**
 * Input do formulário
 * - Estilo glass com backdrop-filter
 * - Focus states com efeito neon
 * - Padding adequado
 */
export const FormInput = styled.input`
  background: rgba(10, 10, 42, 0.8);
  border: 1px solid var(--cosmic-dark-lilac);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: var(--cosmic-light-gray);
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);

  &::placeholder {
    color: var(--cosmic-medium-gray);
  }

  &:focus {
    outline: none;
    border-color: var(--cosmic-cyan-neon);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  }

  &:hover {
    border-color: var(--cosmic-cyan-neon);
  }
`;

/**
 * Textarea do formulário
 * - Herda estilos do FormInput
 * - Altura mínima adequada
 * - Resize vertical apenas
 */
export const FormTextarea = styled.textarea`
  background: rgba(10, 10, 42, 0.8);
  border: 1px solid var(--cosmic-dark-lilac);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: var(--cosmic-light-gray);
  backdrop-filter: blur(10px);
  transition: all var(--cosmic-transition-medium);
  min-height: 120px;
  resize: vertical;
  font-family: inherit;

  &::placeholder {
    color: var(--cosmic-medium-gray);
  }

  &:focus {
    outline: none;
    border-color: var(--cosmic-cyan-neon);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  }

  &:hover {
    border-color: var(--cosmic-cyan-neon);
  }
`;

/**
 * Botão de envio do formulário
 * - Estilo destacado com efeito neon
 * - Hover effects com transformações
 * - Estados de loading
 */
export const SubmitButton = styled(motion.button)<{ $loading?: boolean }>`
  background: transparent;
  border: 2px solid var(--cosmic-magenta-neon);
  color: var(--cosmic-magenta-neon);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${(props) => (props.$loading ? 'not-allowed' : 'pointer')};
  transition: all var(--cosmic-transition-medium);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  opacity: ${(props) => (props.$loading ? 0.7 : 1)};

  &:hover:not(:disabled) {
    background: rgba(255, 0, 255, 0.1);
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.6);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

/**
 * Mensagem de status do formulário
 * - Tipografia pequena
 * - Cores diferentes para sucesso/erro
 * - Centralização
 */
export const FormMessage = styled(motion.div)<{ $type: 'success' | 'error' }>`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  text-align: center;
  background: ${(props) =>
    props.$type === 'success'
      ? 'rgba(34, 197, 94, 0.1)'
      : 'rgba(239, 68, 68, 0.1)'};
  border: 1px solid
    ${(props) =>
      props.$type === 'success'
        ? 'rgba(34, 197, 94, 0.3)'
        : 'rgba(239, 68, 68, 0.3)'};
  color: ${(props) => (props.$type === 'success' ? '#22c55e' : '#ef4444')};
`;

/**
 * Indicador de loading
 * - Animação de rotação
 * - Tamanho pequeno
 */
export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
