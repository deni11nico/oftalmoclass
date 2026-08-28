import PageHero from '../components/PageHero'
import GalleryGrid from '../sections/GalleryGrid'
import { pageMeta } from '../data/site'

export default function Gallery() {
  return (
    <>
      <PageHero {...pageMeta.gallery} crumb="Galerie Media" />
      <GalleryGrid />
    </>
  )
}
