import { FC } from 'react'
import Logo from '../../ui/Logo/Logo'
import LinkWithCounter from '../../ui/LinkWithCounter/LinkWithCounter'
import styles from './Header.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/appStore'

const Header: FC = () => {
    const { products } = useSelector((state: RootState) => state.cart)
    return <header className={styles.header}>
        <Logo />
        <nav className={styles.nav}>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <LinkWithCounter icon='/icons/heart.svg' to='/' counter={0} />
                </li>
                <li className={styles.link}>
                    <LinkWithCounter icon='/icons/cart.svg' to='/cart' counter={products?.length} />
                </li>
            </ul>
        </nav>
    </header>
}

export default Header