import PageHero from '../components/PageHero'
import ServicesGrid from '../sections/ServicesGrid'
import { pageMeta } from '../data/site'

export default function Services() {
  return (
    <>
      <PageHero {...pageMeta.services} />
      <ServicesGrid />
    </>
  )
}
