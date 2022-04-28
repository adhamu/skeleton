import Container from '../Container'

import styles from './styles.module.scss'

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <Container>Copyright &copy; {new Date().getFullYear()}</Container>
  </footer>
)

export default Footer
