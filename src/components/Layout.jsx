import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CtaBand from '../sections/CtaBand'
import ChatWidget from './ChatWidget'
import { routes } from '../data/site'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
        {pathname === routes.contact ? null : <CtaBand />}
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
