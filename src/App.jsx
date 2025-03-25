import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Logos from './components/Logos/Logos';
import Carousel from './components/Carousel/Carousel';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Logos />
      <About />
      <Logos />
      <Carousel />
      <Logos />
      <Projects />
      <Logos />
      <Contact />
      <Footer />
    </>
  );
}

export default App;