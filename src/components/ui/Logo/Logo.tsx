import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo: FC = () => {
    return <Link to='/' className={styles.link}>
        <img src='/logo.svg' alt='Логотип QPICK' />
    </Link>
}

export default Logo