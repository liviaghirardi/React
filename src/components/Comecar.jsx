const COMANDOS = ['npm create vite@latest meu-app -- --template react', 'cd meu-app', 'npm install', 'npm run dev']

function Comecar() {
  return (
    <section className="conteudo cta" id="comecar">
      <div className="caixa">
        <div>
          <h2>Comece seu projeto React</h2>
          <p>Com o Node.js instalado, quatro comandos criam e executam um novo projeto com Vite.</p>
          <a className="botao" href="https://react.dev" target="_blank" rel="noopener">
            Documentação oficial
          </a>
        </div>
        <pre>
          <code>
            {COMANDOS.map((comando) => (
              <span key={comando}>$ {comando}</span>
            ))}
          </code>
        </pre>
      </div>
    </section>
  )
}

export default Comecar
