import './App.css'
import Loading from './components/Loading/Loading'
import Header from './components/Menu/Header'
import UpButton from './components/UpButton/UpButton'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Certificates from './components/Carousel/Certificates'
function App() {

  return (
    <>
      <Loading />
      <Header />
      <UpButton />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Skills />
    </>
  )
}

export default App
