import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Github, ExternalLink, X, Code } from 'lucide-react';
import {
  ProjectsContainer,
  ProjectsContent,
  ProjectsHeader,
  SectionTitle,
  SectionSubtitle,
  FilterContainer,
  FilterButton,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectImageIcon,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechTags,
  TechTag,
  ProjectLinks,
  ProjectLink,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalInner,
} from './styles';

/**
 * Interface para projeto
 */
interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  imageColor: string;
}

/**
 * Props do componente Projects
 */
interface ProjectsProps {
  className?: string;
}

/**
 * Componente Projects
 *
 * Seção de projetos com:
 * - Sistema de filtros por categoria
 * - Grid responsivo de projetos
 * - Modal de detalhes do projeto
 * - Links para GitHub e demo ao vivo
 * - Animações de entrada escalonadas
 */
const Projects: React.FC<ProjectsProps> = ({ className }) => {
  // Estado para filtro ativo
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  // Estado para modal de detalhes
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  /**
   * Categorias de filtro
   */
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'react', label: 'React' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' },
  ];

  /**
   * Lista de projetos
   */
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description:
        'Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.',
      fullDescription:
        'Uma plataforma completa de e-commerce desenvolvida com React e Node.js, incluindo sistema de carrinho de compras, integração com gateway de pagamento, painel administrativo para gerenciamento de produtos e pedidos, e sistema de autenticação seguro.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      imageColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: '2',
      title: 'Task Management App',
      description:
        'Aplicativo de gerenciamento de tarefas com drag & drop e colaboração em tempo real.',
      fullDescription:
        'Aplicativo moderno de gerenciamento de tarefas inspirado no Trello, com funcionalidades de drag & drop, colaboração em tempo real, notificações push, e sincronização entre dispositivos. Desenvolvido com React e Socket.io.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      category: 'react',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      imageColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: '3',
      title: 'Weather App Mobile',
      description:
        'Aplicativo mobile de previsão do tempo com geolocalização e notificações.',
      fullDescription:
        'Aplicativo mobile nativo para previsão do tempo, com detecção automática de localização, previsões de 7 dias, alertas meteorológicos, e interface adaptativa baseada nas condições climáticas atuais.',
      technologies: ['React Native', 'Expo', 'Weather API'],
      category: 'mobile',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      imageColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description:
        'Website de portfólio responsivo com animações suaves e design moderno.',
      fullDescription:
        'Website de portfólio pessoal com design responsivo, animações suaves usando Framer Motion, otimização para SEO, e sistema de contato integrado. Desenvolvido com foco em performance e acessibilidade.',
      technologies: ['React', 'Styled Components', 'Framer Motion'],
      category: 'design',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      imageColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      id: '5',
      title: 'Social Media Dashboard',
      description:
        'Dashboard para análise de redes sociais com gráficos interativos e relatórios.',
      fullDescription:
        'Dashboard completo para análise de métricas de redes sociais, com gráficos interativos, relatórios automatizados, integração com APIs do Instagram, Facebook e Twitter, e sistema de agendamento de posts.',
      technologies: ['React', 'Chart.js', 'Express', 'Redis'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      imageColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    },
    {
      id: '6',
      title: 'Blog Platform',
      description:
        'Plataforma de blog com editor rich text e sistema de comentários.',
      fullDescription:
        'Plataforma completa de blog com editor rich text, sistema de comentários, categorização de posts, busca avançada, e painel administrativo para gerenciamento de conteúdo. Otimizada para SEO e performance.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
      category: 'react',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      imageColor: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    },
  ];

  /**
   * Projetos filtrados baseado na categoria ativa
   */
  const filteredProjects =
    activeFilter === 'todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  /**
   * Função para alterar filtro ativo
   * @param categoryId - ID da categoria
   */
  const handleFilterChange = (categoryId: string): void => {
    setActiveFilter(categoryId);
  };

  /**
   * Função para abrir modal de detalhes
   * @param project - Projeto selecionado
   */
  const openProjectModal = (project: Project): void => {
    setSelectedProject(project);
  };

  /**
   * Função para fechar modal de detalhes
   */
  const closeProjectModal = (): void => {
    setSelectedProject(null);
  };

  /**
   * Função para obter cor da tag de tecnologia
   * @param tech - Nome da tecnologia
   * @returns Cor da tag
   */
  const getTechTagColor = (tech: string): string => {
    const colors: Record<string, string> = {
      React: 'rgba(97, 218, 251, 0.1)',
      TypeScript: 'rgba(49, 120, 198, 0.1)',
      'Node.js': 'rgba(104, 160, 99, 0.1)',
      MongoDB: 'rgba(76, 175, 80, 0.1)',
      PostgreSQL: 'rgba(51, 103, 145, 0.1)',
      'Next.js': 'rgba(0, 0, 0, 0.1)',
      Express: 'rgba(68, 68, 68, 0.1)',
      'Socket.io': 'rgba(0, 0, 0, 0.1)',
      'React Native': 'rgba(97, 218, 251, 0.1)',
      Expo: 'rgba(0, 0, 0, 0.1)',
      'Styled Components': 'rgba(219, 112, 147, 0.1)',
      'Framer Motion': 'rgba(0, 85, 255, 0.1)',
      'Chart.js': 'rgba(255, 99, 132, 0.1)',
      Redis: 'rgba(220, 38, 38, 0.1)',
      Prisma: 'rgba(45, 212, 191, 0.1)',
      Tailwind: 'rgba(6, 182, 212, 0.1)',
      Stripe: 'rgba(99, 102, 241, 0.1)',
      'Weather API': 'rgba(59, 130, 246, 0.1)',
    };
    return colors[tech] || 'rgba(0, 255, 255, 0.1)';
  };

  /**
   * Variantes de animação para o container principal
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
   * Variantes de animação para cards de projeto
   */
  const cardVariants: Variants = {
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
   * Variantes de animação para o modal
   */
  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  /**
   * Variantes de animação para overlay do modal
   */
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <ProjectsContainer id="projects" className={className}>
      <ProjectsContent>
        {/* Header da seção */}
        <ProjectsHeader
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle variants={itemVariants}>Meus Projetos</SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Uma seleção dos meus trabalhos mais recentes, demonstrando
            diferentes tecnologias e abordagens de desenvolvimento.
          </SectionSubtitle>
        </ProjectsHeader>

        {/* Filtros */}
        <FilterContainer variants={itemVariants}>
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              $active={activeFilter === category.id}
              onClick={() => handleFilterChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </FilterButton>
          ))}
        </FilterContainer>

        {/* Grid de projetos */}
        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter} // Re-anima quando o filtro muda
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              variants={cardVariants}
              custom={index}
              whileHover={{
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              onClick={() => openProjectModal(project)}
            >
              <ProjectImage $bgColor={project.imageColor}>
                <ProjectImageIcon>
                  <Code size={48} />
                </ProjectImageIcon>
              </ProjectImage>

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <TechTags>
                  {project.technologies.map((tech) => (
                    <TechTag key={tech} $color={getTechTagColor(tech)}>
                      {tech}
                    </TechTag>
                  ))}
                </TechTags>

                <ProjectLinks>
                  <ProjectLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    $type="github"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                  </ProjectLink>
                  <ProjectLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    $type="live"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>

      {/* Modal de detalhes do projeto */}
      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeProjectModal}
          >
            <ModalContent
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <ModalCloseButton onClick={closeProjectModal}>
                <X size={20} />
              </ModalCloseButton>

              <ModalInner>
                <ProjectImage $bgColor={selectedProject.imageColor}>
                  <ProjectImageIcon>
                    <Code size={64} />
                  </ProjectImageIcon>
                </ProjectImage>

                <ProjectTitle
                  style={{ fontSize: '1.5rem', marginBottom: '1rem' }}
                >
                  {selectedProject.title}
                </ProjectTitle>

                <ProjectDescription
                  style={{
                    fontSize: '1rem',
                    WebkitLineClamp: 'unset',
                    overflow: 'visible',
                    display: 'block',
                  }}
                >
                  {selectedProject.fullDescription}
                </ProjectDescription>

                <TechTags>
                  {selectedProject.technologies.map((tech) => (
                    <TechTag key={tech} $color={getTechTagColor(tech)}>
                      {tech}
                    </TechTag>
                  ))}
                </TechTags>

                <ProjectLinks
                  style={{ justifyContent: 'center', marginTop: '2rem' }}
                >
                  <ProjectLink
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    $type="github"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ width: '50px', height: '50px' }}
                  >
                    <Github size={24} />
                  </ProjectLink>
                  <ProjectLink
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    $type="live"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ width: '50px', height: '50px' }}
                  >
                    <ExternalLink size={24} />
                  </ProjectLink>
                </ProjectLinks>
              </ModalInner>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects;
