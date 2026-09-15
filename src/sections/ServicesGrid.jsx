import { Check, Eye, Eyeglasses, Scan, Syringe } from '@phosphor-icons/react'
import { serviceGroups } from '../data/site'

const iconMap = { Eye, Scan, Syringe, Eyeglasses }

export default function ServicesGrid() {
  return (
    <section className="py-14 lg:py-16">
      <div className="shell">
        <div className="grid gap-4 lg:grid-cols-2">
          {serviceGroups.map((group) => {
            const Icon = iconMap[group.icon]
            return (
              <div key={group.title} className="card-soft rounded-[1.75rem] bg-white p-8 sm:p-9">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-lime-soft text-moss">
                    <Icon size={24} weight="duotone" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-ink">{group.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{group.text}</p>
                  </div>
                </div>

                <ul className="mt-7 grid gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-lime-mist text-moss">
                        <Check size={12} weight="bold" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
