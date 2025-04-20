import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import styles from './MainLayout.module.scss'

const MainLayout: FC = () => {
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}

export default MainLayout