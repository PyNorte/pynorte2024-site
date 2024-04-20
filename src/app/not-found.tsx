import Image from 'next/image'
import Link from 'next/link'

import notFoundImage from '@/assets/404.svg'
import { Button } from '@/components/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-9">
      <h2 className="text-center text-4xl font-semibold text-sunset-800">
        Ops! Página não encontrada.
      </h2>

      <Image
        className="h-48 w-auto"
        priority={true}
        src={notFoundImage}
        alt="Página não encontrada"
      />

      <Link className="mt-8" href="/">
        <Button>Voltar para home</Button>
      </Link>
    </div>
  )
}
