import { even3api, EVENT_ID } from '.'

interface Price {
  id_ticket: number
  id_ticket_price: number
  price: number
  due_date: string
}

interface Ticket {
  title: string
  prices: Price[]
}

export interface Event {
  id_event: number
  title: string
  url: string
  start_date: string
  start_time: string
  end_date: string
  end_time: string
  start_date_registration: string
  end_date_registration: string
  summary: string
  url_image: string
  credit_hour: number
  country: string
  state: string
  city: string
  venue: string
  latitude: string
  longitude: string
  tickets: Ticket[]
}

interface Data {
  data: Event[]
  count: number
}

export interface GetEventResponse {
  event: Event
}

export async function getEvent(): Promise<GetEventResponse> {
  const response = await even3api('/event')
  const { data } = (await response.json()) as Data

  const [event] = data.filter((item) => item.id_event === EVENT_ID)

  return { event }
}
