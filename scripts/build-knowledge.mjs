// Builds worker/src/knowledge.json from the site's own data files, so the
// chatbot always describes the same clinic the website does. Run via
// `npm run build:knowledge`; the main build runs it too.
import { writeFileSync } from 'node:fs'

const site = await import('../src/data/site.js')
const { careers } = await import('../src/data/cv.js')

const strip = (s) => (typeof s === 'string' ? s.replace(/^\/img\//, '') : s)

const knowledge = {
  clinic: {
    name: site.clinic.name,
    tagline: site.clinic.tagline,
    address: site.clinic.address,
    phones: site.clinic.phones,
    hours: site.clinic.hours,
    facebook: site.clinic.facebook,
    instagram: site.clinic.instagram,
    rating: site.clinic.rating,
    website: 'https://deni11nico.github.io/oftalmoclass/',
  },
  pages: site.routes,
  about: {
    pillars: site.pillars.map(({ title, text }) => ({ title, text })),
    story: {
      title: site.story.title,
      lead: site.story.lead,
      intro: site.story.intro,
      about: [site.story.aboutLead, ...site.story.aboutBody],
    },
  },
  services: site.serviceGroups.map(({ title, text, items }) => ({ title, text, items })),
  products: site.products.map(({ title, text }) => ({ title, text })),
  brands: site.brands.map((b) => b.name),
  equipment: [
    ...site.equipmentFeatured.map(({ title, text }) => ({ name: title, text })),
    ...site.equipmentList.map(({ name }) => ({ name })),
  ],
  team: {
    doctors: site.doctors.map(({ name, role, bio, tags }) => ({
      name,
      role,
      bio,
      tags,
      cv: careers[name] ?? null,
    })),
    staff: site.staff.map(({ name, role }) => ({ name, role, cv: careers[name] ?? null })),
  },
  testimonials: site.testimonials,
  faq: site.faq,
  articleTopics: site.articles.map((a) => a.title),
}

// belt and braces: no image paths should leak into the prompt
const json = JSON.stringify(knowledge, (_, v) => strip(v), 2)
writeFileSync('worker/src/knowledge.json', json + '\n')
console.log(`build-knowledge: worker/src/knowledge.json (${(json.length / 1024).toFixed(1)} KB)`)
