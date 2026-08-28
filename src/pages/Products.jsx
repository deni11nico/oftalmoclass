import PageHero from '../components/PageHero'
import ProductsGrid from '../sections/ProductsGrid'
import { pageMeta } from '../data/site'

export default function Products() {
  return (
    <>
      <PageHero {...pageMeta.products} />
      <ProductsGrid />
    </>
  )
}
