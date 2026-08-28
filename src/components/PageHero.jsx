import { CaretRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Badge } from './Ui'
import { routes } from '../data/site'
import { images } from '../data/images'

export default function PageHero({ badge, title, text, crumb }) {
  return (
    <section className="px-2 sm:px-4">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink sm:rounded-[2.75rem]">
        <img
          src={images.heroBackdrop}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-forest/90 to-moss/75" />

        <div className="relative shell pt-8 pb-14 sm:pt-10 sm:pb-16">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/55">
            <Link to={routes.home} className="transition-colors hover:text-lime">
              Acasă
            </Link>
            <CaretRight size={12} weight="bold" />
            <span className="text-white/80">{crumb ?? badge}</span>
          </nav>

          <Badge tone="dark">{badge}</Badge>

          <h1 className="mt-6 max-w-3xl text-3xl leading-[1.1] font-extrabold tracking-tight text-white italic sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {text ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">{text}</p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
