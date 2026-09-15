import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUp,
  CalendarCheck,
  ChatCircleDots,
  Eye,
  FirstAid,
  MapPin,
  Stethoscope,
  X,
} from '@phosphor-icons/react'
import { clinic, routes } from '../data/site'
import { isChatConfigured, sendChat } from '../lib/chat'
import { savePrefill, toFormPrefill } from '../lib/prefill'

const STORAGE_KEY = 'oftalmoclass:chat'

const WELCOME =
  'Bună! Sunt asistentul virtual OftalmoClass. Vă pot ajuta cu informații despre clinică, servicii și investigații, sau să pregătim împreună o programare. Cu ce vă pot fi de folos?'

const QUICK_ACTIONS = [
  { label: 'Vreau o programare', icon: CalendarCheck, prompt: 'Aș vrea să fac o programare.' },
  { label: 'Ce servicii oferiți?', icon: Stethoscope, prompt: 'Ce servicii oferă clinica?' },
  { label: 'Unde sunteți?', icon: MapPin, prompt: 'Unde este clinica și ce program aveți?' },
  {
    label: 'O întrebare despre o investigație',
    icon: Eye,
    prompt: 'Am o întrebare despre o investigație oftalmologică.',
  },
]

const ASSISTANT_AVATAR = (
  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lime text-forest">
    <Eye size={16} weight="fill" />
  </span>
)

