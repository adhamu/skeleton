import Container from '../Container'

import styles from './styles.module.scss'

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <Container>My App</Container>
  </header>
)

export default Header
