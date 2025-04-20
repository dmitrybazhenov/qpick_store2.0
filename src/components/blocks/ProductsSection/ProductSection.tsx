import { FC } from 'react'
import { IProductSectionProps } from './ProductSection.interface'
import Title from '../../ui/Title/Title'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductSection.module.scss'

const ProductSection: FC<IProductSectionProps> = ({ products, name }) => {
    return <section className={styles.section}>
        <Title level={2} className={styles.title}>{name}</Title>
        <ol className={styles.products}>
            {products.map(item => <li key={item.id}>
                <ProductCard {...item} />
            </li>)}
        </ol>
    </section>
}

export default ProductSection