import { Link } from 'react-router-dom'
import { Clock, FacebookLogo, InstagramLogo, MapPin, Phone } from '@phosphor-icons/react'
import { clinic, routes } from '../data/site'
import { images } from '../data/images'

const columns = [
  {
    title: 'Clinica',
    links: [
      { label: 'Acasă', to: routes.home },
      { label: 'Povestea Oftalmoclass', to: routes.story },
      { label: 'Echipa', to: routes.team },
      { label: 'Galerie Media', to: routes.gallery },
    ],
  },
  {
    title: 'Servicii',
    links: [
      { label: 'Servicii medicale', to: routes.services },
      { label: 'Echipamente medicale', to: routes.equipment },
      { label: 'Produse', to: routes.products },
    ],
  },
  {
    title: 'Informații',
    links: [
      { label: 'Articole medicale', to: routes.articles },
      { label: 'Întrebări frecvente', to: routes.faq },
      { label: 'Contact', to: routes.contact },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="pt-16 pb-10">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
          <div className="max-w-sm">
            <Link to={routes.home}>
              <img src={images.logo} alt="OftalmoClass" className="h-9 w-auto" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Clinică de oftalmologie în Oradea. Medicina bazată pe dovezi, standarde occidentale și
              îngrijire plină de compasiune.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={clinic.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex size-11 items-center justify-center rounded-full bg-mist text-forest transition-colors hover:bg-primary hover:text-white"
              >
                <FacebookLogo size={20} weight="fill" />
              </a>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-11 items-center justify-center rounded-full bg-mist text-forest transition-colors hover:bg-primary hover:text-white"
              >
                <InstagramLogo size={20} weight="fill" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title}>
              <h2 className="text-xs font-semibold tracking-wide text-muted uppercase">
                {column.title}
              </h2>
              <ul className="mt-5 grid gap-3">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm font-medium text-ink/75 transition-colors hover:text-moss"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-[1.5rem] bg-mist px-7 py-6 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin size={18} weight="fill" className="mt-0.5 shrink-0 text-moss" />
            <p className="text-sm leading-relaxed text-ink/80">{clinic.address}</p>
          </div>
          <div className="flex flex-wrap items-start gap-x-6 gap-y-2">
            {clinic.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-start gap-3 text-sm font-medium text-ink/80 transition-colors hover:text-moss"
              >
                <Phone size={18} weight="fill" className="mt-0.5 shrink-0 text-moss" />
                {phone}
              </a>
            ))}
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} weight="fill" className="mt-0.5 shrink-0 text-moss" />
            <p className="text-sm leading-relaxed text-ink/80">{clinic.hours}</p>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted">
          &copy; {new Date().getFullYear()} {clinic.name}. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  )
}
