import PageHero from '../components/PageHero'
import StoryContent from '../sections/StoryContent'
import { pageMeta } from '../data/site'

export default function Story() {
  return (
    <>
      <PageHero {...pageMeta.story} crumb="Povestea Oftalmoclass" />
      <StoryContent />
    </>
  )
}
