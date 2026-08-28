import PageHero from '../components/PageHero'
import TeamGrid from '../sections/TeamGrid'
import { pageMeta } from '../data/site'

export default function Team() {
  return (
    <>
      <PageHero {...pageMeta.team} />
      <TeamGrid />
    </>
  )
}
