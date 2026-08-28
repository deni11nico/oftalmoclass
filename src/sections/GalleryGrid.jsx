import { useState } from 'react'
import { MagnifyingGlassPlus } from '@phosphor-icons/react'
import Lightbox from '../components/Lightbox'
import { gallery } from '../data/site'

export default function GalleryGrid() {
  const [index, setIndex] = useState(null)

  return (
    <section className="py-14 lg:py-16">
      <div className="shell">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {gallery.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Deschide fotografia: ${photo.alt}`}
              className={`group relative cursor-zoom-in overflow-hidden rounded-[1.5rem] ${
                i === 0 || i === 7 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="size-full min-h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/35 group-hover:opacity-100">
                <span className="flex size-12 items-center justify-center rounded-full bg-lime text-ink">
                  <MagnifyingGlassPlus size={22} weight="bold" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {index !== null ? (
        <Lightbox
          photos={gallery}
          index={index}
          onChange={setIndex}
          onClose={() => setIndex(null)}
        />
      ) : null}
    </section>
  )
}
