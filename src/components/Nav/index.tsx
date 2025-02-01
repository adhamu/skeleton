import { Link, useLocation } from 'react-router-dom'

import Container from '../Container'

import styles from './styles.module.css'

const links = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
  },
]

const Nav = () => {
  const { pathname } = useLocation()

  return (
    <Container>
      <nav className={styles.nav}>
        <ul>
          {links.map(({ path, label }) => (
            <li key={path} className={pathname === path ? styles.active : ''}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  )
}

export default Nav
