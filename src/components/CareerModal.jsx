import { useEffect, useRef } from 'react'
import { X } from '@phosphor-icons/react'

export default function CareerModal({ person, sections, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Carieră ${person.name}`}
      onMouseDown={(event) => {
        if (!panelRef.current?.contains(event.target)) onClose()
      }}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/70 px-3 py-6 backdrop-blur-sm sm:px-6 sm:py-10"
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-3xl overflow-hidden rounded-[1.75rem] bg-white shadow-[0_40px_80px_-30px_rgba(7,29,23,0.6)]"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Închide"
          className="absolute top-5 right-5 z-10 flex size-10 items-center justify-center rounded-full bg-mist text-ink transition-colors hover:bg-stone"
        >
          <X size={18} weight="bold" />
        </button>

        <div className="flex flex-col items-center gap-5 bg-mist px-8 py-10 text-center sm:flex-row sm:gap-7 sm:text-left">
          <img
            src={person.photo}
            alt={person.name}
            className="size-28 shrink-0 rounded-full object-cover"
            style={{ objectPosition: person.focus ?? '50% 20%' }}
          />
          <div>
            <h2 className="text-2xl leading-tight font-extrabold text-ink sm:text-3xl">
              {person.name}
            </h2>
            <p className="mt-2 text-sm font-semibold text-moss">{person.role}</p>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto px-8 py-8">
          {sections.map((section) => (
            <section key={section.heading} className="mt-9 first:mt-0">
              <h3 className="text-lg font-bold text-ink">{section.heading}</h3>
              <ul className="mt-4 grid gap-2.5">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
