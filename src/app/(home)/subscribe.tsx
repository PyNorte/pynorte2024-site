import Image from 'next/image'
import Link from 'next/link'

import brand from '@/assets/brand.png'
import { Button } from '@/components/button'

export function Subscribe() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2">
        <Image
          className="h-44 w-auto place-self-center md:h-52"
          src={brand}
          alt="Python Norte 2024"
        />

        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl">27 e 28 de Setembro</h1>
          <p className="leading-relaxed">
            Participe do Python Norte 2024, um evento dedicado à tecnologia e à
            inclusão! Estamos comprometidos em promover a diversidade e a
            inclusão ao longo dos dois dias do evento, que acontecerá em
            setembro. Inscreva-se agora para fazer parte deste momento
            inspirador, onde celebraremos a união de diversas vozes e
            perspectivas na comunidade de tecnologia.
          </p>
        </div>
      </div>

      <Link
        href="https://www.even3.com.br/python-norte-2024-446721/"
        target="_blank"
      >
        <Button>Inscreva-se</Button>
      </Link>
    </div>
  )
}
