import './App.css';
import About from './components/About';
import Header from './components/Header';
import "primeicons/primeicons.css";
import "../node_modules/primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dosis:wght@200..800&family=Inter:wght@100..900&family=Shadows+Into+Light&display=swap');
</style>

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
