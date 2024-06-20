import { LinkTitleToContent } from '@/components/link-title-to-content'
import { getEvent } from '@/lib/even3/get-event'

export async function About() {
  const { event } = await getEvent()

  return (
    <div className="space-y-4">
      <LinkTitleToContent hrefId="about-python" title="Sobre a Python" />

      <p className="text-base leading-relaxed lg:text-lg">{event.summary}</p>
    </div>
  )
}
