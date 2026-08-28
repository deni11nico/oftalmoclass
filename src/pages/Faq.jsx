import PageHero from '../components/PageHero'
import FaqList from '../sections/FaqList'
import { pageMeta } from '../data/site'

export default function Faq() {
  return (
    <>
      <PageHero {...pageMeta.faq} />
      <FaqList />
    </>
  )
}
