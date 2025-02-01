import Container from '../Container'

import styles from './styles.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <Container>Copyright &copy; {new Date().getFullYear()}</Container>
  </footer>
)

export default Footer
