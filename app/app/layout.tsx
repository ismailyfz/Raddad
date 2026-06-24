import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raddad — Your business never sleeps',
  description: 'AI WhatsApp employee for Gulf businesses.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
