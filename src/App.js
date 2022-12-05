
import './Styles/global.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import { Skills } from './Pages/Skills';
import { AllRoutes } from './Components/AllRoutes';
import { About } from './Pages/About';
import { Projects } from './Pages/Projects';

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
     
    </div>
  );
}

export default App;
