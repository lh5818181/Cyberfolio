import React, { useState } from 'react';
import { AnimatePresence, type Variants } from 'framer-motion';
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
  GalleryImage,
  ImageGalleryGrid,
  ProjectVideoWrapper,
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
  gallery?: string[]; // Array para novas imagens
  videoUrl?: string; // Link para o vídeo
  extraVideos?: { title: string; url: string }[]; // Novo campo
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
    { id: 'web', label: 'Web' },
    { id: 'Back-End', label: 'Back-End' },
    // { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' },
    { id: 'templates', label: 'Templates' },
  ];

  /**
   * Lista de projetos
   */
  const projects: Project[] = [
    {
      id: '1',
      title: 'Template Acelerador de Landing Pages',
      description:
        'Template configurável para criar landing pages de alta conversão com React, TypeScript e foco em performance e acessibilidade.',
      fullDescription:
        'Este é um template de landing page de código aberto, projetado para acelerar o desenvolvimento. Construído com React e TypeScript, ele é totalmente personalizável através de arquivos de configuração de tema e conteúdo. O template já vem com seções pré-construídas, design responsivo, otimizações de performance (lazy loading), práticas de acessibilidade (WCAG 2.1) e um formulário de contato inteligente com validação e integração para webhooks (Zapier, Make.com), permitindo que desenvolvedores lancem projetos de alta qualidade em tempo recorde.',
      technologies: [
        'React',
        'TypeScript',
        'Styled Components',
        'Acessibilidade',
        'Performance',
        'SEO',
      ],
      category: 'templates',
      githubUrl: 'https://github.com/devhenriquejs/templateLP',
      liveUrl: 'https://template-lp-two.vercel.app/',
      imageColor: 'url(/assets/images/template.png)',
    },
    {
      id: '2',
      title: 'Gerenciador de Contatos Moderno',
      description:
        'Aplicação completa para gerenciamento de contatos com adição, edição, busca e persistência de dados no navegador.',
      fullDescription:
        'Este projeto é uma demonstração de ponta a ponta de habilidades em front-end, construído com React 19 e TypeScript. A aplicação utiliza Redux Toolkit para um gerenciamento de estado global robusto e React Hook Form com Zod para validação de formulários eficiente e segura. A interface é enriquecida com animações fluidas e componentes acessíveis de Radix UI, proporcionando uma experiência de usuário (UX) superior. Os dados são salvos localmente, garantindo persistência, e o projeto inclui uma suíte de testes unitários com Jest para assegurar a qualidade do código.',
      technologies: [
        'React 19',
        'TypeScript',
        'Redux Toolkit',
        'Styled Components',
        'Framer Motion',
        'React Hook Form',
        'Jest',
      ],
      category: 'react',
      githubUrl: 'https://github.com/devhenriquejs/ContactListReact.git',
      liveUrl: 'https://contact-list-react-ten.vercel.app/',
      imageColor: 'url(/assets/images/Contact.png)',
    },
    {
      id: '3',
      title: 'Visualizador APOD',
      description:
        'Uma aplicação web que exibe a foto astronômica do dia da NASA, com trilha sonora sugerida pelo Spotify.',
      fullDescription:
        'Este projeto é um estudo de caso para aprimorar minhas habilidades em consumo de APIs, otimização de UI/UX e animações fluidas, solidificando meu conhecimento em React, TypeScript e Styled Components. Ele conecta a API da NASA para obter a foto do dia com a API do Spotify para sugerir uma trilha sonora relevante.',
      technologies: [
        'React',
        'TypeScript',
        'Styled Components',
        'Framer Motion',
        'NASA API',
        'Spotify API',
      ],
      category: 'web',
      githubUrl: 'https://github.com/lh5818181/Apod-visualizer-project',
      liveUrl: 'https://apod-visualizer-project.vercel.app/',
      imageColor: 'url(/assets/images/APOD.png)',
    },
    {
      id: '4',
      title: 'Cyberfolio - Portfólio Pessoal',
      description:
        'Desenvolvimento do meu portfólio pessoal com design cósmico, animações fluidas e foco em performance e experiência do usuário',
      fullDescription:
        'Este projeto é a minha vitrine profissional, desenvolvido do zero com React, TypeScript e Vite. O objetivo foi criar uma experiência imersiva e memorável, utilizando um tema cósmico com gradientes profundos e animações fluidas com Framer Motion. A arquitetura foi pensada para ser modular e escalável, com componentes estilizados via Styled Components. Grande atenção foi dada à performance, com lazy loading de componentes e otimizações de build, e à qualidade do código, com a implementação de ESLint, Prettier e checagem de tipos para garantir um desenvolvimento robusto e consistente.',
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Styled Components',
        'Framer Motion',
        'UX Design',
      ],
      category: 'design',
      githubUrl: 'https://github.com/lh5818181/Cyberfolio',
      liveUrl: 'https://cyberfolio-five.vercel.app/',
      imageColor: 'url(/assets/images/Portfolio.png)',
    },
    {
      id: '5',
      title: 'GitHub Design System',
      description:
        'Sistema de design modular e acessível inspirado no GitHub, com documentação interativa e testes automatizados.',
      fullDescription:
        'Uma biblioteca de componentes de alta fidelidade desenvolvida com foco em modularidade e escalabilidade. O projeto aplica a metodologia Atomic Design (separando Átomos, Moléculas e Organismos) e conta com documentação viva via Storybook 8. Possui 100% de cobertura de testes unitários com Jest e pipeline de CI/CD configurado no GitHub Actions para deploy automático. Desenvolvido como desafio prático avançado de UX/UI.',
      technologies: [
        'React',
        'TypeScript',
        'Storybook',
        'Jest',
        'Sass',
        'Atomic Design',
        'CI/CD',
      ],
      category: 'design',
      githubUrl: 'https://github.com/lh5818181/github-design-system',
      liveUrl: 'https://lh5818181.github.io/github-design-system/',
      imageColor: 'url(/assets/images/github-ds.png)',
    },
    {
      id: '6',
      title: 'BeTalent - API de Pagamentos Multi-Gateway',
      description:
        'API RESTful para gerenciamento de pagamentos com fallback automático entre gateways, autenticação via tokens e 50 testes funcionais passando.',
      fullDescription:
        'Sistema backend completo de pagamentos multi-gateway desenvolvido com AdonisJS e TypeScript. A API processa compras calculando o valor via backend a partir de múltiplos produtos e quantidades, tentando o pagamento no gateway de maior prioridade e fazendo fallback automático para o próximo em caso de falha. Conta com autenticação via Access Tokens, CRUD de produtos, histórico completo de transações por cliente, gerenciamento de gateways com ativação/desativação e reordenação de prioridade. O projeto foi desenvolvido com TDD, possui 50 testes funcionais cobrindo todos os endpoints, e está containerizado com Docker Compose incluindo MySQL e mock dos gateways.',
      technologies: [
        'AdonisJS',
        'TypeScript',
        'MySQL',
        'Docker',
        'TDD',
        'REST API',
        'JWT',
      ],
      category: 'Back-End',
      githubUrl: 'https://github.com/lh5818181/betalent-backend-challenge',
      liveUrl: '#',
      imageColor:
        'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    },
    {
      id: 'lacrei-saude',
      title: 'Lacrei Saúde - Front-End & Design System',
      description:
        'Contribuição voluntária de 144 horas focada na evolução do Design System Marsha e acessibilidade (WCAG).',
      fullDescription:
        'Durante o voluntariado na Lacrei Saúde, atuei no desenvolvimento front-end focado em acessibilidade e escalabilidade. Refatorei componentes críticos do Design System Marsha, como o InputText, e desenvolvi do zero o InputTime seguindo rigorosamente o Figma. Realizei uma auditoria completa de tokens de tipografia para eliminar débitos técnicos e estabilizei a infraestrutura de testes unitários com Jest e Testing Library, garantindo a qualidade das entregas.',
      technologies: [
        'React',
        'TypeScript',
        'Styled Components',
        'Jest',
        'Acessibilidade (WCAG)',
        'Design System',
      ],
      category: 'web',
      githubUrl: '#',
      liveUrl: 'https://lacreisaude.com.br/',
      imageColor: 'url(/assets/images/CertificadoLacrei.webp)',
      videoUrl:
        'https://res.cloudinary.com/dhononans/video/upload/v1776281221/layout_do_formulario_fwqo4i.mp4',
      extraVideos: [
        {
          title: 'Upload de Imagem de Perfil',
          url: 'https://res.cloudinary.com/dhononans/video/upload/v1776280833/imagem_do_perfil_wrsybh.mp4',
        },
        {
          title: 'Tratamento de Erros (400-409)',
          url: 'https://res.cloudinary.com/dhononans/video/upload/v1776281195/mensagem_do_erro_-_400-409_jfu8ht.mp4',
        },
      ],
      gallery: [
        '/assets/images/auditoriaTokens.webp',
        '/assets/images/inputTime.webp',
        '/assets/images/CertificadoLacrei.webp',
      ],
    },
    // {
    //   id: '6',
    //   title: 'Blog Platform',
    //   description:
    //     'Plataforma de blog com editor rich text e sistema de comentários.',
    //   fullDescription:
    //     'Plataforma completa de blog com editor rich text, sistema de comentários, categorização de posts, busca avançada, e painel administrativo para gerenciamento de conteúdo. Otimizada para SEO e performance.',
    //   technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    //   category: 'react',
    //   githubUrl: 'https://github.com',
    //   liveUrl: 'https://demo.com',
    //   imageColor: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    // },
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
      'Next.js': 'rgba(0, 0, 0, 0.1)',
      Express: 'rgba(68, 68, 68, 0.1)',
      'React Native': 'rgba(97, 218, 251, 0.1)',
      'Styled Components': 'rgba(219, 112, 147, 0.1)',
      'Framer Motion': 'rgba(0, 85, 255, 0.1)',
      Tailwind: 'rgba(6, 182, 212, 0.1)',
      'Acessibilidade (WCAG)': 'rgba(0, 255, 127, 0.1)',
      'Design System': 'rgba(255, 0, 255, 0.1)',
      Jest: 'rgba(153, 67, 79, 0.1)',
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
            Uma seleção dos meus principais projetos de estudo, onde apliquei os
            conhecimentos adquiridos em Front-End para criar aplicações
            interativas e funcionais.
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
                {/* Vídeo Principal ou Imagem de Capa */}
                {selectedProject.videoUrl ? (
                  <ProjectVideoWrapper>
                    <video
                      controls
                      poster={
                        selectedProject.id === 'lacrei-saude'
                          ? ''
                          : selectedProject.imageColor.replace(
                              /url\(|'|"\)/g,
                              ''
                            )
                      }
                    >
                      <source src={selectedProject.videoUrl} type="video/mp4" />
                    </video>
                  </ProjectVideoWrapper>
                ) : (
                  <ProjectImage $bgColor={selectedProject.imageColor}>
                    <ProjectImageIcon>
                      <Code size={64} />
                    </ProjectImageIcon>
                  </ProjectImage>
                )}

                <ProjectTitle
                  style={{
                    fontSize: '1.5rem',
                    marginTop: '1.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  {selectedProject.title}
                </ProjectTitle>

                <ProjectDescription
                  style={{
                    fontSize: '1rem',
                    WebkitLineClamp: 'unset',
                    display: 'block',
                    marginBottom: '1.5rem',
                  }}
                >
                  {selectedProject.fullDescription}
                </ProjectDescription>

                {/* Vídeos Extras (Específico para Lacrei ou outros com múltiplos vídeos) */}
                {selectedProject.extraVideos && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h4
                      style={{
                        color: '#00ffff',
                        marginBottom: '1rem',
                        fontSize: '1rem',
                      }}
                    >
                      Demonstrações de Funcionalidades:
                    </h4>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem',
                      }}
                    >
                      {selectedProject.extraVideos.map((video, idx) => (
                        <div key={idx}>
                          <p
                            style={{
                              fontSize: '0.8rem',
                              color: '#ccc',
                              marginBottom: '0.5rem',
                            }}
                          >
                            {video.title}
                          </p>
                          <ProjectVideoWrapper>
                            <video
                              src={video.url}
                              controls
                              muted
                              style={{ borderRadius: '8px' }}
                            />
                          </ProjectVideoWrapper>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Galeria de Imagens (Auditoria e Certificado) */}
                {selectedProject.gallery &&
                  selectedProject.gallery.length > 0 && (
                    <div style={{ marginBottom: '2rem' }}>
                      <h4
                        style={{
                          color: '#00ffff',
                          marginBottom: '1rem',
                          fontSize: '1rem',
                        }}
                      >
                        Galeria e Certificações:
                      </h4>
                      <ImageGalleryGrid>
                        {selectedProject.gallery.map((img, idx) => (
                          <GalleryImage
                            key={idx}
                            src={img}
                            alt={`Evidência ${idx + 1}`}
                            loading="lazy"
                          />
                        ))}
                      </ImageGalleryGrid>
                    </div>
                  )}

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
                    style={{ width: '50px', height: '50px' }}
                  >
                    <Github size={24} />
                  </ProjectLink>
                  <ProjectLink
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    $type="live"
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
