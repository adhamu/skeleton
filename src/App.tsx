import Container from './components/Container'
import DarkModeToggle from './components/DarkModeToggle'
import Footer from './components/Footer'
import Header from './components/Header'

import './styles/main.css'

const App = () => (
  <>
    <Header />
    <DarkModeToggle />
    <br />
    <Container>Hello world!</Container>
    <Footer />
  </>
)

export default App
