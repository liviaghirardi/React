import Header from './components/Header'
import Hero from './components/Hero'
import ListaRecursos from './components/ListaRecursos'
import Comecar from './components/Comecar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero
          titulo="Recursos do React"
          subtitulo="Uma biblioteca JavaScript para criar interfaces com componentes, props e estado. Escolha uma categoria e abra um recurso para ver como ele funciona."
        />
        <ListaRecursos />
        <Comecar />
      </main>
      <Footer />
    </>
  )
}

export default App
