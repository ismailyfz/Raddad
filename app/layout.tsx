tsximport type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raddad — Your business never sleeps',
  description: 'AI employee that answers every WhatsApp message automatically in Arabic and English. 24/7. For Gulf businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
