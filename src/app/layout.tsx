import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meta Cripto 3.0',
  description: 'Curso de investimento de criptomoeda',

  generator: 'Next13.js',
  applicationName: 'Meta Cripto 3.0',
  referrer: 'origin-when-cross-origin',
  keywords: ['Curso', 'Investimento criptomoeda', 'Curso de investimento criptomoeda'],
  authors: [{ name: 'Iago Nascimento' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/favicon2.png" sizes="any"/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
