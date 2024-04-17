import Image from 'next/image'
import brandLight from '@/assets/brand-light.svg'

export function Header() {
  return (
    <header className="bg-sunset-400 px-28 py-8">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-16">
        <Image
          className="h-16 w-auto"
          src={brandLight}
          alt="Python Norte 2024"
          width={130}
          height={90}
        />

        <nav>
          <ul className="flex flex-1 justify-between gap-8 text-sunset-950">
            <li>Home</li>
            <li>Código de conduta</li>
            <li>Keynotes</li>
            <li>FAQ</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
