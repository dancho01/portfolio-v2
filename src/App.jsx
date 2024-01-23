import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import { ModeProvider } from './context/context';


function App() {

  return (
    <ModeProvider>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </ModeProvider>
  );
}

export default App;
