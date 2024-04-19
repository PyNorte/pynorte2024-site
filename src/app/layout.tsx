import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

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
      <body className="w-full bg-sunset-950 text-zinc-50 antialiased">
        <Header />

        <main className="mx-auto min-h-screen max-w-screen-2xl px-6 py-16 lg:px-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
