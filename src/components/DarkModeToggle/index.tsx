import { useEffect, useState } from 'react'

import Container from '../Container'

import styles from './styles.module.css'

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsDarkMode(document.body.classList.contains('dark-mode'))
  }, [])

  const toggle = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark-mode', !isDarkMode)
    window.localStorage.setItem('prefersDarkMode', String(!isDarkMode))
  }

  return (
    <Container>
      <h4>Dark Mode</h4>
      <input
        className={styles.toggle}
        type="checkbox"
        checked={isDarkMode}
        onChange={toggle}
      />
    </Container>
  )
}

export default DarkModeToggle
