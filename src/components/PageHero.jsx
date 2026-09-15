import { CaretRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Badge } from './Ui'
import { routes } from '../data/site'
import { images } from '../data/images'

export default function PageHero({ badge, title, text, crumb }) {
  return (
    <section className="px-2 sm:px-4">
      <div className="panel-light relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.75rem]">
        <img
          src={images.heroBackdrop}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-1/2 object-cover opacity-[0.16] mix-blend-multiply lg:block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky via-sky/70 to-transparent" />

        <div className="relative shell pt-8 pb-14 sm:pt-10 sm:pb-16">
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
            <Link to={routes.home} className="transition-colors hover:text-primary">
              Acasă
            </Link>
            <CaretRight size={12} weight="bold" />
            <span className="text-ink/80">{crumb ?? badge}</span>
          </nav>

          <Badge tone="light">{badge}</Badge>

          <h1 className="mt-6 max-w-3xl text-3xl leading-[1.1] font-extrabold tracking-tight text-ink italic sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {text ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{text}</p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
