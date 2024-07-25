import Image from 'next/image'
import React from 'react'

import { Session } from '@/app/atividades/typeSession'
import instagramIcon from '@/assets/socialMedia/instagram.png'
import linkIcon from '@/assets/socialMedia/link.png'
import linkedinIcon from '@/assets/socialMedia/linkdin.png'

interface ActivityInfos {
  activitys: Session
}

const Activity: React.FC<ActivityInfos> = ({ activitys }) => {
  return (
    <section className="my-4 flex h-auto w-72 flex-col items-center rounded-2xl bg-sunset-900 p-4  md:w-80 xl:w-96">
      <h1 className="text-2xl font-semibold">{activitys.title}</h1>
      <section className="flex w-full justify-between">
        <div>
          <h3 className="text-xs font-extralight">Local</h3>
          <h2 className="font-medium">{activitys.venue}</h2>
          <h3 className=" mt-4 text-xs  font-extralight">Vagas restantes</h3>
          <h2 className="font-medium">50</h2>
        </div>
        <div>
          <h3 className="text-xs font-extralight">Inicio</h3>
          <h2 className="font-medium">{activitys.start_time}</h2>
          <h3 className="mt-4 text-xs font-extralight">Fim</h3>
          <h2 className="font-medium">{activitys.end_time}</h2>
        </div>
      </section>
      <div className="my-6 h-px w-full bg-white opacity-70"></div>

      <section>
        <h1 className="my-2 text-2xl font-semibold">
          {activitys.title_schedule}
        </h1>
        <h1 className="text-sm font-extralight">{activitys.description}</h1>
      </section>
      <div className="my-6 h-px w-full bg-white opacity-70"></div>

      <section className="flex w-full flex-col justify-between">
        {activitys.speakers.map((speaker) => (
          <div key={speaker.id_speaker}>
            <div className="flex">
              <img
                className="mr-4 h-20 w-20 rounded-full"
                src={speaker.photo}
                alt="Foto do palestrante"
              />
              <div>
                <h1 className="my-2 text-xl font-semibold">{speaker.name}</h1>
                <h2 className="text-xs font-extralight">{speaker.resume}</h2>
              </div>
            </div>
            <div className="m-4 flex justify-end gap-2">
              <a className="cursor-pointer" href={speaker.facebook}>
                <Image src={instagramIcon} alt="Instagram" />
              </a>
              <a className="cursor-pointer" href={speaker.linkedin}>
                <Image src={linkedinIcon} alt="Linkedin" />
              </a>
              <a className="cursor-pointer" href={speaker.lattes}>
                <Image src={linkIcon} alt="Site" />
              </a>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Activity
