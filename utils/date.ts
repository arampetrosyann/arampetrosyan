export const toISODate = (date: Date | string) =>
  new Date(String(date)).toISOString()

export const formatDate = (
  date: Date | string,
  { includeMonth = true, includeDay = true } = {},
) =>
  new Date(String(date)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: includeMonth ? 'short' : undefined,
    day: includeDay ? 'numeric' : undefined,
  })
