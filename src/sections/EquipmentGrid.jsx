import { equipmentFeatured, equipmentList } from '../data/site'
import { images } from '../data/images'

export default function EquipmentGrid() {
  return (
    <section className="py-14 lg:py-16">
      <div className="shell">
        <div className="grid gap-4 lg:grid-cols-3">
          {equipmentFeatured.map((device) => (
            <article key={device.title} className="rounded-[1.75rem] bg-mist p-6">
              <div className="flex h-56 items-center justify-center rounded-3xl bg-white p-6">
                <img
                  src={device.image}
                  alt={device.title}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h2 className="mt-6 text-lg leading-snug font-bold text-ink">{device.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{device.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {equipmentList.map((device) => (
            <div key={device.name} className="flex items-center gap-4 rounded-[1.5rem] bg-mist p-4">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5">
                <img
                  src={device.image}
                  alt={device.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-sm leading-snug font-semibold text-ink">{device.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 overflow-hidden rounded-[1.75rem] bg-forest lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="p-8 sm:p-10">
            <h2 className="text-2xl leading-tight font-extrabold text-white italic sm:text-3xl">
              Fiecare investigație rămâne documentată
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
              Rezultatele se salvează la fiecare vizită, așa că la următorul control comparăm
              evoluția în loc să pornim de la zero. Așa vezi și tu, nu doar medicul, ce s-a schimbat.
            </p>
          </div>
          <div className="min-h-64 lg:h-full">
            <img
              src={images.ultrasound}
              alt="Ecografie oculară în cabinet"
              className="size-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
