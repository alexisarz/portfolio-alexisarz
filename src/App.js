import './App.css';
import Header from './components/header';
import About from './components/aboutme';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/skills';
import Work from './components/work';
import Contact from './components/contact';
import GoUp from './components/common/goUp'

function App() {
  let titulo = 'Hola, soy Alexis. Bienvenido a mi portfolio.'

  return (
    <div className="App">
      <Header titulo={titulo}/>
      <br></br>
      <br></br>
      <About />
      <br></br>
      <br></br>
      <Skills/>
      <br></br>
      <br></br>
      <Work/>
      <br></br>
      <Contact/>
      <GoUp/>
    </div>
  );
}

export default App;
