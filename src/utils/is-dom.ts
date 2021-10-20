export const isDom = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)
