import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Linguages from './components/Linguages';
import Certificates from './components/Certificates';


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Linguages />
      <About />
      <Linguages />
      <Certificates />
    </>
  );
}

export default App;