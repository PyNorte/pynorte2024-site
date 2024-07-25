import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'

import { getSessionsByDay } from '@/lib/even3/get-sessions-by-day'
import { cn } from '@/utils/merge-classes'

// import ToggleSection from './toggleSection'

export default async function ActivityPage({
  searchParams,
}: {
  searchParams: { day?: string }
}) {
  const { schedules } = await getSessionsByDay()

  const { day } = searchParams

  let currentDay = schedules[0].date

  if (day) {
    const dayOnSchedule = schedules.find((schedule) => schedule.date === day)

    if (dayOnSchedule) {
      currentDay = day
    }
  }

  return (
    <section>
      <div className="w-full space-y-4 text-base lg:text-lg">
        <h1 className="text-3xl font-medium md:text-4xl lg:text-5xl">
          Atividades
        </h1>

        <div className="flex w-fit gap-1 rounded-3xl bg-sunset-400 p-2 text-sm">
          {schedules.map((schedule) => {
            return (
              <Link
                key={schedule.epoch}
                href={`/atividades?day=${schedule.date}`}
                className={cn(
                  'px-2 py-4',
                  schedule.date === currentDay && 'rounded-2xl bg-sunset-900',
                )}
              >
                {schedule.day},{' '}
                {format(schedule.date, "d 'de' LLLL", { locale: ptBR })}
              </Link>
            )
          })}
        </div>

        {/* <ToggleSection dataSession={data} /> */}
      </div>
    </section>
  )
}
