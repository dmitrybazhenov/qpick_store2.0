import { FC } from 'react'
import { productsMock } from '../../mocks/products'
import ProductSection from '../../components/blocks/ProductsSection/ProductSection'
import styles from './Catalog.module.scss'

const Catalog: FC = () => {
    return <main className={styles.main}>
        <ProductSection name='Наушники' products={productsMock.filter(item => item.tags.length === 0)} />
        <ProductSection name='Беспроводные наушники' products={productsMock.filter(item => item.tags.includes('wireless'))} />
    </main>
}

export default Catalog