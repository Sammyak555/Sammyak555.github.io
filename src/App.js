
import './Styles/global.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Skills from './Pages/Skills';
import { Projects } from './Pages/Projects';
import Contact from './Pages/Contact';

import Statistics from './Pages/Statistics';

import { About } from './Pages/About';

import GitCalender, { Calendar } from './Pages/GitCalender';
import { AllRoutes } from './Components/AllRoutes';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div >
        <Header /></div>
      <div className='boxes'>
        <About /></div>
      <div >
        <Projects /></div>
      <div className='boxes'>
        <Skills />
      </div>
      <div className='boxes'>
        <Statistics /></div>
        <GitCalender/>
      <div className='boxes'>
        <Contact /></div>
        <Footer />
      <AllRoutes />
      
    </div>

  );
}

export default App;
