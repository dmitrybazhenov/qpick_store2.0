import { FC } from 'react'
import styles from './Counter.module.scss'
import { ICounterProps } from './Counter.interface'

const Counter: FC<ICounterProps> = ({ decreaseHandler, increaseHandler, value }) => {
    return <div className={styles.container}>
        <button className={styles.button} onClick={decreaseHandler}>
            <img src='/icons/minus.svg' alt='Убавить' className={styles.img} />
        </button>
        <span className={styles.value}>{value}</span>
        <button className={styles.button} onClick={increaseHandler}>
            <img src='/icons/plus.svg' alt='Добавить' className={styles.img} />
        </button>
    </div>
}

export default Counter