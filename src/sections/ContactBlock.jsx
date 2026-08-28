import { useState } from 'react'
import {
  CheckCircle,
  Clock,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  PaperPlaneTilt,
  Phone,
} from '@phosphor-icons/react'
import { clinic } from '../data/site'

const mapQuery = encodeURIComponent(`${clinic.address}, România`)

const field =
  'w-full rounded-2xl bg-mist px-5 py-3.5 text-sm text-ink placeholder:text-muted/70 outline-none transition-colors focus:bg-stone'

function Detail({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center gap-4 rounded-[1.5rem] bg-mist p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
        <Icon size={20} weight="fill" />
      </span>
      <div>
        <p className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</p>
        <div className="mt-1.5 text-sm leading-relaxed font-medium text-ink">{children}</div>
      </div>
    </div>
  )
}

export default function ContactBlock() {
  const [sent, setSent] = useState(false)

  return (
    <section className="py-14 lg:py-16">
      <div className="shell">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="flex h-full flex-col">
            <h2 className="text-2xl leading-tight font-extrabold text-ink italic sm:text-3xl">
              Datele clinicii
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              Suntem aici pentru tine. Sună-ne sau scrie-ne câteva rânduri despre ce te deranjează și
              te contactăm pentru a stabili ora potrivită.
            </p>

            <div className="mt-8 grid flex-1 auto-rows-fr gap-3">
              <Detail icon={MapPin} label="Adresă">
                {clinic.address}
              </Detail>
              <Detail icon={Clock} label="Program">
                {clinic.hours}
              </Detail>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {clinic.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-[1.5rem] bg-forest px-5 py-4 text-base font-bold text-white transition-colors hover:bg-moss"
                >
                  <Phone size={18} weight="fill" className="shrink-0 text-lime" />
                  {phone}
                </a>
              ))}
            </div>

            <div className="mt-3 flex gap-2">
              <a
                href={clinic.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex size-12 items-center justify-center rounded-full bg-mist text-ink transition-colors hover:bg-lime"
              >
                <FacebookLogo size={22} weight="fill" />
              </a>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-12 items-center justify-center rounded-full bg-mist text-ink transition-colors hover:bg-lime"
              >
                <InstagramLogo size={22} weight="fill" />
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white p-7 shadow-[0_20px_50px_-30px_rgba(7,29,23,0.5)] sm:p-9">
            {sent ? (
              <div className="flex h-full min-h-96 flex-col items-center justify-center text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-lime text-ink">
                  <CheckCircle size={32} weight="fill" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold text-ink">Cererea a fost trimisă</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  Îți mulțumim. Te contactăm în cel mai scurt timp pentru confirmarea programării.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-full bg-mist px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-stone"
                >
                  Trimite altă cerere
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSent(true)
                }}
                className="grid gap-3"
              >
                <h3 className="text-xl font-bold text-ink">Formular de programare</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input className={field} placeholder="Nume și prenume" required />
                  <input className={field} type="email" placeholder="Adresă de email" required />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input className={field} type="tel" placeholder="Telefon" required />
                  <input className={field} type="date" aria-label="Data dorită" required />
                </div>
                <textarea
                  className={`${field} min-h-36 resize-none`}
                  placeholder="Descrie pe scurt problema"
                />
                <label className="flex items-start gap-3 py-2 text-xs leading-relaxed text-muted">
                  <input type="checkbox" required className="mt-0.5 size-4 shrink-0 accent-lime" />
                  Sunt de acord cu prelucrarea datelor personale în scopul programării.
                </label>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 text-sm font-semibold text-ink transition-colors hover:bg-lime-bright"
                >
                  <PaperPlaneTilt size={18} weight="fill" />
                  Trimite cererea
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] bg-mist">
          <iframe
            title={`Harta către ${clinic.name}, ${clinic.address}`}
            src={`https://maps.google.com/maps?q=${mapQuery}&z=16&hl=ro&output=embed`}
            className="h-72 w-full lg:h-80"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
