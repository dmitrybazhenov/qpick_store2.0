import { FC } from 'react'
import { Iproduct } from '../../../interfaces/product.interface'
import Title from '../../ui/Title/Title'
import Price from '../../ui/Price/Price'
import Rate from '../../ui/Rate/Rate'
import styles from './ProductCard.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/appStore'
import { cartActions } from '../../../store/slices/cartSlice'

const ProductCard: FC<Iproduct> = ({ id, img, name, price, rating }) => {
    const dispatch = useDispatch<AppDispatch>()
    return <div className={styles.card}>
        <img src={img} alt={`Фото ${name}`} className={styles.img} />
        <div className={styles.line}>
            <Title className={styles.title} level={3}>{name}</Title>
            <Price price={price}></Price>
        </div >
        <div className={styles.line}>
            <Rate rate={rating} />
            <button className={styles.button}
                onClick={() => { dispatch(cartActions.addToCart({ id, price: price.actual })) }}>
                Купить
            </button>
        </div>

    </div >
}

export default ProductCard