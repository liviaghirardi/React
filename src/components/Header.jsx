const LINKS = [
  { texto: 'Recursos', ancora: '#recursos' },
  { texto: 'Começar', ancora: '#comecar' },
]

function Header() {
  return (
    <header className="navbar">
      <div className="conteudo navbar-conteudo">
        <a className="marca" href="#">react-landing</a>
        <nav>
          {LINKS.map((link) => (
            <a key={link.ancora} href={link.ancora}>
              {link.texto}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
