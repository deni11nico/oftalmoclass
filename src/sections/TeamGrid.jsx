import { useState } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react'
import CareerModal from '../components/CareerModal'
import { doctors, staff } from '../data/site'
import { careers } from '../data/cv'

function CareerButton({ onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full bg-lime font-semibold text-ink transition-colors hover:bg-lime-bright ${className}`}
    >
      Carieră
      <ArrowUpRight size={16} weight="bold" />
    </button>
  )
}

export default function TeamGrid() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-14 lg:py-16">
      <div className="shell">
        <div className="grid gap-4 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="overflow-hidden rounded-[1.75rem] bg-mist">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="h-80 w-full object-cover"
                style={{ objectPosition: doctor.focus ?? '50% 20%' }}
                loading="lazy"
              />
              <div className="p-7">
                <h2 className="text-xl font-bold text-ink">{doctor.name}</h2>
                <p className="mt-1 text-sm font-semibold text-moss">{doctor.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{doctor.bio}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {doctor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-lime-mist px-3.5 py-1.5 text-xs font-semibold text-moss"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {careers[doctor.name] ? (
                  <CareerButton
                    className="mt-6 px-5 py-2.5 text-sm"
                    onClick={() => setOpen(doctor)}
                  />
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-extrabold text-ink italic">Asistenți și optometriști</h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((person) => (
            <div key={person.name} className="flex items-center gap-5 rounded-[1.5rem] bg-mist p-5">
              <img
                src={person.photo}
                alt={person.name}
                className="size-24 shrink-0 rounded-2xl object-cover object-top"
                loading="lazy"
              />
              <div>
                <p className="text-lg font-bold text-ink">{person.name}</p>
                <p className="mt-1 text-base text-muted">{person.role}</p>
                {careers[person.name] ? (
                  <CareerButton
                    className="mt-3 px-4 py-2 text-xs"
                    onClick={() => setOpen(person)}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {open ? (
        <CareerModal person={open} sections={careers[open.name]} onClose={() => setOpen(null)} />
      ) : null}
    </section>
  )
}
