import React, { useState, useEffect } from 'react';
import { type Variants } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ChevronUp } from 'lucide-react';
import {
  FooterWrapper,
  FooterContainer,
  FooterContent,
  FooterTop,
  FooterBrand,
  FooterLogo,
  FooterDescription,
  FooterSocials,
  FooterSocialLink,
  FooterColumn,
  FooterColumnTitle,
  FooterLinkList,
  FooterLinkItem,
  FooterLink,
  FooterBottom,
  Copyright,
  LegalLinks,
  LegalLink,
  BackToTopButton,
  FooterBackgroundEffect,
} from './styles';

/**
 * Interface para links de navegação
 */
interface FooterNavLink {
  label: string;
  href: string;
}

/**
 * Interface para links sociais
 */
interface SocialLinkData {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

/**
 * Props do componente Footer
 */
interface FooterProps {
  className?: string;
}

/**
 * Componente Footer
 *
 * Rodapé completo do site com:
 * - Informações da marca e descrição
 * - Links de navegação organizados em colunas
 * - Links para redes sociais
 * - Informações legais e copyright
 * - Botão de voltar ao topo
 * - Efeitos visuais decorativos
 * - Animações de entrada
 */
const Footer: React.FC<FooterProps> = ({ className }) => {
  // Estado para controlar visibilidade do botão "voltar ao topo"
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  /**
   * Links sociais
   */
  const socialLinks: SocialLinkData[] = [
    {
      icon: Github,
      href: 'https://github.com/lh5818181',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/luis-henrique-fullstack/',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
    },
    {
      icon: Mail,
      href: 'mailto:lh5818181@gmail.com',
      label: 'Email',
    },
  ];

  /**
   * Links de navegação rápida
   */
  const quickLinks: FooterNavLink[] = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ];

  /**
   * Links de serviços
   */
  const serviceLinks: FooterNavLink[] = [
    { label: 'Desenvolvimento Web', href: '#services' },
    { label: 'Aplicações Mobile', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
  ];

  /**
   * Effect para controlar visibilidade do botão "voltar ao topo"
   */
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Função para navegar para uma seção
   * @param href - Href do link (âncora)
   */
  const handleNavigation = (href: string): void => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  /**
   * Função para voltar ao topo
   */
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
   * Variantes de animação para links sociais
   */
  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  /**
   * Variantes de animação para o botão "voltar ao topo"
   */
  const backToTopVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <FooterWrapper>
      <FooterBackgroundEffect />

      <FooterContainer className={className}>
        <FooterContent>
          {/* Seção superior */}
          <FooterTop
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Coluna da marca */}
            <FooterBrand>
              <FooterLogo
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                onClick={() => handleNavigation('#home')}
              >
                LH.dev
              </FooterLogo>

              <FooterDescription>
                Desenvolvedor Full-Stack apaixonado por criar experiências
                digitais inovadoras e soluções tecnológicas que fazem a
                diferença.
              </FooterDescription>

              <FooterSocials>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <FooterSocialLink
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={socialVariants}
                      custom={index}
                      whileHover={{
                        scale: 1.2,
                        rotate: 5,
                        transition: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 20,
                        },
                      }}
                      whileTap={{ scale: 0.9 }}
                      title={social.label}
                    >
                      <IconComponent size={18} />
                    </FooterSocialLink>
                  );
                })}
              </FooterSocials>
            </FooterBrand>

            {/* Coluna de navegação rápida */}
            <FooterColumn>
              <FooterColumnTitle>Navegação</FooterColumnTitle>
              <FooterLinkList>
                {quickLinks.map((link, index) => (
                  <FooterLinkItem key={link.label}>
                    <FooterLink
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1, duration: 0.6 },
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        x: 5,
                        transition: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 20,
                        },
                      }}
                      onClick={() => handleNavigation(link.href)}
                    >
                      {link.label}
                    </FooterLink>
                  </FooterLinkItem>
                ))}
              </FooterLinkList>
            </FooterColumn>

            {/* Coluna de serviços */}
            <FooterColumn>
              <FooterColumnTitle>Serviços</FooterColumnTitle>
              <FooterLinkList>
                {serviceLinks.map((link, index) => (
                  <FooterLinkItem key={link.label}>
                    <FooterLink
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1, duration: 0.6 },
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        x: 5,
                        transition: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 20,
                        },
                      }}
                      onClick={() => handleNavigation(link.href)}
                    >
                      {link.label}
                    </FooterLink>
                  </FooterLinkItem>
                ))}
              </FooterLinkList>
            </FooterColumn>
          </FooterTop>

          {/* Seção inferior */}
          <FooterBottom
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Copyright>
              © {new Date().getFullYear()} Luís Henrique. Todos os direitos
              reservados.
            </Copyright>

            <LegalLinks>
              <LegalLink
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                onClick={() => handleNavigation('#privacy')}
              >
                Privacidade
              </LegalLink>
              <LegalLink
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                onClick={() => handleNavigation('#terms')}
              >
                Termos
              </LegalLink>
            </LegalLinks>
          </FooterBottom>
        </FooterContent>
      </FooterContainer>

      {/* Botão voltar ao topo */}
      {showBackToTop && (
        <BackToTopButton
          variants={backToTopVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={{
            scale: 1.1,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          title="Voltar ao topo"
        >
          <ChevronUp size={24} />
        </BackToTopButton>
      )}
    </FooterWrapper>
  );
};

export default Footer;
