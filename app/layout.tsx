import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eloi Developers - Buy land online Kenya',
  description: 'Buy land online in Kenya. We sell land in Nairobi, Machakos, Kajiado, Kiambu, Nakuru, Narok, and other counties in Kenya.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>
        <nav className='flex justify-between py-6 bg-white px-4'>
          <div>
            <a className="font-bold text-2xl text-blue-500" href='/'>Eloi Developers</a>
          </div>

          <div className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
