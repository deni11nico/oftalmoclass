import { useState } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'
import { faq } from '../data/site'

export default function FaqList() {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-14 lg:py-16">
      <div className="shell">
        <div className="mx-auto grid max-w-3xl gap-3">
          {faq.map((item, index) => {
            const expanded = open === index
            return (
              <div key={item.q} className="overflow-hidden rounded-[1.5rem] bg-mist">
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? -1 : index)}
                  aria-expanded={expanded}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                >
                  <span className="text-base font-bold text-ink sm:text-lg">{item.q}</span>
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      expanded ? 'bg-primary text-white' : 'bg-white text-moss'
                    }`}
                  >
                    {expanded ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
                  </span>
                </button>
                {expanded ? (
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted sm:px-7 sm:text-base">
                    {item.a}
                  </p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
