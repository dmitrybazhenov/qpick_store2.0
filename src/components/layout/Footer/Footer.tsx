import { FC } from 'react'
import styles from './Footer.module.scss'
import Logo from '../../ui/Logo/Logo'
import SetLocales from '../../ui/SetLocales/SetLocales'
import { locales, navigateLinks, socialLinks } from './Footer.data'
import SocialLink from '../../ui/SocialLink/SocialLink'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
    return <footer className={styles.footer}>
        <Logo />
        <div className={styles.twoColumnWrapper}>
            <ul className={styles.mainNav}>
                {navigateLinks.main.map(item => <li key={item.name}>
                    <Link to={item.link}>{item.name}</Link>
                </li>)}
            </ul>
            <ul className={styles.additionalNav}>
                {navigateLinks.additional.map(item => <li key={item.name}>
                    <Link to={item.link}>{item.name}</Link>
                </li>)}
                <li>
                    <SetLocales items={locales} />
                </li>
            </ul>
        </div>
        <ul className={styles.socialLinks}>
            {socialLinks.map(item => <li key={item.icon}>
                <SocialLink {...item} />
            </li>)}
        </ul>
    </footer>
}

export default Footer