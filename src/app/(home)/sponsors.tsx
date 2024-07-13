import { StaticImageData } from 'next/image'

import fpf from '@/assets/sponsors/logo-fpf-tech.svg'
import icetUfam from '@/assets/sponsors/logo-icet.png'
import vinta from '@/assets/sponsors/logo-vinta.png'
import { Badge } from '@/components/badge'
import { LinkTitleToContent } from '@/components/link-title-to-content'

interface Sponsor {
  name: string
  image: StaticImageData
  height?: string
  width?: string
}

interface Quota {
  title: 'OURO' | 'PRATA' | 'BRONZE' | 'APOIO'
  sponsors: Sponsor[]
  bgColor: string
}

const quotas: Quota[] = [
  {
    title: 'OURO',
    bgColor: 'bg-sunset-500',
    sponsors: [],
  },
  {
    title: 'PRATA',
    bgColor: 'bg-river-400',
    sponsors: [],
  },
  {
    title: 'BRONZE',
    bgColor: 'bg-sunset-700',
    sponsors: [
      {
        name: 'Vinta',
        image: vinta,
        height: 'max-h-12',
      },
      {
        name: 'FPF Tech',
        image: fpf,
        height: 'max-h-14',
      },
    ],
  },
  {
    title: 'APOIO',
    bgColor: 'bg-forest-800',
    sponsors: [
      {
        name: 'ICET UFAM',
        image: icetUfam,
        height: 'max-h-32',
      },
    ],
  },
]

export function Sponsors() {
  return (
    <div className="space-y-12 text-center lg:text-left">
      <LinkTitleToContent title="Patrocinadores" hrefId="sponsors" />
      <div className=" flex w-full flex-col gap-20 text-center">
        {quotas.map(
          ({ title, bgColor, sponsors }) =>
            sponsors.length > 0 && (
              <div
                className="flex flex-col items-center justify-center gap-10"
                key={title}
              >
                <Badge className={`${bgColor}`}>{title}</Badge>

                <div className="flex w-full flex-wrap items-center justify-center gap-10">
                  {sponsors.map(({ image, name, height, width }) => (
                    <img
                      className={`${height || ' '} ${width || ' '}`}
                      src={image.src}
                      alt={name}
                      title={name}
                      key={name}
                    />
                  ))}
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  )
}
