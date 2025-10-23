import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'SehatMurah - Booking Dokter Online',
  description: 'Platform booking dokter online terpercaya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} font-jakarta antialiased`}>
        <div className="mx-auto max-w-phone">
          {children}
        </div>
      </body>
    </html>
  )
}
