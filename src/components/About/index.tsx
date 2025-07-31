import React from 'react';
import { motion } from 'framer-motion';
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
    { number: '3+', label: 'Anos de Experiência' },
    { number: '50+', label: 'Projetos Concluídos' },
    { number: '20+', label: 'Clientes Satisfeitos' },
    { number: '100%', label: 'Dedicação' },
  ];

  /**
   * Tecnologias conhecidas
   */
  const technologies: Technology[] = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'HTML5', icon: '🧡' },
    { name: 'CSS3', icon: '💙' },
    { name: 'Git', icon: '📚' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
  ];

  /**
   * Habilidades principais
   */
  const skills: Skill[] = [
    {
      icon: Code,
      title: 'Desenvolvimento Full-Stack',
      description:
        'Criação de aplicações completas, desde o frontend até o backend, com foco em performance e escalabilidade.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Design de interfaces modernas e intuitivas, priorizando a experiência do usuário e acessibilidade.',
    },
    {
      icon: Zap,
      title: 'Otimização de Performance',
      description:
        'Implementação de técnicas avançadas para garantir aplicações rápidas e eficientes.',
    },
    {
      icon: Globe,
      title: 'Desenvolvimento Web Moderno',
      description:
        'Utilização das mais recentes tecnologias e frameworks para criar soluções web inovadoras.',
    },
  ];

  /**
   * Variantes de animação para o container principal
   */
  const containerVariants = {
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
  const itemVariants = {
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
  const statVariants = {
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
  const techVariants = {
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
  const skillCardVariants = {
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
            Sou um desenvolvedor apaixonado por tecnologia e inovação, com foco
            em criar soluções digitais que fazem a diferença. Com mais de 3 anos
            de experiência, especializo-me em desenvolvimento full-stack usando
            tecnologias modernas.
          </Description>

          <Description variants={itemVariants}>
            Minha jornada começou com curiosidade sobre como as coisas funcionam
            na web, e hoje transformo ideias em realidade através de código
            limpo, design intuitivo e experiências de usuário excepcionais.
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
