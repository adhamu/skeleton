import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'

import './scss/main.scss'

const App = (): JSX.Element => (
  <>
    <Header />
    <Container>Hello world!</Container>
    <Footer />
  </>
)

export default App
