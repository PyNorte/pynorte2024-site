import Image from 'next/image'
import Link from 'next/link'

import abstractFigure1 from '@/assets/abstract-1.svg'
import abstractFigure2 from '@/assets/abstract-2.svg'
import abstractFigure3 from '@/assets/abstract-3.svg'
import abstractFigure4 from '@/assets/abstract-4.svg'
import { LinkTitleToContent } from '@/components/link-title-to-content'
import { cn } from '@/utils/merge-classes'

const schedules = [
  {
    id: 1,
    title: 'Palestras',
    description:
      'A maior parte das palestras ministradas são escolhidas pelas pessoas que compõem a comunidade. Essas abordam temáticas nas mais diversificadas áreas de conhecimento com uso da linguagem Python.',
    icon: abstractFigure1,
    color: 'text-sunset-200',
  },
  {
    id: 2,
    title: 'Keynotes',
    description:
      'São pessoas de destaque convidadas para se apresentarem e exporem suas ideias no evento, assim como tendências para o futuro da linguagem Python com o intuito de alavancar o crescimento tecnológico regional.',
    icon: abstractFigure2,
    color: 'text-animals-400',
  },
  {
    id: 3,
    title: 'Palestras Relâmpago',
    description:
      'Fugindo do modelo tradicional, As PR são apresentações curtas, objetivas e espontâneas dos participantes. Uma ótima oportunidade para incentivar o diálogo e compartilhar as experiências entre pessoas da comunidade.',
    icon: abstractFigure3,
    color: 'text-forest-400',
  },
  {
    id: 4,
    title: 'Tutoriais',
    description:
      'São minicursos em diversos formatos que abordam o Python e tecnologias relacionadas, nos quais, quem participa pode desenvolver novas habilidades, colocando em prática o aprendizado adquirido.',
    icon: abstractFigure4,
    color: 'text-river-200',
  },
]

export function Schedule() {
  return (
    <div className="space-y-16">
      <LinkTitleToContent title="Programação" hrefId="schedule" />

      <div className="grid gap-16 lg:grid-cols-2">
        {schedules.map((schedule) => {
          return (
            <div
              key={schedule.id}
              className="flex flex-col items-center gap-8 sm:flex-row"
            >
              <Image className="size-32" src={schedule.icon} alt="Palestras" />

              <div className="flex flex-col gap-1">
                <span className={cn('text-xl font-bold', schedule.color)}>
                  {schedule.title}
                </span>
                <p className="text-base leading-relaxed">
                  {schedule.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="text-center">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSftmJ6pNJ7qPgKfNre0ebT5zGgHtyIMiyoZVr1Aj24t-7BPag/viewform"
          target="_blank"
        ></Link>
      </div>
    </div>
  )
}