function loadSaved() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function Bubble({ role, children }) {
  const mine = role === 'user'
  return (
    <div className={`flex items-end gap-2 ${mine ? 'justify-end' : 'justify-start'}`}>
      {mine ? null : ASSISTANT_AVATAR}
      <div
        className={`max-w-[85%] rounded-3xl px-4 py-3 text-[0.925rem] leading-relaxed whitespace-pre-wrap ${
          mine
            ? 'rounded-br-lg bg-primary text-white'
            : 'rounded-bl-lg bg-mist text-ink'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

function TypingDots() {
  return (
    <div className="flex items-end gap-2">
      {ASSISTANT_AVATAR}
      <div className="flex items-center gap-1 rounded-3xl rounded-bl-lg bg-mist px-4 py-3.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="size-1.5 rounded-full bg-forest"
            style={{ animation: `chat-dot 1.2s ${i * 0.15}s infinite ease-in-out` }}
          />
        ))}
      </div>
    </div>
  )
}

function AppointmentCard({ prefill, onOpen }) {
  const rows = [
    ['Nume', prefill.name],
    ['Telefon', prefill.phone],
    ['Email', prefill.email],
    ['Data dorită', prefill.date],
    ['Detalii', prefill.message],
  ].filter(([, v]) => v)

  return (
    <div className="flex items-end gap-2">
      {ASSISTANT_AVATAR}
      <div className="card-soft max-w-[85%] rounded-3xl rounded-bl-lg bg-white p-4">
        <p className="text-sm font-bold text-forest">Formular pregătit</p>
        <dl className="mt-2 grid gap-1 text-sm">
          {rows.map(([k, v]) => (
            <div key={k} className="flex gap-2">
              <dt className="shrink-0 text-muted">{k}:</dt>
              <dd className="text-ink">{v}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          onClick={onOpen}
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Deschide formularul precompletat
          <ArrowRight size={16} weight="bold" />
        </button>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Verificați datele și apăsați "Trimite cererea" ca să ajungă la clinică.
        </p>
      </div>
    </div>
  )
}

export default function ChatWidget() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  // what the person sees
  const [items, setItems] = useState(
    () => loadSaved()?.items ?? [{ kind: 'text', role: 'assistant', text: WELCOME }],
  )
  // what the model sees (Anthropic message format)
  const [history, setHistory] = useState(() => loadSaved()?.history ?? [])
  const [draft, setDraft] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

  const listRef = useRef(null)
  const inputRef = useRef(null)
  const abortRef = useRef(null)

  const configured = isChatConfigured()

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ items, history }))
    } catch {
      /* ignore */
    }
  }, [items, history])

  useEffect(() => {
    if (!open) return
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [items, busy, open])

  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    inputRef.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const openForm = (prefill) => {
    savePrefill(prefill)
    setOpen(false)
    navigate(routes.contact)
  }

  async function send(text) {
    const trimmed = text.trim()
    if (!trimmed || busy) return
    if (!configured) {
      setError('Asistentul nu este configurat încă. Sunați-ne sau folosiți formularul de contact.')
      return
    }

    setError(null)
    setDraft('')
    setBusy(true)

    const userMessage = { role: 'user', content: trimmed }
    let nextHistory = [...history, userMessage]
    setItems((prev) => [...prev, { kind: 'text', role: 'user', text: trimmed }])
    setHistory(nextHistory)

    const controller = new AbortController()
    abortRef.current = controller

    try {
      // Up to two round-trips: one normal reply, or a tool call followed by
      // the model's own confirmation after we hand the data to the form.
      for (let round = 0; round < 2; round++) {
        const data = await sendChat(nextHistory, { signal: controller.signal })

        if (data.assistantContent?.length) {
          nextHistory = [...nextHistory, { role: 'assistant', content: data.assistantContent }]
        }
        if (data.text) {
          setItems((prev) => [...prev, { kind: 'text', role: 'assistant', text: data.text }])
        }

        if (!data.toolUse) break

        const prefill = toFormPrefill(data.toolUse.input)
        setItems((prev) => [...prev, { kind: 'appointment', prefill }])
        nextHistory = [
          ...nextHistory,
          {
            role: 'user',
            content: [
              {
                type: 'tool_result',
                tool_use_id: data.toolUse.id,
                content:
                  'Formularul de programare a fost pregătit și afișat pacientului cu datele primite. Pacientul îl va verifica și trimite.',
              },
            ],
          },
        ]
      }
      setHistory(nextHistory)
    } catch (err) {
      if (err.name !== 'AbortError') setError(err.message)
    } finally {
      setBusy(false)
      abortRef.current = null
    }
  }

  const reset = () => {
    abortRef.current?.abort()
    setItems([{ kind: 'text', role: 'assistant', text: WELCOME }])
    setHistory([])
    setError(null)
    setBusy(false)
  }

  const showQuickActions = history.length === 0 && !busy

  return (
    <>
      {/* floating launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Închide asistentul' : 'Deschide asistentul virtual'}
        aria-expanded={open}
        className={`fixed right-4 bottom-4 z-[90] flex items-center gap-2 rounded-full bg-primary py-3.5 pr-5 pl-4 text-sm font-semibold text-white shadow-[0_18px_40px_-16px_rgba(47,143,131,0.85)] transition-all duration-300 hover:bg-primary-dark sm:right-6 sm:bottom-6 ${
          open ? 'pointer-events-none translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <ChatCircleDots size={22} weight="fill" />
        <span className="hidden sm:inline">Întrebați-ne</span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Asistent virtual OftalmoClass"
          className="fixed inset-x-0 bottom-0 z-[95] flex h-[min(88dvh,44rem)] flex-col overflow-hidden rounded-t-[1.75rem] bg-white shadow-[0_30px_80px_-30px_rgba(31,58,56,0.5)] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:h-[min(80vh,40rem)] sm:w-[24rem] sm:rounded-[1.75rem]"
          style={{ animation: 'chat-pop 0.28s ease-out' }}
        >
          {/* header */}
          <div className="panel-light flex items-center gap-3 px-4 py-3.5 sm:px-5">
            <span className="flex size-10 items-center justify-center rounded-full bg-white text-forest card-soft">
              <Eye size={20} weight="fill" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-ink">Asistent OftalmoClass</p>
              <p className="text-xs text-muted">Răspunde în câteva secunde</p>
            </div>
            {history.length > 0 ? (
              <button
                type="button"
                onClick={reset}
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-forest transition-colors hover:bg-white"
              >
                Conversație nouă
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Închide"
              className="flex size-9 items-center justify-center rounded-full bg-white/70 text-ink transition-colors hover:bg-white"
            >
              <X size={18} weight="bold" />
            </button>
          </div>

          {/* messages */}
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-5">
            {items.map((item, i) =>
              item.kind === 'appointment' ? (
                <AppointmentCard key={i} prefill={item.prefill} onOpen={() => openForm(item.prefill)} />
              ) : (
                <Bubble key={i} role={item.role}>
                  {item.text}
                </Bubble>
              ),
            )}

            {showQuickActions ? (
              <div className="grid gap-2 pt-1 pl-10">
                {QUICK_ACTIONS.map(({ label, icon: Icon, prompt }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => send(prompt)}
                    disabled={!configured}
                    className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 text-left text-sm font-medium text-forest card-soft transition-colors hover:bg-lime-mist disabled:opacity-60"
                  >
                    <Icon size={18} weight="duotone" className="shrink-0" />
                    {label}
                  </button>
                ))}
              </div>
            ) : null}

            {busy ? <TypingDots /> : null}

            {error ? (
              <div className="flex items-start gap-2 rounded-2xl bg-sky px-4 py-3 text-sm text-ink">
                <FirstAid size={18} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                <span>{error}</span>
              </div>
            ) : null}

            {!configured ? (
              <div className="rounded-2xl bg-sky px-4 py-3 text-sm leading-relaxed text-ink">
                Asistentul virtual nu este încă activ. Ne puteți suna la{' '}
                <a href={`tel:${clinic.phones[0].replace(/\s/g, '')}`} className="font-semibold text-primary">
                  {clinic.phones[0]}
                </a>{' '}
                sau puteți folosi formularul de pe pagina de contact.
              </div>
            ) : null}
          </div>

          {/* composer */}
          <form
            onSubmit={(event) => {
              event.preventDefault()
              send(draft)
            }}
            className="px-4 pt-2 pb-3 sm:px-5"
          >
            <div className="flex items-end gap-2 rounded-3xl bg-mist p-1.5 pl-4">
              <textarea
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault()
                    send(draft)
                  }
                }}
                rows={1}
                maxLength={2000}
                placeholder={configured ? 'Scrieți un mesaj...' : 'Asistentul nu este configurat'}
                disabled={!configured || busy}
                aria-label="Mesaj către asistent"
                className="max-h-28 min-h-10 flex-1 resize-none bg-transparent py-2 text-sm text-ink outline-none placeholder:text-muted/70"
              />
              <button
                type="submit"
                disabled={!configured || busy || !draft.trim()}
                aria-label="Trimite"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark disabled:opacity-40"
              >
                <ArrowUp size={18} weight="bold" />
              </button>
            </div>
            <p className="mt-2 px-1 text-[0.7rem] leading-relaxed text-muted">
              Asistentul oferă informații generale și nu pune diagnostice. În caz de urgență sunați la 112.
            </p>
          </form>
        </div>
      ) : null}
    </>
  )
}
