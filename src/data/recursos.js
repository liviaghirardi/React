export const CATEGORIAS = ['Componentes', 'Estado', 'Ferramentas']

export const RECURSOS = [
  {
    id: 1,
    titulo: 'Componentes funcionais',
    categoria: 'Componentes',
    resumo: 'A interface é dividida em funções reutilizáveis.',
    detalhe:
      'Cada componente é uma função JavaScript que retorna JSX. Esta página é formada pelos componentes Header, Hero, ListaRecursos, RecursoCard e Footer.',
    exemplo: 'function Hero({ titulo }) { return <h1>{titulo}</h1> }',
  },
  {
    id: 2,
    titulo: 'Props',
    categoria: 'Componentes',
    resumo: 'Dados passados do componente pai para o filho.',
    detalhe:
      'Props são como parâmetros de um componente. O App envia o título para o Hero, e a lista envia cada recurso para o seu RecursoCard.',
    exemplo: '<RecursoCard recurso={recurso} aberto={aberto} />',
  },
  {
    id: 3,
    titulo: 'JSX',
    categoria: 'Componentes',
    resumo: 'HTML escrito dentro do JavaScript.',
    detalhe:
      'JSX permite descrever a interface com uma sintaxe parecida com HTML e misturar valores do JavaScript entre chaves { }.',
    exemplo: '<p>{recursos.length} recursos</p>',
  },
  {
    id: 4,
    titulo: 'useState',
    categoria: 'Estado',
    resumo: 'Guarda informações que mudam com a interação.',
    detalhe:
      'O hook useState cria uma variável de estado e uma função para alterá-la. Quando o estado muda, o React renderiza o componente de novo. Aqui ele guarda o filtro e o card aberto.',
    exemplo: 'const [filtro, setFiltro] = useState(null)',
  },
  {
    id: 5,
    titulo: 'Renderização condicional',
    categoria: 'Estado',
    resumo: 'Mostra ou esconde partes da tela.',
    detalhe:
      'Com && ou com o operador ternário, o React decide o que exibir. Os detalhes deste card só aparecem quando ele está aberto.',
    exemplo: '{aberto && <div className="detalhe">...</div>}',
  },
  {
    id: 6,
    titulo: 'Listas com map',
    categoria: 'Estado',
    resumo: 'Cria um elemento para cada item de um array.',
    detalhe:
      'O método map transforma cada recurso em um RecursoCard. A prop key ajuda o React a identificar qual item mudou.',
    exemplo: 'recursos.map((r) => <RecursoCard key={r.id} recurso={r} />)',
  },
  {
    id: 7,
    titulo: 'Virtual DOM',
    categoria: 'Ferramentas',
    resumo: 'Atualiza só o que mudou na página.',
    detalhe:
      'O React mantém uma cópia da interface em memória, compara com a versão anterior e aplica no navegador apenas as diferenças.',
    exemplo: '// React compara e atualiza só os cards filtrados',
  },
  {
    id: 8,
    titulo: 'Vite',
    categoria: 'Ferramentas',
    resumo: 'Cria e executa o projeto com rapidez.',
    detalhe:
      'O Vite gera o projeto, sobe um servidor de desenvolvimento com recarregamento instantâneo e faz o build otimizado para produção.',
    exemplo: 'npm create vite@latest meu-app -- --template react',
  },
]
