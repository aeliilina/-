import  classes from './App.module.scss'
import MainPage from './pages/Main.Page'
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HeroContainer from './components/HeroContainer'


function App () {


  return (
    <>
    <Container>
    <Header />
    </Container>
    <HeroContainer>
    <Hero />
    </HeroContainer>
    <MainPage />
    {/* <Footer /> */}
    </>
  )
}

export default App
