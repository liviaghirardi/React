import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Landing Page - React</h1>
        <p>Projeto Desenvolvido para a Atividade Prática de Frameworks Front-end (SENAI)</p>
      </header>

      <main className="content">
        <section className="card">
          <h2>Sobre o Projeto</h2>
          <p>Esta aplicação foi desenvolvida utilizando <strong>React</strong> e Vite, cumprindo os requisitos de componentização e reatividade.</p>
        </section>

        <section className="card">
          <h2>Recursos Utilizados</h2>
          <ul>
            <li>Arquitetura baseada em Componentes Funcionais</li>
            <li>Gerenciamento de Estado com Hooks</li>
            <li>Ferramenta de Build rápida com Vite</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 - Aluna: Lívia Ghirardi</p>
      </footer>
    </div>
  );
}

export default App;