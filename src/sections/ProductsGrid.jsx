import { brands, products } from '../data/site'

export default function ProductsGrid() {
  return (
    <section className="py-14 lg:py-16">
      <div className="shell">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.title} className="overflow-hidden rounded-[1.75rem] bg-mist">
              <img
                src={product.image}
                alt={product.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-lg font-bold text-ink">{product.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{product.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 rounded-[1.75rem] bg-mist p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-ink">Branduri disponibile în clinică</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex h-28 items-center justify-center rounded-2xl bg-white p-6"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  title={brand.name}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
