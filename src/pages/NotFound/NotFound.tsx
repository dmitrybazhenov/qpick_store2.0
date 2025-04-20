import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import Title from '../../components/ui/Title/Title'
import styles from './NotFound.module.scss'

const NotFound: FC = () => {
    const navigate = useNavigate()
    return <main className={styles.main}>
        <Title level={1} className={styles.title}>Кажется, такой страницы нет!</Title>
        <Button onClick={() => { navigate(-1) }}>Назад</Button>
    </main>
}

export default NotFound