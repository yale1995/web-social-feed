import styles from './Header.module.css'
import igniteLogo from '../assets/Logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt='Logotipo do Web Social Feed' />
        </header>
    )
}