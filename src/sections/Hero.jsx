import {
  ArrowRight,
  Clock,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Ui'
import { clinic, heroCards, routes } from '../data/site'
import { images } from '../data/images'

function InfoCard({ title, text, items }) {
  const entries = items ?? [{ title, text }]

  return (
    <div className="flex h-full flex-col justify-center gap-5 rounded-3xl bg-ink/70 p-6 backdrop-blur-md sm:p-7">
      {entries.map((entry) => (
        <div key={entry.title}>
          <h2 className="text-lg font-bold text-lime">{entry.title}</h2>
          <p className="mt-2.5 text-sm leading-relaxed text-white/65">{entry.text}</p>
        </div>
      ))}
    </div>
  )
}

function PhotoCard({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-3xl">
      <img src={src} alt={alt} className="h-full min-h-44 w-full object-cover" loading="eager" />
    </div>
  )
}

export default function Hero() {
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

        <div className="relative shell pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
            <div>
              <h1 className="text-3xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Îngrijire <span className="text-lime">oftalmologică</span> pentru
                <br className="hidden sm:block" /> fiecare <span className="text-lime">membru</span>{' '}
                al familiei
              </h1>

              <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-white/70 sm:text-base">
                La OftalmoClass se practică medicina bazată pe dovezi. Am pornit clinica din dorința
                de a aduce în Oradea standarde occidentale în oftalmologie și îngrijire plină de
                compasiune, de la primul consult până la controlul de rutină.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button as={Link} to={routes.contact}>
                  Fă o programare
                  <ArrowRight size={18} weight="bold" />
                </Button>
                <Button as={Link} to={routes.services} variant="ghost">
                  Vezi serviciile
                </Button>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-white/70">
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={18} weight="fill" className="shrink-0 text-lime" />
                    {clinic.address}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock size={18} weight="fill" className="shrink-0 text-lime" />
                    {clinic.hours}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  {clinic.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-lime"
                    >
                      <Phone size={18} weight="fill" className="shrink-0 text-lime" />
                      {phone}
                    </a>
                  ))}

                  <span className="flex gap-2">
                    <a
                      href={clinic.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="flex size-9 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-lime hover:text-ink"
                    >
                      <FacebookLogo size={18} weight="fill" />
                    </a>
                    <a
                      href={clinic.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="flex size-9 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-lime hover:text-ink"
                    >
                      <InstagramLogo size={18} weight="fill" />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <InfoCard {...heroCards[0]} />
              <PhotoCard src={images.heroCardA} alt="Consultație oftalmologică pediatrică" />
              <PhotoCard
                src={images.heroCardB}
                alt="Cabinet de diagnostic cu OCT RevoNX și câmp vizual Optopol"
              />
              <InfoCard {...heroCards[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
