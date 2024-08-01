import { getSession } from '@/lib/even3/get-session'

import ToggleSection from './toggle'

export default async function ActivityPage() {
  const { data } = await getSession()

  return (
    <section>
      <div className="w-full space-y-4 text-base lg:text-lg">
        <h1 className="text-3xl font-medium md:text-4xl lg:text-5xl">
          Atividades
        </h1>

        <ToggleSection dataSession={data} />
      </div>
    </section>
  )
}
