// Bridge between the chatbot and the existing appointment form.
// The chatbot stores what it collected; the contact page reads it and fills
// the form in. Nothing is submitted automatically, the patient reviews first.

const KEY = 'oftalmoclass:prefill'
export const PREFILL_EVENT = 'oftalmoclass:prefill'

const isIsoDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s ?? '')

// Map the tool's Romanian field names onto the form's fields.
export function toFormPrefill(input = {}) {
  const parts = []
  if (input.serviciu) parts.push(`Serviciu dorit: ${input.serviciu}.`)
  if (input.interval_preferat) parts.push(`Interval preferat: ${input.interval_preferat}.`)
  if (input.data_preferata && !isIsoDate(input.data_preferata)) {
    parts.push(`Dată dorită: ${input.data_preferata}.`)
  }
  if (input.mesaj) parts.push(input.mesaj)

  return {
    name: input.nume ?? '',
    email: input.email ?? '',
    phone: input.telefon ?? '',
    date: isIsoDate(input.data_preferata) ? input.data_preferata : '',
    message: parts.join(' '),
  }
}

export function savePrefill(prefill) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(prefill))
  } catch {
    /* private mode or blocked storage: the event below still works */
  }
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: prefill }))
}

export function takePrefill() {
  try {
    const raw = sessionStorage.getItem(KEY)
    if (!raw) return null
    sessionStorage.removeItem(KEY)
    return JSON.parse(raw)
  } catch {
    return null
  }
}
