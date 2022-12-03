
import './Styles/global.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import { Skills } from './Pages/Skills';
import { AllRoutes } from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
     
     <div>
     <a id='skills'></a>
     <Skills/>
     </div>
    </div>
  );
}

export default App;
