/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { type Variants } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react';
import {
  ContactContainer,
  ContactContent,
  ContactInfo,
  SectionTitle,
  ContactDescription,
  ContactList,
  ContactItem,
  ContactIcon,
  ContactText,
  ContactLabel,
  ContactValue,
  SocialLinks,
  SocialLink,
  ContactForm,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  FormMessage,
  LoadingSpinner,
} from './styles';

/**
 * Interface para dados do formulário
 */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Interface para informações de contato
 */
interface ContactInfo {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
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
 * Props do componente Contact
 */
interface ContactProps {
  className?: string;
}

/**
 * Componente Contact
 *
 * Seção de contato com:
 * - Informações de contato (email, telefone, localização)
 * - Links para redes sociais
 * - Formulário de contato funcional
 * - Validação de campos
 * - Estados de loading e feedback
 * - Animações de entrada escalonadas
 */
const Contact: React.FC<ContactProps> = ({ className }) => {
  // Estado do formulário
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Estados de controle
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  /**
   * Informações de contato
   */
  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: 'Email',
      value: 'luis.henrique@email.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (11) 99999-9999',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, Brasil',
    },
  ];

  /**
   * Links sociais
   */
  const socialLinks: SocialLinkData[] = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
    },
  ];

  /**
   * Função para lidar com mudanças nos campos do formulário
   * @param e - Evento de mudança
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Função para validar email
   * @param email - Email a ser validado
   * @returns True se válido
   */
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Função para validar formulário
   * @returns True se válido
   */
  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setMessage({ type: 'error', text: 'Nome é obrigatório.' });
      return false;
    }

    if (!formData.email.trim()) {
      setMessage({ type: 'error', text: 'Email é obrigatório.' });
      return false;
    }

    if (!isValidEmail(formData.email)) {
      setMessage({ type: 'error', text: 'Email inválido.' });
      return false;
    }

    if (!formData.subject.trim()) {
      setMessage({ type: 'error', text: 'Assunto é obrigatório.' });
      return false;
    }

    if (!formData.message.trim()) {
      setMessage({ type: 'error', text: 'Mensagem é obrigatória.' });
      return false;
    }

    return true;
  };

  /**
   * Função para enviar formulário
   * @param e - Evento de submit
   */
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    // Limpa mensagens anteriores
    setMessage(null);

    // Valida formulário
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simula envio do formulário (substitua por sua lógica real)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Sucesso
      setMessage({
        type: 'success',
        text: 'Mensagem enviada com sucesso! Retornarei em breve.',
      });

      // Limpa formulário
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      // Erro
      setMessage({
        type: 'error',
        text: 'Erro ao enviar mensagem. Tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
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
   * Variantes de animação para itens de contato
   */
  const contactItemVariants: Variants = {
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

  return (
    <ContactContainer id="contact" className={className}>
      <ContactContent>
        {/* Informações de contato */}
        <ContactInfo
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle variants={itemVariants}>Vamos Conversar</SectionTitle>

          <ContactDescription variants={itemVariants}>
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato comigo através dos canais abaixo ou envie uma
            mensagem diretamente pelo formulário.
          </ContactDescription>

          <ContactList variants={itemVariants}>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <ContactItem
                  key={info.label}
                  variants={contactItemVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                >
                  <ContactIcon>
                    <IconComponent size={20} />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>{info.label}</ContactLabel>
                    <ContactValue>{info.value}</ContactValue>
                  </ContactText>
                </ContactItem>
              );
            })}
          </ContactList>

          <SocialLinks variants={itemVariants}>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <SocialLink
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <IconComponent size={20} />
                </SocialLink>
              );
            })}
          </SocialLinks>
        </ContactInfo>

        {/* Formulário de contato */}
        <ContactForm
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
        >
          <FormTitle>Envie uma Mensagem</FormTitle>

          <FormGroup>
            <FormLabel htmlFor="name">Nome *</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Seu nome completo"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">Email *</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu@email.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="subject">Assunto *</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Assunto da mensagem"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Mensagem *</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Descreva seu projeto ou dúvida..."
              required
            />
          </FormGroup>

          {message && (
            <FormMessage
              $type={message.type}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {message.text}
            </FormMessage>
          )}

          <SubmitButton
            type="submit"
            disabled={isLoading}
            $loading={isLoading}
            whileHover={!isLoading ? { scale: 1.05 } : {}}
            whileTap={!isLoading ? { scale: 0.95 } : {}}
          >
            {isLoading ? (
              <>
                <LoadingSpinner />
                Enviando...
              </>
            ) : (
              <>
                <Send size={20} />
                Enviar Mensagem
              </>
            )}
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
