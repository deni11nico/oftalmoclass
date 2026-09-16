import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CalendarCheck, CaretDown, ChatCircleDots, List, X } from '@phosphor-icons/react'
import { nav, routes } from '../data/site'
import { images } from '../data/images'
import { openChat } from '../lib/chat'

const linkBase = 'rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors 2xl:px-3.5'

function DesktopItem({ item, openMenu, setOpenMenu }) {
  const { pathname } = useLocation()

  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `${linkBase} ${isActive ? 'bg-mist text-ink' : 'text-ink/65 hover:bg-mist hover:text-ink'}`
        }
      >
        {item.label}
      </NavLink>
    )
  }

  const expanded = openMenu === item.label
  const childActive = item.children.some((child) => child.to === pathname)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(item.label)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button
        type="button"
        onClick={() => setOpenMenu(expanded ? null : item.label)}
        aria-expanded={expanded}
        className={`${linkBase} flex items-center gap-1.5 ${
          expanded || childActive ? 'bg-mist text-ink' : 'text-ink/65 hover:bg-mist hover:text-ink'
        }`}
      >
        {item.label}
        <CaretDown
          size={12}
          weight="bold"
          className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded ? (
        <div className="absolute top-full left-0 pt-2">
          <div className="grid w-60 gap-0.5 rounded-2xl bg-white p-2 shadow-[0_16px_40px_-12px_rgba(7,29,23,0.3)]">
            {item.children.map((child) => (
              <NavLink
                key={child.to}
                to={child.to}
                onClick={() => setOpenMenu(null)}
                className={({ isActive }) =>
                  `rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive ? 'bg-mist text-ink' : 'text-ink/70 hover:bg-mist hover:text-ink'
                  }`
                }
              >
                {child.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function MobileMenu({ onClose }) {
  const [openGroup, setOpenGroup] = useState(null)

  // keep the page behind the menu from scrolling
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  const rowBase =
    'flex w-full items-center justify-between py-5 text-left text-2xl font-extrabold tracking-wide uppercase transition-colors'

  return (
    <div className="fixed inset-x-0 top-0 bottom-0 z-40 flex flex-col overflow-y-auto bg-cream px-6 pt-28 pb-8 xl:hidden">
      <nav className="flex-1">
        {nav.map((item) =>
          item.children ? (
            <div key={item.label} className="border-b border-stone">
              <button
                type="button"
                onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                aria-expanded={openGroup === item.label}
                className={`${rowBase} ${openGroup === item.label ? 'text-primary' : 'text-ink'}`}
              >
                {item.label}
                <CaretDown
                  size={22}
                  weight="bold"
                  className={`shrink-0 text-muted transition-transform duration-200 ${
                    openGroup === item.label ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openGroup === item.label ? (
                <div className="grid gap-1 pb-5">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `rounded-2xl px-4 py-3 text-lg font-semibold transition-colors ${
                          isActive ? 'bg-lime-soft text-forest' : 'text-ink/75 hover:bg-mist'
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `${rowBase} border-b border-stone ${isActive ? 'text-primary' : 'text-ink'}`
              }
            >
              {item.label}
            </NavLink>
          ),
        )}
      </nav>

      <div className="mt-8 grid gap-3">
        <button
          type="button"
          onClick={() => {
            onClose()
            openChat()
          }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-mist px-6 py-4 text-base font-bold text-forest transition-colors hover:bg-lime-soft"
        >
          <ChatCircleDots size={20} weight="fill" />
          Asistent AI
        </button>
        <Link
          to={routes.contact}
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-bold tracking-wide text-white uppercase transition-colors hover:bg-primary-dark"
        >
          <CalendarCheck size={20} weight="bold" />
          Programare
        </Link>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const headerRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    setOpenMenu(null)
  }, [pathname])

  useEffect(() => {
    const onClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setOpenMenu(null)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 px-2 pt-2 pb-2 sm:px-4 sm:pt-4 sm:pb-3">
      {/* spans the full width, aligned with the hero panel edges */}
      <div>
        <div className="relative z-50 rounded-[1.75rem] bg-white/90 px-4 py-3 shadow-[0_8px_30px_-16px_rgba(31,58,56,0.28)] backdrop-blur-xl sm:px-6">
          <div className="relative flex items-center justify-between gap-4">
            <Link to={routes.home} className="shrink-0">
              <img src={images.logo} alt="OftalmoClass" className="h-6 w-auto sm:h-7" />
            </Link>

            {/* pinned to the exact middle of the bar, independent of logo and button widths */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 xl:flex">
              {nav.map((item) => (
                <DesktopItem
                  key={item.label}
                  item={item}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                />
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openChat}
                className="hidden items-center gap-2 rounded-full bg-mist px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-forest transition-colors hover:bg-lime-soft md:inline-flex"
              >
                <ChatCircleDots size={18} weight="fill" />
                Asistent AI
              </button>
              <Link
                to={routes.contact}
                className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-primary-dark sm:inline-flex"
              >
                <CalendarCheck size={18} weight="bold" />
                Programare
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
                className={`flex size-11 items-center justify-center rounded-full transition-colors xl:hidden ${
                  open ? 'bg-primary text-white' : 'bg-mist text-ink'
                }`}
              >
                {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
              </button>
            </div>
          </div>

        </div>

        {/* outside the blurred pill: backdrop-filter would otherwise trap position:fixed */}
        {open ? <MobileMenu onClose={() => setOpen(false)} /> : null}
      </div>
    </header>
  )
}
