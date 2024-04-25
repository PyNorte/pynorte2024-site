import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import brandLight from '@/assets/brand-light.svg'

import { TwitterX } from './twitter-x'

export function Footer() {
  return (
    <footer className="border-t border-sunset-800">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-16 px-6 py-8 md:grid-cols-2 md:justify-items-end lg:px-16">
        <div className="space-y-8">
          <Image
            className="h-28 w-auto"
            src={brandLight}
            alt="Python Norte 2024"
            width={172}
            height={120}
          />

          <p className="text-lg leading-relaxed text-zinc-400">
            Python Brasil é uma conferência sem fins lucrativos dirigida por
            voluntários para promover a linguagem de programação Python de
            código aberto. É apoiado pela Associação Python Brasil (APyB).
          </p>

          <div className="flex gap-8">
            <Link href="https://www.facebook.com/pynorte" target="_blank">
              <Facebook className="size-8 text-white" />
            </Link>

            <Link
              href="https://www.instagram.com/pynorteoficial/"
              target="_blank"
            >
              <Instagram className="size-8 text-white" />
            </Link>

            <Link href="http://twitter.com/pynorte" target="_blank">
              <TwitterX className="size-8 fill-white" />
            </Link>

            <Link
              href="http://www.linkedin.com/company/pynorte/"
              target="_blank"
            >
              <Linkedin className="size-8 text-white" />
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <strong className="text-2xl">Links Rápidos</strong>

          <ul className="space-y-3 text-lg text-zinc-400">
            <li>Adquira seu ingresso</li>
            <li>Seja um Patrocinador</li>
            <li>Local do Evento</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
