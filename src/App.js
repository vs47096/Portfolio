import './App.css';
import About from './components/About';
import Header from './components/Header';
import "primeicons/primeicons.css";
import "../node_modules/primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import Skills from './components/Skills';
import Services from './components/Services';
import Project from './components/Project';
<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap');
</style>

function App() {
  return (
    <div className="App">
      {/* <Header />
      <About />
      <Skills />
      <Services /> */}
      <Project />
    </div>
  );
}

export default App;
