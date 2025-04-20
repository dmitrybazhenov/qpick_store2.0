import { FC } from 'react'
import styles from './CartCard.module.scss'
import classNames from 'classnames'
import { ICartCardProps } from './CartCard.interface'
import { productsMock } from '../../../mocks/products'
import Title from '../../ui/Title/Title'
import Price from '../../ui/Price/Price'
import Counter from '../../ui/Counter/Counter'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/appStore'
import { cartActions } from '../../../store/slices/cartSlice'

const CartCard: FC<ICartCardProps> = ({ product }) => {
    const data = productsMock[product.id]
    const dispatch = useDispatch<AppDispatch>()

    return <div className={styles.card}>
        <div className={classNames(styles.column, styles.first)}>
            <img src={data.img} alt={`Фотография ${data.name}`} className={styles.img} />
            <Counter increaseHandler={() => { dispatch(cartActions.addToCart({ id: product.id })) }}
                decreaseHandler={() => { dispatch(cartActions.decreaseProductInCart({ id: product.id })) }}
                value={product.quantity} />
        </div>

        <div className={styles.column}>
            <Title level={2} className={styles.title}>{data.name}</Title>
            <Price price={{ actual: data.price.actual }} color='light' size='small' />
        </div>

        <div className={classNames(styles.column, styles.last)}>
            <button className={styles.button} onClick={() => { dispatch(cartActions.deleteProductFromCart({ id: product.id })) }}>
                <img src='/icons/trash.svg' alt='Удалить из корзины' />
            </button>
            <Price price={{ actual: product.totalPrice }} color='dark' size='small'></Price>
        </div>
    </div>
}

export default CartCard