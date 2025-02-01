import styles from './styles.module.css'

import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Container = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
)

export default Container
