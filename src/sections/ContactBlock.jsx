import { useEffect, useRef, useState } from 'react'
import {
  CheckCircle,
  Clock,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  PaperPlaneTilt,
  Phone,
  Sparkle,
} from '@phosphor-icons/react'
import { clinic } from '../data/site'
import { PREFILL_EVENT, takePrefill } from '../lib/prefill'

const mapQuery = encodeURIComponent(`${clinic.address}, România`)

// Optional: when a Web3Forms access key is configured the form really sends.
// Without it the form keeps its original behaviour (local confirmation only).
const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY ?? '').trim()

const EMPTY = { name: '', email: '', phone: '', date: '', message: '' }

const field =
  'w-full rounded-2xl bg-mist px-5 py-3.5 text-sm text-ink placeholder:text-muted/70 outline-none transition-colors focus:bg-stone'

function Detail({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center gap-4 rounded-[1.5rem] bg-mist p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-lime text-forest">
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
  // Data handed over by the chatbot, if we arrived here from it.
  const [initialPrefill] = useState(() => takePrefill())
  const [values, setValues] = useState(() => ({ ...EMPTY, ...(initialPrefill ?? {}) }))
  const [prefilled, setPrefilled] = useState(Boolean(initialPrefill))
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorText, setErrorText] = useState('')
  const formRef = useRef(null)

  // The chatbot may also hand over data while this page is already open.
  useEffect(() => {
    const apply = (event) => {
      setValues((prev) => ({ ...prev, ...event.detail }))
      setPrefilled(true)
      setStatus('idle')
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    window.addEventListener(PREFILL_EVENT, apply)
    return () => window.removeEventListener(PREFILL_EVENT, apply)
  }, [])

  useEffect(() => {
    if (initialPrefill) formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [initialPrefill])

  const update = (key) => (event) => setValues((prev) => ({ ...prev, [key]: event.target.value }))

  async function handleSubmit(event) {
    event.preventDefault()
    if (!WEB3FORMS_KEY) {
      setStatus('sent')
      return
    }

    setStatus('sending')
    setErrorText('')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Cerere de programare: ${values.name}`,
          from_name: 'Site OftalmoClass',
          name: values.name,
          email: values.email,
          phone: values.phone,
          date: values.date,
          message: values.message,
          botcheck: '',
        }),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok || data.success === false) throw new Error(data.message || 'Trimiterea a eșuat.')
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setErrorText(err.message || 'Trimiterea a eșuat. Vă rugăm să ne sunați.')
    }
  }

  const resetForm = () => {
    setValues(EMPTY)
    setPrefilled(false)
    setStatus('idle')
  }

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
                  <Phone size={18} weight="fill" className="shrink-0 text-lime-bright" />
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
                className="flex size-12 items-center justify-center rounded-full bg-mist text-forest transition-colors hover:bg-primary hover:text-white"
              >
                <FacebookLogo size={22} weight="fill" />
              </a>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-12 items-center justify-center rounded-full bg-mist text-forest transition-colors hover:bg-primary hover:text-white"
              >
                <InstagramLogo size={22} weight="fill" />
              </a>
            </div>
          </div>

          <div ref={formRef} className="card-soft rounded-[1.75rem] bg-white p-7 sm:p-9">
            {status === 'sent' ? (
              <div className="flex h-full min-h-96 flex-col items-center justify-center text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-lime text-forest">
                  <CheckCircle size={32} weight="fill" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold text-ink">Cererea a fost trimisă</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  Îți mulțumim. Te contactăm în cel mai scurt timp pentru confirmarea programării.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 rounded-full bg-mist px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-stone"
                >
                  Trimite altă cerere
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-3">
                <h3 className="text-xl font-bold text-ink">Formular de programare</h3>

                {prefilled ? (
                  <div className="flex items-start gap-2 rounded-2xl bg-lime-mist px-4 py-3 text-sm text-forest">
                    <Sparkle size={18} weight="fill" className="mt-0.5 shrink-0" />
                    <span>
                      Am completat formularul cu datele din conversația cu asistentul. Verificați-le și
                      apăsați "Trimite cererea".
                    </span>
                  </div>
                ) : null}

                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    className={field}
                    placeholder="Nume și prenume"
                    autoComplete="name"
                    value={values.name}
                    onChange={update('name')}
                    required
                  />
                  <input
                    className={field}
                    type="email"
                    placeholder="Adresă de email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update('email')}
                    required
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    className={field}
                    type="tel"
                    placeholder="Telefon"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={update('phone')}
                    required
                  />
                  <input
                    className={field}
                    type="date"
                    aria-label="Data dorită"
                    value={values.date}
                    onChange={update('date')}
                    required
                  />
                </div>
                <textarea
                  className={`${field} min-h-36 resize-none`}
                  placeholder="Descrie pe scurt problema"
                  value={values.message}
                  onChange={update('message')}
                />
                <label className="flex items-start gap-3 py-2 text-xs leading-relaxed text-muted">
                  <input type="checkbox" required className="mt-0.5 size-4 shrink-0 accent-primary" />
                  Sunt de acord cu prelucrarea datelor personale în scopul programării.
                </label>

                {status === 'error' ? (
                  <p className="rounded-2xl bg-sky px-4 py-3 text-sm text-ink">{errorText}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
                >
                  <PaperPlaneTilt size={18} weight="fill" />
                  {status === 'sending' ? 'Se trimite...' : 'Trimite cererea'}
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
