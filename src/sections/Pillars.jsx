import { Cpu, Sparkle, Target, UsersThree } from '@phosphor-icons/react'
import { pillars, stats } from '../data/site'
import { images } from '../data/images'

const iconMap = { UsersThree, Target, Sparkle, Cpu }

export default function Pillars({ withStory = true }) {
  return (
    <section className="py-14 lg:py-16">
      <div className="shell">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon]
            return (
              <div
                key={pillar.title}
                className="group rounded-[1.75rem] bg-mist p-7 transition-colors duration-300 hover:bg-forest"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-lime text-ink">
                  <Icon size={24} weight="duotone" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-ink transition-colors group-hover:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted transition-colors group-hover:text-white/70">
                  {pillar.text}
                </p>
              </div>
            )
          })}
        </div>

        {withStory ? (
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
            <div className="overflow-hidden rounded-[1.75rem] bg-forest p-8 sm:p-10">
              <h2 className="text-2xl leading-tight font-extrabold text-white italic sm:text-3xl">
                Depășim limitele pentru pacienții noștri
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
                Clinica funcționează sub coordonarea dr. Flaviu Bodea, medic specialist oftalmolog și
                asistent universitar la Disciplina de Oftalmologie a Facultății de Medicină și
                Farmacie din Oradea. Punem accent pe detalii și pe cele mai recente terapii din
                oftalmologie, pentru că a ține pasul cu știința și tehnologia de vârf înseamnă
                progres.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-3xl font-extrabold text-lime">{stat.value}</dt>
                    <dd className="mt-1.5 text-xs leading-snug text-white/60">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src={images.story}
                alt="Dr. Flaviu Bodea în cabinetul clinicii"
                className="size-full min-h-72 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
