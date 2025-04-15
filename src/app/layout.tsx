import './globals.css'
import type { Metadata } from 'next'
import { Inter, Orbitron, Space_Mono } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'OBVSLY. Obvious Solutions for Common Problems.',
  description: 'We create obvious solutions for common problems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} ${spaceMono.variable} font-sans bg-obvsly-darkest text-white overflow-x-hidden`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
