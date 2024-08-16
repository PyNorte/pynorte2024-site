import Image from 'next/image'
import Link from 'next/link'

import icet1 from '@/assets/eventLocation/icet-1.svg'
import { Button } from '@/components/button'
import { LinkTitleToContent } from '@/components/link-title-to-content'

export function EventLocation() {
  return (
    <div className="space-y-16">
      <LinkTitleToContent title="Local do evento" hrefId="eventLocation" />
      <div>
        <div className="mb-8 flex flex-row gap-16 max-lg:flex-col">
          <Image
            className=" rounded-xl max-lg:m-auto max-lg:w-2/3 max-md:w-full"
            src={icet1}
            alt="Local do evento"
          />
          <p className="flex text-lg leading-relaxed max-lg:text-lg max-md:text-base">
            A Universidade Federal do Amazonas (UFAM) iniciou a interiorização
            em Itacoatiara em 1991, com o Campus Avançado capacitando
            professores professores locais. Em 2005, foi criado o Campus
            Universitário Moysés Benarrós Israel para atender municípios da
            região. Em 2006, a Unidade Acadêmica Permanente de Itacoatiara foi
            criada, com cursos nas áreas de ciências exatas e tecnologia. Em
            2007, a unidade se tornou o Instituto de Ciências Exatas e
            Tecnologia (ICET), visando formar cidadãos qualificados e gerar
            conhecimento científico e tecnológico para o desenvolvimento do
            interior do estado.
          </p>
        </div>
        <Link href="https://goo.gl/maps/example" target="_blank">
          <Button className="w-full sm:w-auto">Google Maps</Button>
        </Link>
      </div>
    </div>
  )
}
