import PageHero from '../components/PageHero'
import ContactBlock from '../sections/ContactBlock'

export default function Contact() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Nu mai aștepta, fă o programare chiar acum"
        text="Ne găsești în Oradea, pe Bulevardul Decebal. Scrie-ne prin formular sau sună-ne direct, în programul clinicii."
      />
      <ContactBlock />
    </>
  )
}
