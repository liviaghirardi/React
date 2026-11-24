import { useState } from 'react'
import { CATEGORIAS, RECURSOS } from '../data/recursos'
import RecursoCard from './RecursoCard'

function ListaRecursos() {
  // Estado: categoria escolhida e card aberto
  const [filtro, setFiltro] = useState(null)
  const [aberto, setAberto] = useState(null)

  const filtrados = filtro ? RECURSOS.filter((r) => r.categoria === filtro) : RECURSOS

  function selecionar(categoria) {
    setFiltro(categoria)
    setAberto(null)
  }

  function alternar(id) {
    setAberto((atual) => (atual === id ? null : id))
  }

  return (
    <section className="conteudo recursos" id="recursos">
      <h2>Explore os recursos</h2>

      <div className="filtros">
        <button className={filtro === null ? 'ativo' : ''} onClick={() => selecionar(null)}>
          Todos
        </button>
        {CATEGORIAS.map((categoria) => (
          <button
            key={categoria}
            className={filtro === categoria ? 'ativo' : ''}
            onClick={() => selecionar(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <p className="contador">
        {filtrados.length} {filtrados.length === 1 ? 'recurso' : 'recursos'}
      </p>

      <div className="grade">
        {filtrados.map((recurso) => (
          <RecursoCard
            key={recurso.id}
            recurso={recurso}
            aberto={aberto === recurso.id}
            onAlternar={alternar}
          />
        ))}
      </div>
    </section>
  )
}

export default ListaRecursos
