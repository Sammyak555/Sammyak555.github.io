
import './Styles/global.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import { Skills } from './Pages/Skills';
import { AllRoutes } from './Components/AllRoutes';
import { About } from './Pages/About';
import { Projects } from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <About/>
      <Projects/>
     <div>
     <a id='skills'></a>
     <Skills/>
     </div>
     <Contact/>
    </div>
  );
}

export default App;
