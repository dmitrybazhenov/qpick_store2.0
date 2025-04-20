import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/appStore'
import CartCard from '../../components/blocks/CartCard/CartCard'
import styles from './Cart.module.scss'
import Title from '../../components/ui/Title/Title'
import Price from '../../components/ui/Price/Price'
import Button from '../../components/ui/Button/Button'
import { Link } from 'react-router-dom'

const Cart: FC = () => {
    const { products } = useSelector((state: RootState) => state.cart)
    const totalPrice = products?.reduce((prev, item) => prev + item.totalPrice, 0)
    return <main className={styles.main}>
        <Title level={1} className={styles.title}>Корзина</Title>
        {products?.length ?
            <div className={styles.twoColumnWrapper}>
                <ol className={styles.products}>
                    {products && products.map(item => <li key={item.id}>
                        <CartCard product={item} />
                    </li>)}
                </ol>
                <div className={styles.total}>
                    <span className={styles.totalTopPanel}>
                        <Title level={2} className={styles.totalTitle}>Итого</Title>
                        <Price price={{ actual: totalPrice ? totalPrice : 0 }} color='dark' size='small'></Price>
                    </span>
                    <Button>Перейти к оформлению</Button>
                </div>
            </div>
            :
            <div className={styles.error}>
                <Title level={2} className={styles.errorTitle}>Корзина пуста!</Title>
                <Link to='/' className={styles.errorLink}><Button>В каталог</Button></Link>
            </div>}

    </main>
}

export default Cart