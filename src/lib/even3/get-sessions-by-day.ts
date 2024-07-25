import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { even3api } from '.'

export interface Time {
  id_event: number
  id_session: number
  id_time: number
  date: string
  start_time: string
  end_time: string
}

export interface Speaker {
  id_event: number
  id_speaker: number
  id_session: number
  name: string
  photo: string
  resume: string
  facebook: string
  linkedin: string
  email: string
  lattes: string
  twitter: string
  site: string
}

export interface Session {
  id_session: number
  id_event: number
  title: string
  description: string
  credit_hour: string
  capacity: number
  ticket_price: number
  type: string
  venue: string
  tags: string
  speakers: Speaker[]
  times: Time[]
}

interface GetSessionsByDayResponse {
  schedules: {
    epoch: number
    date: string
    day: string
    sessions: Session[]
  }[]
}

export async function getSessionsByDay(): Promise<GetSessionsByDayResponse> {
  const response = await even3api('/session')
  const { data }: { data: Session[] } = await response.json()

  const sessionsByDay = data.reduce<Record<string, Session[]>>(
    (acc, session) => {
      const date = session.times[0].date

      if (!acc[date]) {
        acc[date] = []
      }

      acc[date].push(session)

      return acc
    },
    {},
  )

  Object.keys(sessionsByDay).forEach((date) => {
    sessionsByDay[date].sort((a, b) => {
      const startTimeA = a.times.find((time) =>
        time.date.startsWith(date),
      )?.start_time

      const startTimeB = b.times.find((time) =>
        time.date.startsWith(date),
      )?.start_time

      return startTimeA?.localeCompare(startTimeB || '') || 0
    })
  })

  const sortedSessionsByDay = Object.entries(sessionsByDay).sort(
    ([dateA], [dateB]) => {
      return new Date(dateA).getTime() - new Date(dateB).getTime()
    },
  )

  const result = sortedSessionsByDay.map(([date, sessions]) => ({
    date: date.split('T')[0],
    epoch: new Date(date).getTime(),
    day: format(new Date(date), 'EEEE', { locale: ptBR }),
    sessions,
  }))

  return { schedules: result }
}
