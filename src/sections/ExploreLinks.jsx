import { ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/Ui'
import { routes } from '../data/site'
import { images } from '../data/images'

const cards = [
  {
    label: 'Servicii medicale',
    text: 'Consultații, investigații imagistice, tratamente și mici intervenții.',
    to: routes.services,
    image: images.heroCardA,
  },
  {
    label: 'Echipamente medicale',
    text: 'OCT și Angio-OCT, câmp vizual, laser YAG și restul dotărilor.',
    to: routes.equipment,
    image: images.heroCardB,
  },
  {
    label: 'Produse',
    text: 'Rame, lentile, ochelari de soare și lentile de contact.',
    to: routes.products,
    image: images.optics,
  },
]

export default function ExploreLinks() {
  return (
    <section className="py-14 lg:py-16">
      <div className="shell">
        <Badge tone="soft">Ce găsești la clinică</Badge>
        <h2 className="mt-6 max-w-2xl text-3xl leading-[1.1] font-extrabold tracking-tight text-ink italic sm:text-4xl">
          Tot ce ține de ochii tăi, într-un singur loc
        </h2>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group overflow-hidden rounded-[1.75rem] bg-mist transition-colors hover:bg-stone"
            >
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-7">
                <h3 className="text-lg font-bold text-ink">{card.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{card.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-moss">
                  Vezi pagina
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
