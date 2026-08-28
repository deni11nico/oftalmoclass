import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Story from './pages/Story'
import Team from './pages/Team'
import Services from './pages/Services'
import Equipment from './pages/Equipment'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import Articles from './pages/Articles'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { routes } from './data/site'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.story} element={<Story />} />
          <Route path={routes.team} element={<Team />} />
          <Route path={routes.services} element={<Services />} />
          <Route path={routes.equipment} element={<Equipment />} />
          <Route path={routes.products} element={<Products />} />
          <Route path={routes.gallery} element={<Gallery />} />
          <Route path={routes.articles} element={<Articles />} />
          <Route path={routes.faq} element={<Faq />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
