import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props): JSX.Element => (
  <div className={styles.container}>{children}</div>
)

export default Container
