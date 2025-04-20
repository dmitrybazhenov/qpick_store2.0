import { FC } from 'react'
import { IRateProps } from './Rate.interface'
import styles from './Rate.module.scss'

const Rate: FC<IRateProps> = ({ rate }) => {
    return <span className={styles.rate}>{rate}</span>
}

export default Rate