import { BrowserRouter, Route, Routes } from 'react-router'

import DarkModeToggle from './components/DarkModeToggle'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './screens/About'
import Home from './screens/Home'

const App = () => (
  <BrowserRouter>
    <Header />
    <Nav />
    <DarkModeToggle />
    <br />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App
