import Nav from './components/Nav';
import Creative from './components/Creative';
import Story from './components/Story';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Results from './components/Results';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Creative />
      <Story />
      <Services />
      <Portfolio />
      <Results />
      <Contact />
    </div>
  );
}

export default App;
