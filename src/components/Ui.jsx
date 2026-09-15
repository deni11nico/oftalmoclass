export function Badge({ children, tone = 'light', className = '' }) {
  const tones = {
    light: 'bg-white text-forest card-soft',
    dark: 'bg-white/70 text-forest backdrop-blur-md',
    soft: 'bg-lime-soft text-forest',
  }
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide uppercase sm:text-sm ${tones[tone]} ${className}`}
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
      'bg-primary text-white hover:bg-primary-dark shadow-[0_12px_28px_-14px_rgba(47,143,131,0.7)]',
    ghost: 'bg-white/80 text-forest backdrop-blur-md hover:bg-white',
    dark: 'bg-forest text-white hover:bg-moss',
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
