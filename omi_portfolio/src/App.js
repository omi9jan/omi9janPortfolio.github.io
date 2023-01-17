import './App.css';
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import TechStack from './Components/TechStack';
import Education from './Components/Education';
import Project from './Components/Project';
import Github from './Components/Github';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <TechStack/>
      <Education/>
      <Project/>
      <Github/>
      <Contact/>
    </div>
  );
}

export default App;
