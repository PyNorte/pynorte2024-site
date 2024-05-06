'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import brandLight from '@/assets/brand-light.svg'
import { cn } from '@/utils/merge-classes'

const links = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'Código de conduta', href: '/conduct' },
  { id: 3, label: 'Keynotes', href: '#' },
  { id: 4, label: 'FAQ', href: '#' },
]

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const pathname = usePathname()

  function handleResize() {
    const defaultMediaQueryMd = 768
    if (window.innerWidth >= defaultMediaQueryMd) {
      setIsNavOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="sticky top-0 z-10 bg-sunset-400 px-8 py-8 md:px-28">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-16">
        <Link href={'/'}>
          <Image
            className="h-14 w-auto md:h-16"
            src={brandLight}
            alt="Python Norte 2024"
            width={130}
            height={90}
          />
        </Link>

        <nav>
          <ul className="hidden flex-1 justify-between gap-8 text-sunset-950 md:flex">
            {links.map((link) => {
              return (
                <Link
                  key={link.id}
                  className={cn(
                    'cursor-pointer',
                    pathname === link.href && 'underline',
                  )}
                  href={link.href}
                >
                  <li>{link.label}</li>
                </Link>
              )
            })}
          </ul>
        </nav>

        <button
          className="rounded-lg bg-sunset-900/20 p-3 hover:bg-sunset-900/25 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sunset-950 md:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? (
            <X className="size-8 text-sunset-950" />
          ) : (
            <Menu className="size-8 text-sunset-950" />
          )}
        </button>
      </div>

      {isNavOpen && (
        <div className="mx-auto mt-8 max-w-screen-2xl border-t border-sunset-950/30 pt-8 md:hidden">
          <nav>
            <ul className="flex flex-col items-center gap-2 text-sunset-950 md:hidden">
              {links.map((link) => {
                return (
                  <Link
                    key={link.id}
                    className={cn(
                      'cursor-pointer',
                      pathname === link.href && 'underline',
                    )}
                    href={link.href}
                  >
                    <li>{link.label}</li>
                  </Link>
                )
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
