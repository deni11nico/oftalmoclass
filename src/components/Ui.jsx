export function Badge({ children, tone = 'light', className = '' }) {
  const tones = {
    light: 'bg-white text-ink shadow-[0_2px_10px_rgba(7,29,23,0.06)]',
    dark: 'bg-white/12 text-lime-soft backdrop-blur-md',
    soft: 'bg-lime-mist text-moss',
  }
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

export function Button({
  as: Tag = 'a',
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const variants = {
    primary:
      'bg-lime text-ink hover:bg-lime-bright shadow-[0_10px_30px_-12px_rgba(198,241,107,0.9)]',
    ghost: 'bg-white/12 text-white backdrop-blur-md hover:bg-white/20',
    dark: 'bg-ink text-white hover:bg-forest',
    quiet: 'bg-mist text-ink hover:bg-stone',
  }
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ badge, title, text, align = 'left', tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Badge tone={dark ? 'dark' : 'soft'}>{badge}</Badge>
      <h2
        className={`mt-6 text-3xl leading-[1.1] font-extrabold tracking-tight italic sm:text-4xl lg:text-[2.9rem] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-white/70' : 'text-muted'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  )
}
