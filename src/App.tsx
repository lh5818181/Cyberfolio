import React from 'react';
import './App.css';

// Importando os componentes
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Componente principal da aplicação
 *
 * Estrutura completa do portfólio:
 * - Header: Navegação fixa no topo
 * - Hero: Seção de apresentação inicial com efeito de digitação
 * - About: Informações pessoais, estatísticas e habilidades
 * - Projects: Portfólio de projetos com filtros e modal
 * - Contact: Formulário e informações de contato
 * - Footer: Rodapé com links e informações
 */
const App: React.FC = () => {
  return (
    <div className="App">
      {/* Navegação principal */}
      <Header />

      {/* Conteúdo principal */}
      <main>
        {/* Seção de apresentação */}
        <Hero />

        {/* Seção sobre */}
        <About />

        {/* Seção de projetos */}
        <Projects />

        {/* Seção de contato */}
        <Contact />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default App;
