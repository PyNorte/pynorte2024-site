import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/header'

import './globals.css'

const inter = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Python Norte 2024',
  description:
    'O Python Norte 2024 é o evento da linguagem de programação Python direcionada à região Norte do país organizado pela própria comunidade para difundir a linguagem e criar a conexão de diversas áreas e culturas através da tecnologia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen w-full bg-sunset-950 text-zinc-50 antialiased">
        <Header />
        <main className="mx-auto max-w-screen-2xl py-16">{children}</main>
      </body>
    </html>
  )
}
