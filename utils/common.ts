export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://arampetrosyan.com'
    : 'http://localhost:3000'

export const canNativeShare = (): boolean =>
  navigator &&
  /iPhone|iPad|iOS|Android/.test(navigator.userAgent) &&
  typeof navigator.share === 'function' &&
  (typeof navigator.canShare !== 'function' || navigator.canShare() === true)

export const nativeShare = (data: ShareData): Promise<void> =>
  navigator.share(data).catch((error) => {
    if (error.name !== 'AbortError') {
      console.error(error)
    }
  })

export const copyTextToClipboard = async (text: string): Promise<boolean> => {
  if (typeof navigator?.clipboard?.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  console.error('clipboard not supported')
  return false
}
