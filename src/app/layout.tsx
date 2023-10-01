import './globals.css'
import { Providers } from '@/components/Providers'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { ReactNode } from 'react'
import { Badges } from '@/components/Badges'
import { Toaster } from 'react-hot-toast'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Fast-Copy',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <html lang="pt-BR">
        <body className={lato.className}>
          {children}
          <Badges />
          <Toaster />
        </body>
      </html>
    </Providers>
  )
}
