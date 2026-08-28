import PageHero from '../components/PageHero'
import EquipmentGrid from '../sections/EquipmentGrid'
import { pageMeta } from '../data/site'

export default function Equipment() {
  return (
    <>
      <PageHero {...pageMeta.equipment} />
      <EquipmentGrid />
    </>
  )
}
