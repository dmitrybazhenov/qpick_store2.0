import { FC } from 'react'
import { IPriceProps } from './Price.interface'
import styles from './Price.module.scss'
import classNames from 'classnames'

const Price: FC<IPriceProps> = ({ price, color = 'accent', size = 'normal' }) => {
    return <div className={styles.container}>
        <strong className={classNames(styles.actualPrice,
            { [`${styles.dark}`]: color === 'dark' },
            { [`${styles.light}`]: color === 'light' },
            { [`${styles.small}`]: size === 'small' })}>
            {price.actual}&nbsp;₽
        </strong>
        {price.old && <span className={classNames(styles.oldPrice,
            { [`${styles.dark}`]: color === 'dark' },
            { [`${styles.light}`]: color === 'light' },
            { [`${styles.small}`]: size === 'small' })}>
            {price.old}&nbsp;₽
        </span>}
    </div>
}


export default Price