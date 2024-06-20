import { env } from '@/env'

export const EVENT_ID = 446721

export function even3api(path: string, init?: RequestInit) {
  const baseUrl = 'https://www.even3.com.br'
  const apiPrefix = '/api/v1'

  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, {
    headers: {
      'Authorization-Token': env.EVEN3_API_TOKEN,
    },
    ...init,
  })
}
