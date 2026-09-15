// Thin client for the chatbot proxy (the Cloudflare Worker in /worker).
// The browser never talks to the Claude API directly and never holds a key.

export const CHAT_API_URL = (import.meta.env.VITE_CHAT_API_URL ?? '').trim()

export const isChatConfigured = () => CHAT_API_URL.length > 0

export async function sendChat(messages, { signal } = {}) {
  if (!isChatConfigured()) throw new Error('Asistentul nu este configurat încă.')

  let response
  try {
    response = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ messages }),
      signal,
    })
  } catch (err) {
    if (err.name === 'AbortError') throw err
    throw new Error('Nu am putut contacta asistentul. Verificați conexiunea și încercați din nou.')
  }

  let data = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok) {
    throw new Error(data?.error ?? `Asistentul a răspuns cu o eroare (${response.status}).`)
  }
  return data
}

// Lets any part of the page (the header button) open the assistant panel.
export const CHAT_OPEN_EVENT = 'oftalmoclass:chat-open'
export const openChat = () => window.dispatchEvent(new CustomEvent(CHAT_OPEN_EVENT))
