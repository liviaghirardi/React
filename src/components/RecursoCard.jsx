function RecursoCard({ recurso, aberto, onAlternar }) {
  return (
    <article className={`card ${aberto ? 'aberto' : ''}`}>
      <span className="categoria">{recurso.categoria}</span>
      <h3>{recurso.titulo}</h3>
      <p>{recurso.resumo}</p>

      {aberto && (
        <div className="detalhe">
          <p>{recurso.detalhe}</p>
          <code>{recurso.exemplo}</code>
        </div>
      )}

      <button onClick={() => onAlternar(recurso.id)}>
        {aberto ? 'Fechar ↑' : 'Ver detalhes →'}
      </button>
    </article>
  )
}

export default RecursoCard
