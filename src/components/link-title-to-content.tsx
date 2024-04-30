import { Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

interface LinkTitleToContentProps {
  title: string
  hrefId: string
}

export function LinkTitleToContent({ title, hrefId }: LinkTitleToContentProps) {
  return (
    <div className="group relative">
      <Link
        href={'#'.concat(hrefId)}
        className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-md border-2 border-transparent p-0.5 opacity-0 hover:border-zinc-300/50 group-hover:opacity-100 lg:-left-10 lg:p-1"
      >
        <LinkIcon className="size-4 text-zinc-300 lg:size-6" />
      </Link>

      <h2 className="text-2xl font-bold lg:text-4xl">{title}</h2>
    </div>
  )
}
