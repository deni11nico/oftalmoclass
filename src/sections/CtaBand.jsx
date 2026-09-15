import { ArrowRight, FacebookLogo, InstagramLogo, Phone } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { clinic, routes } from '../data/site'

export default function CtaBand() {
  return (
    <section className="px-2 pb-4 sm:px-4">
      <div className="panel-light rounded-[2rem] px-8 py-14 sm:rounded-[2.75rem] sm:px-10 lg:py-16">
        <div className="shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="max-w-xl text-2xl leading-tight font-extrabold text-ink italic sm:text-3xl">
              Nu mai aștepta, fă o programare chiar acum
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              {clinic.address}. {clinic.hours}.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:shrink-0 lg:items-center lg:pl-12">
            <div className="flex flex-wrap gap-3 lg:justify-center">
              <Link
                to={routes.contact}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold bg-primary text-white transition-colors hover:bg-primary-dark"
              >
                Fă o programare
                <ArrowRight size={18} weight="bold" />
              </Link>
              {clinic.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="card-soft inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-forest transition-colors hover:bg-lime-soft"
                >
                  <Phone size={18} weight="fill" />
                  {phone}
                </a>
              ))}
            </div>

            <div className="flex gap-2">
              <a
                href={clinic.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="card-soft flex size-12 items-center justify-center rounded-full bg-white text-forest transition-colors hover:bg-primary hover:text-white"
              >
                <FacebookLogo size={22} weight="fill" />
              </a>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="card-soft flex size-12 items-center justify-center rounded-full bg-white text-forest transition-colors hover:bg-primary hover:text-white"
              >
                <InstagramLogo size={22} weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
