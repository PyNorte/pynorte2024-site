import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

import backgroundPattern from '@/assets/backgroundOfContacts.svg'

import { LinkTitleToContent } from './link-title-to-content'
import { TwitterX } from './twitter-x'

export function OurContacts() {
  return (
    <>
      <div className="relative mx-auto flex h-[175px] w-[80%] max-w-[600px] items-center justify-center">
        {/* Imagem de fundo com tamanho menor e centralizado */}
        <div
          className="absolute inset-0 rounded-lg bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${backgroundPattern.src})`,
          }}
        ></div>

        {/* Conteúdo sobre a imagem */}
        <div className="relative z-0 space-y-8 text-center">
          {/* <h2 className="text-2xl font-bold text-zinc-50">Nossos Contatos</h2> */}
          <LinkTitleToContent title="Nossos Contatos" hrefId="OurContacts" />

          <div className="flex justify-center gap-8">
            <Link href="https://www.facebook.com/pynorte" target="_blank">
              <Facebook className="h-8 w-8 text-white hover:scale-110" />
            </Link>

            <Link
              href="https://www.instagram.com/pynorteoficial/"
              target="_blank"
            >
              <Instagram className="h-8 w-8 text-white hover:scale-110" />
            </Link>

            <Link href="http://twitter.com/pynorte" target="_blank">
              <TwitterX className="h-8 w-8 fill-white hover:scale-110" />
            </Link>

            <Link
              href="http://www.linkedin.com/company/pynorte/"
              target="_blank"
            >
              <Linkedin className="h-8 w-8 text-white hover:scale-110" />
            </Link>
          </div>

          <div className="text-center">
            <h4 className="font-semibold text-white">Email</h4>
            <a
              href="mailto:pynoteam@gmail.com"
              className="font-bold text-[#FFBC27] transition duration-300 ease-in-out hover:border-b-2 hover:border-[#FFBC27]"
            >
              pynoteam@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
