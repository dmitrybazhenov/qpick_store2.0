import { FC } from 'react'
import { ISetLocalesProps } from './SetLocales.interface'
import styles from './SetLocales.module.scss'
import classNames from 'classnames'

const SetLocales: FC<ISetLocalesProps> = ({ items }) => {
    return items.length && <ol className={styles.locales}>
        {items.map((item, index) => <li key={item.locale}>
            <button className={classNames(styles.locale,
                // тут небольшой костыль для выделения именно 1 локали 
                // когда функции локалей добавятся не составит труда 
                // поменять условия для выделения
                { [`${styles.active}`]: index === 0 })}>
                {item.name}
            </button>
        </li>)}
    </ol>
}

export default SetLocales