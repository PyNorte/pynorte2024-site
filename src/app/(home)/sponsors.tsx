import Image from 'next/image'

import icetUfam from '@/assets/sponsors/logo-icet.png'
import { Badge } from '@/components/badge'
import { LinkTitleToContent } from '@/components/link-title-to-content'

// const sponsors = [
//     {
//       id: 1,
//       name: 'ICET UFAM',
//       image: icetUfam,
//       category: 'OURO',
//       color: 'bg-sunset-500',
//     },
// ]

const supporters = [
  {
    id: 1,
    name: 'ICET UFAM',
    image: icetUfam,
  },
]

export function Sponsors() {
  return (
    <div className="space-y-12 text-center lg:text-left">
      <LinkTitleToContent title="Patrocinadores" hrefId="sponsors" />

      <div className="grid justify-items-center gap-x-3 gap-y-6 lg:grid-cols-3">
        {/* {sponsors.map((sponsor) => {
          return (
            <div
              key={sponsor.id}
              className="mb-4 flex flex-col items-center lg:mb-0"
            >
              <div className="mb-4 rounded bg-sunset-50 p-6">
                <Image
                  className="h-28 w-auto"
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={172}
                  height={120}
                />
              </div>
              <Badge className={sponsor.color}>{sponsor.category}</Badge>
            </div>
          )
        })} */}
      </div>

      <div className="w-full text-center">
        <Badge className="bg-forest-800">APOIO</Badge>

        <div className="mt-8 flex items-center justify-center gap-8">
          {supporters.map((supporter) => {
            return (
              <div
                key={supporter.id}
                className="mb-4 flex flex-col items-center lg:mb-0"
              >
                <div className="mb-4 rounded bg-sunset-50 p-6">
                  <Image
                    className="h-28 w-auto"
                    src={supporter.image}
                    alt={supporter.name}
                    width={172}
                    height={120}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
