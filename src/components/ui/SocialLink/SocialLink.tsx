import { FC } from 'react'
import { ISocialLinkProps } from './SocialLink.interface'
import styles from './SocialLink.module.scss'

const SocialLink: FC<ISocialLinkProps> = ({ icon, name, ...props }) => {
    return <a {...props} target='_blank' className={styles.link}>
        <img src={icon} alt={`Ссылка на наш ${name}`} />
    </a>
}

export default SocialLink