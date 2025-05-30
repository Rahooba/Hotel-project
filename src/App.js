import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Rooms from './Components/Rooms ';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={  <Home/>}/>
      <Route path="/rooms" element={  <Rooms/>}/>
      <Route path="/services" element={  <Services/>}/>
      <Route path="/about" element={  <About/>}/>
      <Route path="/contact" element={  <Contact/>}/>
    </Routes>
    
  
    </>
  );
}

export default App;
