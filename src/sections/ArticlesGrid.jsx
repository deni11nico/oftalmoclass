import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { articles, routes } from '../data/site'

export default function ArticlesGrid() {
  return (
    <section className="py-14 lg:py-16">
      <div className="shell">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="overflow-hidden rounded-[1.75rem] bg-mist">
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-7">
                <h2 className="text-base leading-snug font-bold text-ink">{article.title}</h2>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 flex flex-col items-start gap-6 rounded-[1.75rem] bg-mist p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl leading-tight font-extrabold text-ink italic">
              Ai o întrebare despre unul dintre subiecte?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Medicii clinicii îți explică pe îndelete la consultație. Până atunci, poți găsi
              răspunsuri la cele mai frecvente nelămuriri sau ne poți scrie direct.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={routes.faq}
              className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-lime-bright"
            >
              Întrebări frecvente
              <ArrowRight size={18} weight="bold" />
            </Link>
            <Link
              to={routes.contact}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-stone"
            >
              Scrie-ne
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
