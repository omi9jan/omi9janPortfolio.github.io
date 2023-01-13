import './App.css';
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import TechStack from './Components/TechStack';
import Education from './Components/Education';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <TechStack/>
      <Education/>
    </div>
  );
}

export default App;
