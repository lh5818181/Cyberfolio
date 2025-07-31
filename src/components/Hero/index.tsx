// index.tsx (Corrigido)

import React, { useState, useEffect } from 'react';
// 1. Importar 'Variants' para tipagem correta
import { motion, type Variants } from 'framer-motion';
import {
  Mail,
  Download,
  ChevronDown,
} from 'lucide-react';
import {
  HeroContainer,
  HeroContent,
  StatusBadge,
  StatusDot,
  MainTitle,
  Subtitle,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  ScrollIndicator,
  ScrollText,
  ScrollIcon,
  BackgroundCircle,
} from './styles';


/**
 * Props do componente Hero
 */
interface HeroProps {
  className?: string;
}

/**
 * Componente Hero
 *
 * Seção principal de apresentação com:
 * - Efeito de digitação no nome
 * - Botões de ação principais
 * - Links para redes sociais
 * - Indicador de scroll
 * - Elementos decorativos de fundo
 * - Animações de entrada escalonadas
 */
const Hero: React.FC<HeroProps> = ({ className }) => {
  // Estado para controlar o efeito de digitação
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const fullText = 'Luís Henrique';

  /**
   * Effect para criar o efeito de digitação
   */
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150); // Velocidade da digitação

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  /**
   * Função para navegar para uma seção
   * @param sectionId - ID da seção de destino
   */
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Variantes de animação para o container principal
   * 2. Adicionar a tipagem 'Variants'
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  /**
   * Variantes de animação para itens individuais
   * 2. Adicionar a tipagem 'Variants'
   */
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  /**
   * Variantes de animação para o título principal
   * 2. Adicionar a tipagem 'Variants'
   */
  const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };


  return (
    <HeroContainer id="home" className={className}>
      {/* Elementos decorativos de fundo */}
      <BackgroundCircle $position="top-left" />
      <BackgroundCircle $position="bottom-right" />

      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge de status */}
          <StatusBadge variants={itemVariants}>
            <StatusDot />
            Disponível para projetos
          </StatusBadge>

          {/* Título principal com efeito de digitação */}
          <MainTitle variants={titleVariants}>
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              |
            </motion.span>
          </MainTitle>

          {/* Subtítulo */}
          <Subtitle variants={itemVariants}>Desenvolvedor Front-End & Futuro Full-Stack Java</Subtitle>

          {/* Descrição */}
          <Description variants={itemVariants}>
          Construindo experiências digitais de alta performance com React, Next.js e TypeScript. 
          Atualmente expandindo minhas habilidades para o back-end com Java e Spring Boot no curso de formação da EBAC.
          </Description>

          {/* Botões de ação */}
          <ButtonGroup variants={itemVariants}>
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              <Mail size={20} />
              Fale Comigo
            </PrimaryButton>

            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
            >
              <Download size={20} />
              Ver Projetos
            </SecondaryButton>
          </ButtonGroup>
        </motion.div>
      </HeroContent>

      {/* Indicador de scroll */}
      <ScrollIndicator
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() => scrollToSection('about')}
      >
        <ScrollText>Scroll</ScrollText>
        <ScrollIcon>
          <ChevronDown size={20} />
        </ScrollIcon>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;
