import PageHero from '../components/PageHero'
import ArticlesGrid from '../sections/ArticlesGrid'
import { pageMeta } from '../data/site'

export default function Articles() {
  return (
    <>
      <PageHero {...pageMeta.articles} />
      <ArticlesGrid />
    </>
  )
}
