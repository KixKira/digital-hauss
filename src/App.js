import './App.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero/Hero';
import About from './components/UI/About/About';
import Services from './components/UI/Services/Services';
import Projects from './components/UI/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
