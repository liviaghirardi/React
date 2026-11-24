function Hero({ titulo, subtitulo }) {
  return (
    <section className="hero">
      <div className="conteudo hero-conteudo">
        <p className="etiqueta">Projeto 01 · React</p>
        <h1>{titulo}</h1>
        {subtitulo && <p className="subtitulo">{subtitulo}</p>}
      </div>
    </section>
  )
}

export default Hero
