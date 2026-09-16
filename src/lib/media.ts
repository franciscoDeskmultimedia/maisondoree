/**
 * Resolves an image URL from either a Payload Media object, a string URL, or a fallback.
 */
export function getMediaUrl(media: any, fallback = ''): string {
  if (!media) return fallback
  if (typeof media === 'string') return media
  if (typeof media === 'object') {
    if (typeof media.url === 'string' && media.url) {
      return media.url
    }
    if (typeof media.filename === 'string' && media.filename) {
      return `/media/${media.filename}`
    }
  }
  return fallback
}
