import Menu from './components/menu'
import Header from './components/header'
import Contenido from './components/contenido'
import Galeria from './components/galeria'
import Formulario from './components/formulario'

export default function App() {
  return(
    <section className="contenedor">
      <Menu />
      <Header />
      <Contenido />
      <Galeria />
      <Formulario />
    </section>
  );
}
