import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'
import { routes } from '../data/site'

export default function NotFound() {
  return (
    <section className="px-2 sm:px-4">
      <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[2rem] bg-mist px-8 py-24 text-center sm:rounded-[2.75rem]">
        <p className="text-sm font-semibold tracking-wide text-moss uppercase">Eroare 404</p>
        <h1 className="mt-5 max-w-xl text-3xl leading-tight font-extrabold text-ink italic sm:text-4xl">
          Pagina căutată nu există
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          Linkul poate fi vechi sau greșit scris. Te putem duce înapoi la pagina principală.
        </p>
        <Link
          to={routes.home}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-lime-bright"
        >
          <ArrowLeft size={18} weight="bold" />
          Înapoi acasă
        </Link>
      </div>
    </section>
  )
}
