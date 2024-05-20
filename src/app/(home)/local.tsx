import { LinkTitleToContent } from "@/components/link-title-to-content";

import local_icet from '@/assets/local-icet.jpg';
import Image from "next/image";

export function Local() {
    return (
        <div className="space-y-16">
            <LinkTitleToContent title="Local do evento" hrefId="local" />
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 md:max-h-72 space-x-0 gap-x-0">
                <Image src={local_icet} alt="Prédio ICET" className=" rounded h-44 w-auto col-span-1 justify-self-start place-self-center md: h-56" />
                <p className="leading-normal text-base text-center md:text-xl md:col-span-2 md:text-left">
                    A Universidade Federal do Amazonas (UFAM) iniciou a interiorização em Itacoatiara em 1991, com o Campus Avançado capacitando professores locais. Em 2005, foi criado o Campus Universitário Moysés Benarrós Israel para atender municípios da região. Em 2006, a Unidade Acadêmica Permanente de Itacoatiara foi criada, com cursos nas áreas de ciências exatas e tecnologia. Em 2007, a unidade se tornou o Instituto de Ciências Exatas e Tecnologia (ICET), visando formar cidadãos qualificados e gerar conhecimento científico e tecnológico para o desenvolvimento do interior do estado.
                </p>
            </div>
        </div>
    )
}