import { Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

interface LinkTitleToContentProps {
  title: string
  hrefId: string
}

export function LinkTitleToContent({ title, hrefId }: LinkTitleToContentProps) {
  return (
    <div className="group -ml-4 flex gap-1 lg:-ml-9">
      <Link
        href={'#'.concat(hrefId)}
        className="rounded-md border-2 border-transparent p-1 opacity-0 transition-all hover:border-zinc-300/50 group-hover:opacity-100"
      >
        <LinkIcon className="size-6 text-zinc-300" />
      </Link>
      <h2 className="text-3xl font-bold lg:text-4xl">{title}</h2>
    </div>
  )
}
