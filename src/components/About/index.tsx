import React from 'react';
import { type Variants } from 'framer-motion'
import { Code, Palette, Zap, Globe } from 'lucide-react';
import {
  AboutContainer,
  AboutContent,
  TextContent,
  SectionTitle,
  Description,
  StatsContainer,
  StatItem,
  StatNumber,
  StatLabel,
  SkillsContent,
  SkillsTitle,
  TechGrid,
  TechItem,
  TechIcon,
  TechName,
  SkillCards,
  SkillCard,
  SkillHeader,
  SkillIcon,
  SkillTitle,
  SkillDescription,
} from './styles';

/**
 * Interface para estatísticas
 */
interface Stat {
  number: string;
  label: string;
}

/**
 * Interface para tecnologias
 */
interface Technology {
  name: string;
  icon: string;
}

/**
 * Interface para habilidades
 */
interface Skill {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

/**
 * Props do componente About
 */
interface AboutProps {
  className?: string;
}

/**
 * Componente About
 *
 * Seção sobre o desenvolvedor com:
 * - Descrição pessoal e profissional
 * - Estatísticas de experiência
 * - Grid de tecnologias conhecidas
 * - Cards de habilidades principais
 * - Animações de entrada escalonadas
 */
const About: React.FC<AboutProps> = ({ className }) => {
  /**
   * Estatísticas do desenvolvedor
   */
  const stats: Stat[] = [
    { number: '1000+', label: 'Horas de Código' },
    { number: '10+', label: 'Projetos de Estudo' },
    { number: '2', label: 'Stacks de Tecnologia' },
    { number: '100%', label: 'Dedicação' },
  ];

  /**
   * Tecnologias conhecidas
   */
  const technologies: Technology[] = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'Next.js', icon: '❌' },
    { name: 'HTML5', icon: '🧡' },
    { name: 'CSS3', icon: '💙' },
    { name: 'Git', icon: '📚' },
    { name: 'Github', icon: '❌' },
    { name: 'SASS', icon: '❌' },
    { name: 'Tailwind CSS', icon: '❌' },
    { name: 'Styled-components', icon: '❌' },
    { name: 'React Testing Library', icon: '❌' },
    { name: 'Testes E2E com Cypress', icon: '❌' },
    { name: 'Vercel', icon: '❌' },
    { name: 'Figma', icon: '❌' },
  ];

  /**
   * Habilidades principais
   */
  const skills: Skill[] = [
    {
      icon: Code,
      title: 'Desenvolvimento Front-End',
      description:
        'Criação de aplicações web interativas e de alta performance, desde a estruturação com HTML/CSS até a componentização com React e Next.js.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Foco em interfaces modernas e intuitivas, aplicando princípios de design responsivo e acessibilidade para garantir a melhor experiência do usuário.',
    },
    {
      icon: Zap,
      title: 'Otimização de Performance',
      description:
        'Implementação de técnicas como renderização otimizada e boas práticas de codificação para garantir aplicações rápidas e eficientes.',
    },
    {
      icon: Globe,
      title: 'Qualidade de Código e Testes',
      description:
        'Utilização de testes unitários e de integração para garantir a robustez do software, mantendo um código limpo, legível e de fácil manutenção.',
    },
  ];

  /**
   * Variantes de animação para o container principal
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
   * Variantes de animação para estatísticas
   */
  const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  /**
   * Variantes de animação para tecnologias
   */
  const techVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  /**
   * Variantes de animação para cards de habilidades
   */
  const skillCardVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <AboutContainer id="about" className={className}>
      <AboutContent>
        {/* Conteúdo textual e estatísticas */}
        <TextContent
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle variants={itemVariants}>Sobre Mim</SectionTitle>

          <Description variants={itemVariants}>
            Sou um desenvolvedor apaixonado por tecnologia, focado em criar soluções digitais que realmente fazem a diferença.
            Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam, 
            e hoje meu objetivo é transformar essa curiosidade em aplicações eficientes e intuitivas.
          </Description>

          <Description variants={itemVariants}>
          Através do meu curso de formação Full-Stack na EBAC, estou construindo uma base sólida para 
          desenvolver aplicações completas.
          Acredito que um bom software é resultado de um código limpo, um design focado no usuário e uma busca contínua por
          aprendizado e otimização.
          </Description>

          {/* Estatísticas */}
          <StatsContainer variants={itemVariants}>
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                variants={statVariants}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsContainer>
        </TextContent>

        {/* Habilidades e tecnologias */}
        <SkillsContent
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SkillsTitle variants={itemVariants}>
            Tecnologias & Ferramentas
          </SkillsTitle>

          {/* Grid de tecnologias */}
          <TechGrid variants={itemVariants}>
            {technologies.map((tech, index) => (
              <TechItem
                key={tech.name}
                variants={techVariants}
                custom={index}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <TechIcon>{tech.icon}</TechIcon>
                <TechName>{tech.name}</TechName>
              </TechItem>
            ))}
          </TechGrid>

          <SkillsTitle variants={itemVariants}>
            Principais Habilidades
          </SkillsTitle>

          {/* Cards de habilidades */}
          <SkillCards>
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <SkillCard
                  key={skill.title}
                  variants={skillCardVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                >
                  <SkillHeader>
                    <SkillIcon>
                      <IconComponent size={20} />
                    </SkillIcon>
                    <SkillTitle>{skill.title}</SkillTitle>
                  </SkillHeader>
                  <SkillDescription>{skill.description}</SkillDescription>
                </SkillCard>
              );
            })}
          </SkillCards>
        </SkillsContent>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
