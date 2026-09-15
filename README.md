# OftalmoClass

Site de prezentare pentru clinica de oftalmologie OftalmoClass din Oradea.
Live: https://deni11nico.github.io/oftalmoclass/

React 19, Vite 8, Tailwind CSS v4, Phosphor icons, react-router-dom 7.
Publicat pe GitHub Pages prin GitHub Actions la fiecare push pe `main`.

## Structură

```
src/data/        conținutul site-ului (site.js), CV-uri (cv.js), imagini (images.js)
src/pages/       o pagină per rută
src/sections/    blocurile de conținut refolosite de pagini
src/components/  Header, Footer, Layout, PageHero, ChatWidget, modale
src/lib/         clientul pentru chatbot și puntea către formular
worker/          Cloudflare Worker: proxy securizat către Claude API
scripts/         generare knowledge.json pentru chatbot, fallback SPA pentru Pages
```

## Dezvoltare locală

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # generează knowledge.json, construiește în dist/, scrie 404.html
```

## Chatbot (asistent virtual)

Butonul din colțul din dreapta jos deschide un asistent AI care răspunde în
română despre clinică, servicii și investigații și ajută la programare. Când
are datele necesare, deschide formularul de contact precompletat; pacientul îl
verifică și îl trimite.

Cheia API nu este niciodată în browser. Site-ul vorbește cu un Cloudflare
Worker (`worker/`), care ține cheia și regulile. Fără `VITE_CHAT_API_URL`
configurat, widgetul afișează un mesaj politicos și trimite spre telefon și
formular, restul site-ului funcționează normal.

### Pași de activare

1. **Cheie Anthropic.** Creează una la https://console.anthropic.com (Settings, API Keys).
2. **Cont Cloudflare** gratuit la https://dash.cloudflare.com.
3. **Publică Worker-ul:**
   ```bash
   cd worker
   npm install
   npx wrangler login
   npx wrangler secret put ANTHROPIC_API_KEY
   npx wrangler deploy
   ```
   Notează URL-ul afișat, de forma `https://oftalmoclass-chat.<subdomeniu>.workers.dev`.
4. **Spune site-ului unde e Worker-ul.** În GitHub: repo → Settings → Secrets and variables →
   Actions → tab **Variables** → New repository variable:
   - `VITE_CHAT_API_URL` = URL-ul Worker-ului
   - opțional `VITE_WEB3FORMS_KEY` = cheia Web3Forms, ca formularul să trimită email
5. **Redeploy.** Actions → Deploy to GitHub Pages → Run workflow, sau un push pe `main`.

Pentru dezvoltare locală, copiază `.env.example` în `.env.local` și completează valorile.

### Când se schimbă conținutul site-ului

`worker/src/knowledge.json` se regenerează la fiecare `npm run build`. Worker-ul
însă trebuie republicat manual ca să vadă noile date: `cd worker && npx wrangler deploy`.

## Formular de programare

Formularul din `/contact` este de sine stătător. Fără `VITE_WEB3FORMS_KEY`
afișează o confirmare locală și nu trimite nimic (comportamentul inițial). Cu
cheia setată, trimite cererea prin Web3Forms pe emailul configurat în contul
Web3Forms.
