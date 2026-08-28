import { useCallback, useEffect, useRef } from 'react'
import { CaretLeft, CaretRight, X } from '@phosphor-icons/react'

export default function Lightbox({ photos, index, onClose, onChange }) {
  const closeRef = useRef(null)
  const photo = photos[index]

  const go = useCallback(
    (step) => onChange((prev) => (prev + step + photos.length) % photos.length),
    [photos.length, onChange],
  )

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [go, onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galerie foto"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-ink/95 px-3 py-6 backdrop-blur-sm sm:px-6"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Închide"
        className="absolute top-4 right-4 flex size-12 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/25 sm:top-6 sm:right-6"
      >
        <X size={20} weight="bold" />
      </button>

      <figure className="flex min-h-0 flex-col items-center gap-4">
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[72vh] w-auto max-w-full rounded-[1.5rem] object-contain"
        />
        <figcaption className="max-w-xl text-center text-sm text-white/70">{photo.alt}</figcaption>
      </figure>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Fotografia anterioară"
          className="flex size-12 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-lime hover:text-ink"
        >
          <CaretLeft size={20} weight="bold" />
        </button>
        <span className="min-w-16 text-center text-sm font-semibold text-white/70">
          {index + 1} / {photos.length}
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Fotografia următoare"
          className="flex size-12 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-lime hover:text-ink"
        >
          <CaretRight size={20} weight="bold" />
        </button>
      </div>
    </div>
  )
}
