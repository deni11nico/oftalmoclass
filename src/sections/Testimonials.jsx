import { Quotes, Star } from '@phosphor-icons/react'
import { Badge } from '../components/Ui'
import { clinic, testimonials } from '../data/site'

export default function Testimonials() {
  return (
    <section className="py-14 lg:py-16">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge tone="soft">Ce spun pacienții</Badge>
            <h2 className="mt-6 text-3xl leading-[1.1] font-extrabold tracking-tight text-ink italic sm:text-4xl">
              Recenzii lăsate de oamenii care ne trec pragul
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-[1.5rem] bg-lime-mist px-6 py-5">
            <span className="text-4xl font-extrabold text-ink">{clinic.rating}</span>
            <div>
              <div className="flex gap-0.5 text-moss">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} weight="fill" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-muted">Media recenziilor din 5</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <figure
              key={item.name}
              className={`flex flex-col justify-between rounded-[1.75rem] p-7 ${
                index === 0 ? 'bg-forest lg:row-span-2' : 'bg-mist'
              }`}
            >
              <Quotes
                size={32}
                weight="fill"
                className={index === 0 ? 'text-lime-bright' : 'text-sage'}
              />
              <blockquote
                className={`mt-6 text-base leading-relaxed ${
                  index === 0 ? 'text-white/85 lg:text-lg' : 'text-ink/80'
                }`}
              >
                {item.text}
              </blockquote>
              <figcaption
                className={`mt-7 text-sm font-bold ${index === 0 ? 'text-lime-bright' : 'text-forest'}`}
              >
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
